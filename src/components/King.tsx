import React from "react";
import "./King.css";

interface KingInterface {
  image: string;
  name: string;
  empire: string;
  reign: string | string[];
  description: string;
}

const King = ({ image, name, empire, reign, description }: KingInterface) => {
  return (
    <div className="king">
      <div className="img_container">
        <img src={image} alt="emperor" />
      </div>
      <h3 className="king_name">{name}</h3>
      <h5 className="king_empire">{empire}</h5>
      {typeof reign === "string" ? (
        <h5 className="king_reign">{reign}</h5>
      ) : (
        <>
          {reign.map((x) => (
            <h4 className="king_reign">{x}</h4>
          ))}
        </>
      )}
      <p className="king_description">{description}</p>
    </div>
  );
};

export default King;
