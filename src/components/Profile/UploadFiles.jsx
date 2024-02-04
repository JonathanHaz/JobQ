import { collection, query, where, getDocs, doc, setDoc, updateDoc } from "@firebase/firestore";
import axios from "axios";
import React, { useContext, useState } from "react";
import { userContext } from "../../context/Global";
import { db } from "../../config/firebase";

export default function UploadFiles() {
    const {user} = useContext(userContext)
  const Present_Key = "usersPdfs";
  const Cloud_name = "dzdsii4hw";
  const [filePDF , setFilePDF] = useState();

  const handleFile = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", Present_Key);
    axios
      .post(
        `https://api.cloudinary.com/v1_1/${Cloud_name}/image/upload`,
        formData
      )
      .then((res) => {
          uploadToUser(res.data.secure_url)
          console.log(res)
          })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(user);
  const uploadToUser = async (data) => {
    const q = query(collection(db, 'users'), where('idUser', '==', user.uid));
    try {
      const querySnapshot = await getDocs(q);
      if (querySnapshot.docs.length > 0) {
        const documentId = querySnapshot.docs[0].id;
        const documentRef = doc(collection(db, 'users'), documentId);
        await updateDoc(documentRef, {PDF: data});
      } else {
        console.log("No matching documents found.");
      }
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };
  

  return (
    <div>
      <input type="file" name="PDF" onChange={handleFile} />
    </div>
  );
}
