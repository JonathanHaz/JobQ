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
    const q = query(collection(db, 'resume'), where('idUser', '==', user.uid));
      const querySnapshot = await getDocs(q);
      const dataFromFirestore = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(dataFromFirestore);
    // try {
    //     const docRef = doc(db, 'users', user.uid);
    //     console.log(docRef);
    //   const q = query(collection(db, 'resume'), where('idUser', '==', user.uid));
    //   await updateDoc(q, { PDF: data });
    //   console.log("Document successfully updated!");
    // } catch (error) {
    //   console.error("Error updating document: ", error);
    // }
  };
  return (
    <div>
      <input type="file" name="PDF" onChange={handleFile} />
      <img src={filePDF} alt="" />
    </div>
  );
}
