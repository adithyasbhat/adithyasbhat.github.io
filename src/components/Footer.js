import React, { useContext } from "react";

import { ProfileInfo } from "./Profile";
import Icons from "./common/Icons";

function Footer(props) {
  const pinfo = useContext(ProfileInfo);

  const navIcons = pinfo.navigations.map((item, index) => (
    <Icons
      title={item.title}
      pagelink={item.pagelink}
      iclass={item.iclass}
      key={index}
    />
  ));

  return (
    <footer className="pt-4 pb-4 text-muted text-center d-print-none">
      <div className="container">
        <div className="my-3">
          <div className="h4">{pinfo.name}</div>
          <div className="footer-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">{navIcons}</ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
