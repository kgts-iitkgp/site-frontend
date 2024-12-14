// types/team.d.ts
export interface Person {
    name: string;
    position: string;
    photo: string;
    links: {
        facebook: string;
        linkedin: string;
        github: string;
    };
}

export interface StrategistTeams {
    tech: Person[];
    academics: Person[];
    design: Person[];
    management: Person[];
}
