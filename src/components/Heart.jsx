import React from "react";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Heart({ job }) {
  const [isRed, setIsRed] = useState(false);

  const handleClick = async () => {
    setIsRed(!isRed);
    const newCityRef = doc(collection(db, "favorites"));

    await setDoc(newCityRef, job);
  };
  return (
    <GoHeartFill
      className="clickHeart"
      onClick={handleClick}
      style={{ color: isRed ? "red" : "black", cursor: "pointer" }}
    />
  );
}
