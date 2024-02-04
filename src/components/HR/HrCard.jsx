import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/Global';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../config/firebase';
import WorkRequire from './WorkRequire';

export default function HrCard() {
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [workInfo, setWorkInfo] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [workRequirements, setWorkRequirements] = useState([]);
  const docRef = collection(db, "HrJobs");

  const changeContactInfoHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const changeWorkHandler = (e) => {
    workInfo[e.target.name] = e.target.value;
    setWorkInfo({ ...workInfo });
    console.log(workInfo);
  };

  const [workExpRederList, setWorkExpRederList] = useState([]);

  const createMoreWorkExp = () => {
    setWorkRequirements([...workRequirements, workInfo]);
    setWorkExpRederList([
      ...workExpRederList,
      <WorkRequire key={workExpRederList.length} handleChange={changeWorkHandler} />,
    ]);
  };

  useEffect(() => {
    createMoreWorkExp();
    console.log(workInfo);
  }, []);

  const nextStage = () => {
    switch (currentPage) {
      case 1:
        setResumeData({ ...resumeData, ...formData });
        setCurrentPage(currentPage + 1);
        break;
      case 2:
        setResumeData({ ...resumeData, WorkRequire: workRequirements });
        setCurrentPage(currentPage + 1);
        break;
      default:
        break;
    }
  };

  const prevStage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newResume = { idUser: user.uid, ...resumeData };
    const formDocRef = await addDoc(docRef, newResume);
    console.log(resumeData);
  };

  return (
    <div>
      <form id='ResumeForm' onSubmit={handleSubmit}>
        {currentPage === 1 ? (
          <>
            <input placeholder="Company Name" name="CompanyName" onChange={changeContactInfoHandler} />
            <input placeholder="About" name="about" onChange={changeContactInfoHandler} />
            <input type="number" placeholder="Company number" name="phoneNumber" onChange={changeContactInfoHandler} />
            <input type="email" placeholder="Company@gmail.com" name="email" onChange={changeContactInfoHandler} />
            <input placeholder="level" name={`level`} onChange={changeContactInfoHandler} />
            <p>publish date: </p>
             <input type="date" name={`PublishDate`} onChange={changeContactInfoHandler} /> 
            <button type='button' onClick={nextStage}>Next</button>
          </>
        ) : currentPage === 2 ? (
          <>
            {workExpRederList.map((workComponent, index) => (
              <div key={index}>
                {workComponent}
              </div>
            ))}
            <button type='button' onClick={createMoreWorkExp}>Add one more</button>
            <button type='button' onClick={nextStage}>Next</button>
            <button type='button' onClick={prevStage}>Back</button>
          </>
        ) : currentPage === 3 ? (
          <>
            <button type="submit">Submit</button>
            <button type='button' onClick={prevStage}>Back</button>
          </>
        ) : null}
      </form>
    </div>
  );
}