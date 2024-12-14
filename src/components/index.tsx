"use client";

import React from "react";
import TeamCard from "./TeamCard";
import StrategistSection from "./StrategistSection";
import styles from "../../components/team/team.module.css";
import { advisers, heads, strategists } from "../lib/teamData";

const TeamPage = () => {
    return (
        <div className={styles.teamPage}>
            <h1 className={styles.title}>Our Team</h1>

            {/* Advisers Section */}
            <section className={styles.section}>
                <h2>Advisers</h2>
                <div className={styles.cardContainer}>
                    {advisers.map((person) => (
                        <TeamCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            {/* Heads Section */}
            <section className={styles.section}>
                <h2>Heads</h2>
                <div className={styles.cardContainer}>
                    {heads.map((person) => (
                        <TeamCard key={person.name} person={person} />
                    ))}
                </div>
            </section>

            {/* Strategists Section */}
            <section className={styles.section}>
                <h2>Strategists</h2>
                <StrategistSection strategists={strategists} />
            </section>
        </div>
    );
};

export default TeamPage;
