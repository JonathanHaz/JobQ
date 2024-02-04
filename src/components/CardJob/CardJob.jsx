import React from "react";

export default function CardJob({ job }) {
  return (
    <div className="fullCard">
      <h1>{job.name}</h1>
      <span>{job.company.name}</span>
      <h3>{job.categories[0]?.name}</h3>

      <p>
        {job.publication_date} <span>{job.locations[0].name}</span>
      </p>
      <div className="card">
        <p>ABOUT US</p>
        <p>{job.contents}</p>
      </div>
    </div>
  );
}
