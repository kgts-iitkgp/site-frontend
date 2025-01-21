import { StaticImageData } from "next/image";
export interface Event {
    id: string;
    title: string;
    description: string;
    image?: StaticImageData;
    startDate?: string;
    endDate?:string;
    month?: string;
    venue?: string;
    images? : StaticImageData[];
    maxParticipantsTeamSize: number;
  }

export interface Profile {
  id: number;
  name: string;
  designation: string;
  image: string;
  FBLink: string;
  InstaLink: string;
  LinkedInLink: string;
  MailLink: string;
}

export interface EventRegistrationFormData {
  invitation?: string[];
}