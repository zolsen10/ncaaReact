import React from 'react';
import './App.css'; // Import any CSS files here
import teamData from './CollegeBasketballTeams.json'; // Importing the JSON file
import TeamCard from './TeamCard'; // Corrected import statement

function Welcome() {
  return (
    <div>
      <h1>NCAA College Basketball Teams</h1>
      <h2>2023-2024 Season - March Madness Tournament</h2>
    </div>
  );
}

function TeamList() {
  return (
    <div className="team-card-container">
      {teamData.teams.map((team, index) => (
        <TeamCard key={index} team={team} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <TeamList />
    </div>
  );
}

export default App;
