/** @format */

import { loadAuth2, gapi } from "gapi-script";
import { useState } from "react";
import { useAuthStore } from "store";

// Interface
interface GapiProps {
  isSignedIn: boolean;
  name: string;
  profileImg: string;
}

// Default data
const GapiDefault = {
  isSignedIn: false,
  name: "",
  profileImg: "",
};

// Component
const useGapi = () => {
  // State
  const [gapiData, setGapiData] = useState<GapiProps>(GapiDefault);

  // Store
  const { setGapiUserData } = useAuthStore();

  // Method
  const signIn = async () => {
    // let auth2 = await loadAuth2(gapi, clientId, scopes);
    let auth2 = await loadAuth2(
      gapi,
      "226878313650-0oirlul4vcfssgl76uto3cc4a8f6hvdc.apps.googleusercontent.com",
      "https://www.googleapis.com/auth/calendar.events"
    );

    if (auth2.isSignedIn.get()) {
      const currentUser = auth2.currentUser.get();
      setGapiData({
        isSignedIn: !!auth2.isSignedIn.get(),
        name: currentUser.getBasicProfile().getName(),
        profileImg: currentUser.getBasicProfile().getImageUrl(),
      });
      setGapiUserData({
        isSignedIn: !!auth2.isSignedIn.get(),
        name: currentUser.getBasicProfile().getName(),
        profileImg: currentUser.getBasicProfile().getImageUrl(),
      });

      await listEvents();
    } else {
      console.log("Could not sign in to google");
    }
  };

  const listEvents = async () => {
    const response = await gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });

    console.log("Events:", response.result.items);
  };

  const updateUser = (currentUser: any) => {
    const name = currentUser.getBasicProfile().getName();
    const profileImg = currentUser.getBasicProfile().getImageUrl();
    console.log({
      name: name,
      profileImg: profileImg,
    });
  };

  return { signIn, gapiData };
};

export default useGapi;
