import React from "react";
import googlePlayBadge from "../../assets/images/googlePlayBadge.svg";
import appstoreBadge from "../../assets/images/appstoreBadge.svg";
import "./leftSection.css";

export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  links,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row pb-5 boxes section">
        <div className="col-6 box2 image">
          {imageURL.map((img, index) => (
            <img key={index} src={img.src} className={img.className} />
          ))}
        </div>
        <div className="col-1" box2></div>
        <div className="col-5 p-5 mt-5 box2">
          <h1 className="fs-3 pt-5">{productName}</h1>
          <p className="fs-5 text-muted">{productDescription}</p>

          {links && links.length > 0 && (
            <div className="links">
              {links.map((link, index) => (
                <a key={index} href={link.url}>
                  {link.label} <i class="fa-solid fa-arrow-right fs-6"></i>
                </a>
              ))}
            </div>
          )}

          <div className="badges">
            <a href={googlePlay}>
              <img src={googlePlayBadge}></img>
            </a>
            <a href={appStore}>
              <img src={appstoreBadge}></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
