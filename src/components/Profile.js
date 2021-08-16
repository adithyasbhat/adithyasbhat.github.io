import React, { useEffect } from "react";
import AOS from "aos";

import Content from "./contents/Content";
import Header from "./Header";
import Footer from "./Footer";
import { myprofile } from "../myprofile";

export const ProfileInfo = React.createContext();

function Profile(props) {
  useEffect(() => {
    AOS.init({
      anchorPlacement: "top-left",
      duration: 1000,
    });
  }, []);

  return (
    <ProfileInfo.Provider value={myprofile}>
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </ProfileInfo.Provider>
  );
}

export default Profile;
