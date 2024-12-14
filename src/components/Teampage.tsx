// pages/team/index.tsx
"use client"; // Add this line at the top

import React from 'react';
import TeamCard from './TeamCard';
import StrategistSection from './StrategistSection';
import styles from '../../components/team/team.module.css';
import { Person, StrategistTeams } from '../lib/team';

const advisers: Person[] = [/* Adviser team member data */];
const heads: Person[] = [/* Head team member data */];
const strategists: StrategistTeams = {
    tech: [/* Tech team data */],
    academics: [/* Academics team data */],
    design: [/* Design team data */],
    management: [/* Management team data */]
};

const TeamPage = () => {
    return (
        <div className={styles.teamPage}>
            <h1 className={styles.title}>Our Team</h1>
            
            <section className={styles.section}>
                <h2>Advisers</h2>
                <div className={styles.cardContainer}>
                    {advisers.map((person) => (
                        <TeamCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>Heads</h2>
                <div className={styles.cardContainer}>
                    {heads.map((person) => (
                        <TeamCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            <section className={styles.section}>
                <h2>Strategists</h2>
                <StrategistSection strategists={strategists} />
            </section>
        </div>
    );
};

export default TeamPage;
