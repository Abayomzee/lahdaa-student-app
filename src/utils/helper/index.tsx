import { jwtDecode } from "jwt-decode";

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

export const _getBusinessLocationStates = (locations: object[]) => {
  if (!locations?.length) return [];

  const locationsArr = locations.map(
    (location: any) => location?.locationState
  );

  return locationsArr.join("/");
  /**
 * {
    "id": "5a253c8b-873c-4b44-b89d-b447cef261e3",
    "createdAt": "2024-02-05T17:22:00.813Z",
    "updatedAt": "2024-02-05T17:22:00.813Z",
    "locationAddress": "68987 Mueller Spur",
    "locationState": "Rivers",
    "locationLga": "Ikwerre",
    "locationCity": "Santa Barbara",
    "locationLandmark": "Opposite first bank",
    "longitude": "",
    "latitude": "",
    "businessId": "d6d3385e-682a-4df4-8349-e6c99f8a9009"
}
 */
};

const _getBusinessHoursDetails = (hours: object[]) => {
  if (hours) {
    const date = new Date();
    const todayIndex = date.getDay();

    return hours[todayIndex];
  }
};

export const _getBusinessTimeStatus = (hours: object[]) => {
  /**
   * {
    "label": "Monday",
    "isOpened": true,
    "openTime": "09:00",
    "closeTime": "16:00"
}
   */
  const dayDetails: any = _getBusinessHoursDetails(hours);
  if (!dayDetails?.isOpened) return false;

  // Get current time
  // Determine weater to return close or open time

  return null;
};

export const _getBusinessTodayCloseTime = (hours: object[]) => {
  /**
   * {
    "label": "Monday",
    "isOpened": true,
    "openTime": "09:00",
    "closeTime": "16:00"
}
   */
  const dayDetails: any = _getBusinessHoursDetails(hours);
  if (!dayDetails?.isOpened) return false;

  // Get current time
  // Determine weater to return close or open time

  const todyCloseTime = _convertTo12HourFormat(dayDetails.closeTime);

  return todyCloseTime;
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

export const _getMediaForCategory = (
  medias: any[],
  categoryName: string
): any[] => {
  return medias.filter((media: any) => media.categoryName === categoryName);
};

export const _getMediaUrlsFromArrayOfObjects = (medias: any[]) => {
  return medias.map((media: any) => media?.mediaUrl);
};

export const _getPaymentTypeDescription = (type: string) => {
  const description: any = {
    subscriptionPayment: "Subscription",
    adsPayment: "Ads",
    eventAdsPayment: "Event",
    promotionPayment: "Promotion",
  };

  return description[`${type}`];
};

export const _getGeneralMapData = (data: any[]) => {
  if (data && data?.length) {
    const businessData = data?.map((data) => data?.business);
    const mapData = businessData?.map((data) => ({
      lng: data?.latitude || 3.3792,
      lat: data?.longitude || 6.5244,
      logo: data?.businessLogo,
      name: data?.businessName,
      position: {
        lng: data?.latitude || 3.3792,
        lat: data?.longitude || 6.5244,
      },
    }));
    return mapData;
  } else {
    return [];
  }
};

export const _getExcerpts = (content: string, numOfWords: number = 5) => {
  const splittedContent = content.split(" ");
  return `${splittedContent.slice(0, numOfWords).join(" ")}...`;
};

export const _getBusinessLocationDetails = (restaurant: any) => {
  const { latitude, longitude } = restaurant?.business;
  return { latitude, longitude };
};

export const _getUnclaimedBusinessLocationDetails = (business: any) => {
  const { latitude, longitude } = business;
  return { latitude, longitude };
};

export const _calculateDistance = (
  userLat: any,
  userLon: any,
  businessLat: any,
  businessLon: any
) => {
  const toRadians = (degree: any) => degree * (Math.PI / 180);

  const R = 6371; // Radius of the Earth in kilometers
  const dLat = toRadians(businessLat - userLat);
  const dLon = toRadians(businessLon - userLon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(userLat)) *
      Math.cos(toRadians(businessLat)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in kilometers

  return distance;
};

export const _debounceFunc = (func: any, handler: any, delay: any) => {
  clearTimeout(handler);
  return setTimeout(func, delay);
};

export const _convertBusinessToRestaurant = (business: any) => {
  const restaurant = business.restaurant;
  let newRestaurantObj = {};
  if (restaurant) {
    const businessData = { ...business };
    delete businessData.restaurant;

    newRestaurantObj = {
      ...restaurant,
      business: {
        ...businessData,
      },
    };
  }

  return newRestaurantObj;
};
