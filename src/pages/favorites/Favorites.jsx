import React, { useState, useEffect } from "react";
import "./favorite.css";
import { db } from "../../config/firebase";
import CardJob from "../../components/CardJob/CardJob";
import HrCard from "../../components/HrCards/HrCard";
import { collection, query, getDocs } from "firebase/firestore";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const getDataFavorites = async () => {
    try {
      const q = query(collection(db, "favorites"));
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
    <div>
      <h3>Jobs I liked ({favorites.length})</h3>
      {/* {favorites.map((favo)=>{

      })} */}
    </div>
  );
}
