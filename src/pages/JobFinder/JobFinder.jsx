import "./job.css";
import axios from "axios";
import CardJob from "../../components/CardJob/CardJob";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import React from "react";
import HrCard from "../../components/HrCards/HrCard";
import { useState, useEffect } from "react";

export default function JobFinder() {
  const [jobs, setJobs] = useState([]);
  const [selected, steSelected] = useState("");
  const [hrJobs, setHrJobs] = useState([]);
  const [page, setPage] = useState(1);

  const fetchJobs = async (category) => {
    const res = await axios.get(
      `https://www.themuse.com/api/public/jobs?category=${category}&page=1`
    );
    const data = await res.data;
    console.log(data);
    setJobs(data.results);
  };
  const fetchFirstTime = async () => {
    const res = await axios.get(
      `https://www.themuse.com/api/public/jobs?location=israel&page=2 `
    );
    const data = await res.data;

    console.log(data);
    setJobs(data.results);
  };

  const handleChange = (e) => {
    steSelected(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchJobs(selected, page);
    console.log(e);
    e.target[0].value = "";
  };
  const handleClickMoreFetchJobs = async () => {
    setPage(page + 1);
    const res = await axios.get(
      `https://www.themuse.com/api/public/jobs?category=${selected}&page=${page}`
    );
    const data = await res.data;

    setJobs([...jobs, ...data.results]);
  };

  const setDataFromHr = async () => {
    try {
      const q = query(collection(db, "HrJobs"));
      const Snapshot = await getDocs(q);
      const dataFromFirestore = Snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setHrJobs([...dataFromFirestore]);
    } catch (error) {
      console.error("Error fetching data from Firestore:", error);
    }
  };
  useEffect(() => {
    fetchFirstTime();
    setDataFromHr();
  }, []);

  const categories = [
    "User",
    "Accounting",
    "Accounting and Finance",
    "Account Management",
    "Account Management/Customer Success",
    "Administration and Office",
    "Advertising and Marketing",
    "Animal Care",
    "Arts",
    "Business Operations",
    "Cleaning and Facilities",
    "Computer and IT",
    "Construction",
    "Corporate",
    "Customer Service",
    "Data and Analytics",
    "Data Science",
    "Design",
    "Design and UX",
    "Editor",
    "Education",
    "Energy Generation and Mining",
    "Entertainment and Travel Services",
    "Farming and Outdoors",
    "Food and Hospitality Services",
    "Healthcare",
    "HR",
    "Human Resources and Recruitment",
    "Installation, Maintenance, and Repairs",
    "IT",
    "Law",
    "Legal Services",
    "Management",
    "Manufacturing and Warehouse",
    "Marketing",
    "Mechanic",
    "Media, PR, and Communications",
    "Mental Health",
    "Nurses",
    "Office Administration",
    "Personal Care and Services",
    "Physical Assistant",
    "Product",
    "Product Management",
    "Project Management",
    "Protective Services",
    "Public Relations",
    "Real Estate",
    "Recruiting",
    "Retail",
    "Sales",
    "Science",
    "setEngineering",
    "Social Services",
    "Software Engineer",
    "Software Engineering",
    "Sports, Fitness, and Recreation",
    "Transportation and Logistics",
    "Unknown",
    "UX",
    "Videography",
    "Writer",
    "Writing and Editing",
  ];

  return (
    <div className="containerAppSearch">
      <h1>Job Finder App</h1>
      <form onSubmit={handleSubmit}>
        <div class="bottom">
          <input
            type="text"
            placeholder="Type to search..."
            list="data"
            onChange={handleChange}
          />
          <datalist id="data">
            {categories.map((category, i) => {
              return <option key={i}>{category}</option>;
            })}
          </datalist>
        </div>
      </form>
      {jobs.length > 0 ? (
        <>
          <div className="containerCards">
            {hrJobs
              ? hrJobs.map((hrJob, i) => {
                  return <HrCard key={i} hrJob={hrJob} />;
                })
              : ""}
            {jobs.map((job, i) => {
              return <CardJob key={i} job={job} />;
            })}
          </div>
        </>
      ) : (
        <h1>has not find job in this category</h1>
      )}
      <div className="buttonShowMore">
        <button onClick={handleClickMoreFetchJobs} className="btnMoreCardFecth">
          Click for more
        </button>
      </div>
    </div>
  );
}
