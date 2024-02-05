import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../context/Global';
import { addDoc, collection } from '@firebase/firestore';
import { db } from '../../config/firebase';
import WorkRequire from './WorkRequire';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import "./HrStyle.css"
export default function HrCard() {
  const { user } = useContext(userContext);
  const [formData, setFormData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [workInfo, setWorkInfo] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [workRequirements, setWorkRequirements] = useState([]);
  const docRef = collection(db, "HrJobs");
  const topJobLevels = [
    {
      value: 'Mid',
      label: 'Mid',
    },
    {
      value: 'Senior',
      label: 'Senior',
    },
    {
      value: 'Junior',
      label: 'Junior',
    },
  ];
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

  const defaultProps = {
    options: topJobLevels,
    getOptionLabel: (option) => option,
  };

  return (
    <div>
      <form id='ResumeForm' onSubmit={handleSubmit}>
        {currentPage === 1 ? (
          <>
          <Box
              sx={{
                '& .MuiTextField-root': { m: 1, width: '60ch' },
              }}
              noValidate
              autoComplete="off"
            >
         <TextField
          id="outlined-multiline-static Company"
          name="CompanyName"
          label="Company Name"
          multiline
          onChange={changeContactInfoHandler}
          InputProps={{ className: 'white-input' }}
          />      
        <TextField
          id="outlined-multiline-static about"
          name="about"
          label="About"
          multiline
          rows={4}
          onChange={changeContactInfoHandler}
          InputProps={{ className: 'white-input' }}/>
          <TextField
          id="outlined-select-currency"
          select
          name="level"
          label="level"
          defaultValue="Junior"
          helperText="Please select level"
          onChange={changeContactInfoHandler}
          InputProps={{ className: 'white-input' }}
        >
          {topJobLevels.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-multiline-static PhoneNumber"
          type="number"
          name="phoneNumber"
          label="Company Phone"
          multiline
          onChange={changeContactInfoHandler}
          InputProps={{ className: 'white-input' }}
          /> 
          <TextField
          id="outlined-multiline-static Email"
          type="email"
          name="email"
          label="Company email"
          multiline
          onChange={changeContactInfoHandler}
          InputProps={{ className: 'white-input' }}
          />
          <TextField id="outlined-basic"  type="date" variant="outlined" name="PublishDate" onChange={changeContactInfoHandler} InputProps={{ className: 'white-input' }}/>
                 
            <button className="hrButton" type='button' onClick={nextStage}>Next</button>
           </Box></>
        ) : currentPage === 2 ? (
          <>
            {workExpRederList.map((workComponent, index) => (
              <div key={index}>
                {workComponent}
              </div>
            ))}
            <div className='buttons'>
            <button className="hrButton" type='button' onClick={createMoreWorkExp}>Add one more</button>
            <button className="hrButton" type='button' onClick={nextStage}>Next</button>
            <button className="hrButton" type='button' onClick={prevStage}>Back</button> 
            </div>
            
          </>
        ) : currentPage === 3 ? (
          <div className='buttons'>
            <button className="hrButton" type="submit">Submit</button>
            <button className="hrButton" type='button' onClick={prevStage}>Back</button>
          </div>
        ) : null}
      </form>
    </div>
  );
}