import React from "react";
import { Person } from "../lib/team";
import styles from "../assets/styles/team.module.css";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

interface TeamCardProps {
    person: Person;
}

const TeamCard: React.FC<TeamCardProps> = ({ person }) => (
    <div className={styles.card}>
        <img src={person.photo} alt={person.name} className={styles.photo} />
        <h3 className={styles.name}>{person.name}</h3>
        <p className={styles.position}>{person.position}</p>
        <div className={styles.socialLinks}>
            <a href={person.links.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebook />
            </a>
            <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
            </a>
            <a href={person.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
            </a>
        </div>
    </div>
);

export default TeamCard;
