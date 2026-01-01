import React from "react";
import { HashLink } from "react-router-hash-link";

export default function ServicesBread({ bread3, bread4 }) {
  return (
    <div className="BreadCrumb">
      <div className="Container">
        <a href="/">Home</a>
        <HashLink smooth to="/#our-services">Services</HashLink>
        {bread3 ? <a href="">{bread3}</a> : <a href="/eb2-niv">NIW</a>}

        {bread4 && <a href="">{bread4}</a>}
      </div>
    </div>
  );
}
