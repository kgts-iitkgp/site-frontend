// components/team/StrategistSection.tsx
"use client"; // Add this line at the top

import React, { useState } from 'react';
import TeamCard from './TeamCard';
import styles from '../assets/styles/team.module.css';
import { StrategistTeams, Person } from '../lib/team';

interface StrategistSectionProps {
    strategists: StrategistTeams;
}

const StrategistSection: React.FC<StrategistSectionProps> = ({ strategists }) => {
    const [activeTeam, setActiveTeam] = useState<keyof StrategistTeams>('tech');

    const renderTeam = (team: Person[]) => (
        <div className={styles.cardContainer}>
            {team.map((person) => (
                <TeamCard key={person.name} person={person} />
            ))}
        </div>
    );

    return (
        <div>
            <div className={styles.tabs}>
                <button onClick={() => setActiveTeam('tech')}>Tech Team</button>
                <button onClick={() => setActiveTeam('academics')}>Academics Team</button>
                <button onClick={() => setActiveTeam('design')}>Design Team</button>
                <button onClick={() => setActiveTeam('management')}>Management Team</button>
            </div>
            {renderTeam(strategists[activeTeam])}
        </div>
    );
};

export default StrategistSection;
