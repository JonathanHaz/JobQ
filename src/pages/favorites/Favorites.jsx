import React, { useState, useEffect, useContext } from "react";
import "./favorite.css";
import { db } from "../../config/firebase";
import CardJob from "../../components/CardJob/CardJob";
import HrCard from "../../components/HrCards/HrCard";
import { collection, query, getDocs, where } from "firebase/firestore";
import { userContext } from "../../context/Global";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);
  const { user } = useContext(userContext);

  const getDataFavorites = async () => {
    try {
      const q = query(
        collection(db, "favorites"),
        where("idUserFavorites", "==", user.uid)
      );
      const Snapshot = await getDocs(q);
      const dataFromFirestore = Snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(dataFromFirestore);
      setFavorites([...dataFromFirestore]);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  useEffect(() => {
    getDataFavorites();
  }, []);

  return (
    <>
      <h3 className="txtHeaderFavo">Jobs I liked ({favorites.length}) :</h3>

      <div className="containerCardsFavo">
        {favorites.map((favo, i) => {
          if (favo.WorkRequire) {
            return <HrCard key={i} hrJob={favo} />;
          } else {
            return <CardJob key={i} job={favo} />;
          }
        })}
      </div>
    </>
  );
}
