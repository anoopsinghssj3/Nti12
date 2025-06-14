// src/pages/SearchResults.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
// import { allItems } from '../data';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SearchResults() {
  const query = useQuery();
  const searchTerm = query.get("q")?.toLowerCase() || "";

  const allData = [
    { title: "Python Course", type: "Course" },
    { title: "Blog: Mastering React", type: "Blog" },
    { title: "Online Registration Form", type: "Form" },
    { title: "Cloud Computing", type: "Course" },
  ];

  const filteredData = allData.filter(item =>
    item.title.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="container my-5">
      <h3>Results for: "{searchTerm}"</h3>
      {filteredData.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <ul>
          {filteredData.map((item, idx) => (
            <li key={idx}>
              <strong>{item.type}</strong>: {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
