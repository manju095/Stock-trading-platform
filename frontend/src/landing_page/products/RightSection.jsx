import React from "react";
import "./leftSection.css";

export default function RightSection({
  imageURL,
  productName,
  productDescription,
  links,
}) {
  return (
    <div className="container">
      <div className="row pt-5 boxes section">
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
        </div>
        <div className="col-1 box2"></div>
        <div className="col-6 box2 image">
          {imageURL.map((img, index) => (
            <img key={index} src={img.src} className={img.className} />
          ))}
        </div>
      </div>
    </div>
  );
}
