import React, { useState } from "react";
import parse from "html-react-parser";
import { TbSend } from "react-icons/tb";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import Heart from "../Heart";
import { Link } from "react-router-dom";

export default function CardJob({ job }) {
  const [showLess, setShowLess] = useState(false);
  const [description, setDescription] = useState(
    parse(job.contents.substring(0, 200))
  );
  const handleClick = () => {
    setDescription(parse(job.contents.substring(0, 1200)));
    setShowLess(true);
  };
  const handleShowLess = () => {
    setDescription(parse(job.contents.substring(0, 200)));
    setShowLess(false);
  };

  return (
    <div className="fullCard">
      <div className="bluePas"></div>
      <h3 className="containNameAndHeart">
        {job.categories[0]?.name} <Heart className="clickHeart" job={job} />
      </h3>
      <p>
        <span>{job.locations[0]?.name}</span>
      </p>
      <p>{description}</p>

      <div className="containerButton">
        <Link to={"/thankYou"}>
          {" "}
          Send Cv <TbSend />
        </Link>
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
