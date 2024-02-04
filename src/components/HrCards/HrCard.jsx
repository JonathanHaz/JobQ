import React from "react";
import { useState } from "react";
import { TbSend } from "react-icons/tb";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Heart from "../Heart";
import { Link } from "react-router-dom";

export default function HrCard({ hrJob }) {
  const [showLess, setShowLess] = useState(false);
  const handleClick = () => {
    setShowLess(true);
  };
  const handleShowLess = () => {
    setShowLess(false);
  };

  const WorkRequire = Object.values(hrJob.WorkRequire);

  return (
    <div className="fullCard">
      <div className="bluePas"></div>
      <h3 className="containNameAndHeart">
        {hrJob.CompanyName} <Heart className="clickHeart" job={hrJob} />
      </h3>
      <p>
        <span>{hrJob.PublishDate}</span>
      </p>
      <p>{hrJob.about}</p>
      <div className="containerButton">
        <Link to={"/thankYou"}>
          {" "}
          Send Cv <TbSend />
        </Link>
      </div>
      <span>level: {hrJob.level}</span>
      <spam>Email :{hrJob.email}</spam>
      <div>
        <p>requires:</p>
        <ul>
          {WorkRequire.map((require, i) => {
            return <li key={i}>{require.requiresundefined}</li>;
          })}
        </ul>
      </div>
      {!showLess ? (
        <button onClick={handleClick} className="buttonShowMore">
          Show more <CiCirclePlus />
        </button>
      ) : (
        <button onClick={handleShowLess} className="buttonShowMore">
          Show less <CiCircleMinus />
        </button>
      )}
    </div>
  );
}
