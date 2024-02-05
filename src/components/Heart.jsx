import React, { useContext } from "react";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { userContext } from "../context/Global";

export default function Heart({ job }) {
  const { user } = useContext(userContext);
  const [isRed, setIsRed] = useState(false);

  const handleClick = async () => {
    setIsRed(!isRed);
    const newCityRef = doc(collection(db, "favorites"));

    await setDoc(newCityRef, { ...job, idUserFavorites: user.uid });
  };
  return (
    <GoHeartFill
      className="clickHeart"
      onClick={handleClick}
      style={{ color: isRed ? "red" : "black", cursor: "pointer" }}
    />
  );
}
