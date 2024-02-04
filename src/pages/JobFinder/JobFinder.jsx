import "./job.css";
import axios from "axios";

import React from "react";
import { useState, useEffect } from "react";

export default function JobFinder() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    const apiKey =
      "7c67576cbca56381bf8a993d5158b6272b670260e955bf0f9b115c1825c80555";
    const url =
      "https://www.themuse.com/api/public/jobs?location=israel&page=2 ";
    const category = "Software Engineer";
    const location = "Hermitage, PA";
    const page = 1;

    try {
      const response = await axios.get(url, {
        params: {
          category: category,
          location: location,
          page: page,
          api_key: apiKey,
        },
      });

      const data = await response.data;

      console.log(data);
      setJobs(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      setLoading(false);
    }
  };
  const fetch = async () => {
    const res = await axios.get(
      "https://www.themuse.com/api/public/jobs?location=israel&page=2"
    );
    const data = await res.data;
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
    fetch();
  }, []);
  console.log(jobs);
  return (
    <div>
      <h1>Job Finder App</h1>
      {/* {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>
              <h2>{job.name}</h2>
              <p>{job.company}</p>
            </li>
          ))}
        </ul>
      )} */}
    </div>
  );
}
