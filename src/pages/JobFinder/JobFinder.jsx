import "./job.css";
import axios from "axios";
import CardJob from "../../components/CardJob/CardJob";

import React from "react";
import { useState, useEffect } from "react";

export default function JobFinder() {
  const [jobs, setJobs] = useState([]);
  const [selected, steSelected] = useState("");

  const fetchJobs = async (category) => {
    const res = await axios.get(
      `https://www.themuse.com/api/public/jobs?category=${category}&page=1`
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
    fetchJobs(selected);
  };

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
    <div>
      <h1>Job Finder App</h1>
      <form onSubmit={handleSubmit}>
        <input
          list="data"
          placeholder="Type to search..."
          onChange={handleChange}
        />
        <datalist id="data">
          {categories.map((category, i) => {
            return <option key={i}>{category}</option>;
          })}
        </datalist>
      </form>
      <div>
        {jobs.map((job, i) => {
          return <CardJob key={i} job={job} />;
        })}
      </div>
    </div>
  );
}
