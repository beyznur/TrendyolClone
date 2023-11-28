import React from "react";
import "./footer.scss";
import { footerBottomLink, footerTopLink } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="topFooter">
        {footerTopLink.map((section, index) => (
          <div key={index} className="row">
            <h3>{section.title}</h3>
            {section.links.map((link, i) => (
              <span key={i}>{link}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="bottomFooter">
        <div className="bottomLeft">
          <span>
            ©2023 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı
            Saklıdır.
          </span>
        </div>
        <div className="bottomRight">
          {footerBottomLink.map((link, index) => (
            <span key={index}>{link}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
