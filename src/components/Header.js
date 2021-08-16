import React, { useContext } from "react";
import Icons from "./common/Icons";
import { ProfileInfo } from "./Profile";

function Header() {
  const pinfo = useContext(ProfileInfo);
  const title = pinfo.name;

  const navIcons = pinfo.navigations.map((item, index) => (
    <Icons
      title={item.title}
      pagelink={item.pagelink}
      iclass={item.iclass}
      key={index}
    />
  ));

  return (
    <header className="d-print-none">
      <div className="container text-center text-lg-left">
        <div className="py-3 clearfix">
          <h1 className="site-title mb-0"> {title} </h1>
          <div className="site-nav">
            <nav role="navigation">
              <ul className="nav justify-content-center">{navIcons}</ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
