/** @format */

import { jwtDecode } from "jwt-decode";
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
dayjs.extend(duration);

export const formatForSelectInput = (data: Array<{}>, key: any, name: any) => {
  return data.map((d: any) => ({ id: d[key], name: d[name] }));
};

export const formatCurrency = (number: string | number) => {
  if (number === undefined || number === null) return "--";

  // Check if the input is a valid number
  let newNumber = number;
  if (typeof newNumber !== "number") {
    newNumber = parseInt(newNumber);
  }

  // Format the number as currency
  const formattedCurrency = newNumber.toLocaleString("en-US", {
    style: "currency",
    currency: "NGN", // You can change the currency code as needed
    minimumFractionDigits: 0,
  });

  return formattedCurrency;
};

export const formatNumber = (number: string | number) => {
  // Check if the input is a valid number
  let newNumber = number;
  if (typeof newNumber !== "number") {
    newNumber = parseInt(newNumber);
  }

  // Format the number as currency
  const formattedNumber = newNumber.toLocaleString("en-US", {
    currency: "NGN", // You can change the currency code as needed
    minimumFractionDigits: 0,
  });

  return formattedNumber;
};

export const checkTokenExpiration = (token: string) => {
  if (!token) return false;

  try {
    const decodedToken: any = jwtDecode(token);

    if (!decodedToken) {
      // Token is not valid
      return false;
    }

    const { exp } = decodedToken;

    // Check if the token has expired
    return exp * 1000 > Date.now(); // Multiply by 1000 to convert seconds to milliseconds
  } catch (error) {
    console.error("Error decoding token:", error);
    return false;
  }
};

export const _getQueryString = (data: Record<string, any>): string => {
  // Create a cloned object
  const clonedObj: Record<string, any> = JSON.parse(JSON.stringify(data));

  // Delete invalid properties
  for (const [key, value] of Object.entries(clonedObj)) {
    if ([null, undefined, ""].includes(value) || typeof value === "object") {
      delete clonedObj[key];
    }
  }

  const queryString: string = Object.entries(clonedObj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return queryString;
};

export const debounceFunc = (func: any, handler: any, delay: any) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};

export function _convertTimeTo12HourFormat(timeStr: string): string {
  // Define the regex pattern to extract hour, minute, and period (AM/PM)
  const timeRegex = /(\d{2}):(\d{2})\s?(AM|PM)/i;
  const match = timeStr.match(timeRegex);

  if (!match) {
    throw new Error("Invalid time format");
  }

  // Destructure the matched groups into hour, minute, and period
  let [, hourStr, minute, period] = match;

  // Convert hour from string to number
  let hour = parseInt(hourStr, 10);

  // Convert to 24-hour format first if needed
  if (period.toUpperCase() === "AM" && hour === 12) {
    hour = 0; // 12 AM is 00:00 in 24-hour format
  } else if (period.toUpperCase() === "PM" && hour !== 12) {
    hour += 12; // Convert PM hours to 24-hour format
  }

  // Convert back to 12-hour format
  if (hour === 0) {
    hour = 12; // 00:00 -> 12:00 AM
    period = "AM";
  } else if (hour > 12) {
    hour -= 12; // Convert back to 12-hour format
    period = "PM";
  } else if (hour === 12) {
    period = period.toUpperCase(); // Keep 12:XX PM or 12:XX AM as is
  } else {
    period = period.toUpperCase(); // AM period remains the same
  }

  // Format hour and minute to ensure two digits
  const formattedHour = hour.toString().padStart(2, "0");
  const formattedMinute = minute.padStart(2, "0");

  return `${formattedHour}:${formattedMinute} ${period}`;
}

export const _convertTo12HourFormat = (time24: string) => {
  if (!time24 || time24 === "--") return "--";

  // Check if time has AM or PM
  const timeSplit = time24.split(" ");
  if (
    (timeSplit.length > 1 && timeSplit[1] === "AM") ||
    timeSplit[1] === "PM"
  ) {
    return _convertTimeTo12HourFormat(time24);
  }

  // If not continue

  // Parse the input time string
  const [hours, minutes] = time24.split(":");

  // Create a Date object with a dummy date (January 1, 2000) to easily format the time
  const dummyDate = new Date(`2000-01-01T${hours}:${minutes}:00`);

  // Format the time in 12-hour format with AM or PM
  const time12 = dummyDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return time12;
};

export const _convertISOTime = (isoDateString: any, format?: "ymd" | "dmy") => {
  const date = new Date(isoDateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const ymdFormat = `${year}-${month}-${day}`;
  const dmyFormat = `${day}-${month}-${year}`;

  return format === "ymd" ? ymdFormat : dmyFormat;
};

export const _getAxiosErrorMessage = (data: any) => {
  const { message } = data?.response?.data;
  return message;
};

export const _debounceFunc = (func: any, handler: any, delay: any) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};

export const getTimeDifference = (time1: string, time2: string) => {
  const t1 = dayjs(`2025-01-01 ${time1}`); // Dummy date to ensure parsing
  const t2 = dayjs(`2025-01-01 ${time2}`);

  const diff = dayjs.duration(t2.diff(t1)); // Get time difference

  return `${diff.hours()} hour${diff.hours() > 1 ? "s" : ""} ${
    diff.minutes() > 0 ? `${diff.minutes()} minute` : ""
  }`;
};

export const _getMeetingPlatformName = (url: string): string => {
  const lowerUrl = url.toLowerCase();

  if (lowerUrl.includes("zoom.us")) return "Zoom";
  if (lowerUrl.includes("meet.google.com")) return "Google Meet";
  if (lowerUrl.includes("teams.microsoft.com")) return "Microsoft Teams";
  if (lowerUrl.includes("webex.com")) return "Cisco Webex";
  if (lowerUrl.includes("bluejeans.com")) return "BlueJeans";
  if (lowerUrl.includes("skype.com")) return "Skype";
  if (lowerUrl.includes("whereby.com")) return "Whereby";
  if (lowerUrl.includes("gotomeeting.com")) return "GoToMeeting";
  if (lowerUrl.includes("jitsi.org")) return "Jitsi Meet";
  if (lowerUrl.includes("discord.gg") || lowerUrl.includes("discord.com"))
    return "Discord";

  return "Unknown Platform";
};

export const _isCourseOngoing = (
  date: string,
  start_time: string,
  end_time: string
): boolean => {
  const now = new Date();

  // Combine date with start and end times
  const startDateTime = new Date(`${date}T${start_time}:00`);
  const endDateTime = new Date(`${date}T${end_time}:00`);

  // Return true if current time is within the course time
  return now >= startDateTime && now <= endDateTime;
};
