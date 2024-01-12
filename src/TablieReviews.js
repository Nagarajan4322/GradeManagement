import React from 'react';
import 'TableReviews.css';

const contributors = [
  { name: 'Michal K.', contributions: 785 },
  { name: 'Sebastian M.', contributions: 542 },
  // Add more contributors as needed
];

function TablieReviews() {
  return (
    <div className="app">
      <header>
        <h1>Top Public Contributors</h1>
      </header>
      <main>
        <ul className="contributors-list">
          {contributors.map((contributor, index) => (
            <li key={index} className="contributor">
              <div className="avatar"></div>
              <div className="info">
                <p>{contributor.name}</p>
                <p>{contributor.contributions} Contributions</p>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default TablieReviews;
