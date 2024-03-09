// TeamCard.js
import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

function TeamCard({ team }) {
  return (
    <div className="team-card">
      <div className="team-card-content">
        <h2 className="team-card-school">{team.school}</h2>
        <p className="team-card-mascot">Mascot: {team.name}</p>
        <p className="team-card-location">
          Location: {team.city}, {team.state}
        </p>
      </div>
    </div>
  );
}

TeamCard.propTypes = {
  team: PropTypes.shape({
    school: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
};

export default TeamCard;
