import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/Global';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../config/firebase';
import WorkRequire from './WorkRequire';
import "./HrStyle.css"
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
            <input className="form-group" id="Company" placeholder="Company Name" name="CompanyName" onChange={changeContactInfoHandler} />
            <input className="form-group" id="about" placeholder="About" name="about" onChange={changeContactInfoHandler} />           
            <select className="form-group" id="level" name="level" onChange={changeContactInfoHandler}>
              <option value="">Select Level</option>
              <option value="Mid">Mid</option>
              <option value="Senior">Senior</option>
              <option value="Junior">Junior</option>
            </select>         
            <input className="form-group" id="PhoneNumber" type="number" placeholder="Company number" name="phoneNumber" onChange={changeContactInfoHandler} />
            <input className="form-group" id="Email" type="email" placeholder="Company@gmail.com" name="email" onChange={changeContactInfoHandler} />
            <p className="form-group">publish date: </p>
            <input className="form-group" id="dateCompany" type="date" name="PublishDate" onChange={changeContactInfoHandler} />
            <button className="hrButton" type='button' onClick={nextStage}>Next</button>
          </>
        ) : currentPage === 2 ? (
          <>
            {workExpRederList.map((workComponent, index) => (
              <div key={index}>
                {workComponent}
              </div>
            ))}
            <button className="hrButton" type='button' onClick={createMoreWorkExp}>Add one more</button>
            <button className="hrButton" type='button' onClick={nextStage}>Next</button>
            <button className="hrButton" type='button' onClick={prevStage}>Back</button>
          </>
        ) : currentPage === 3 ? (
          <>
            <button className="hrButton" type="submit">Submit</button>
            <button className="hrButton" type='button' onClick={prevStage}>Back</button>
          </>
        ) : null}
      </form>
    </div>
  );
}