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
  }

export const event : Event[] =[
    {
        id: '1',
        title : 'Wits on Board',
        description : "It is an annual on-spot strategy based competition for students of IIT Kharagpur",
        startDate : "March",
        endDate : "March",
    },
    {
        id : "2",
        title : "Nashify",
        description: "It is the first of its kind game theory based on-spot inter-college event designed and conducted by the The KGPian Game Theory Society in Kshitij",
        startDate : "2024-11-03",
        endDate : "2024-11-03",
    },
    {
        id : "3",
        title : "Stratathon",
        description : "It is the flagship event of KGTS, which is conducted every year, during Kshitij, IIT Kharagpur. It includes various in-house developed strategic decision-making games, played in various rounds and formats, among the students of colleges from all over India.",
        month : "January",
    },
    {
        id : "4",
        title : "Tech Workshop",
        description: "Four-week long event on Web Development to give begineers a glimpse of website making.",
        month : "February",
    },
   
    {
        id : "6",
        title : "Treasure Hunt",
        description: "Assemble your crew and prepare to embark on a quest across the IIT Kharagpur campus. This is not just any hunt - your path will be filled with brain-bending riddles and strategic challenges that will test your wit and teamwork.",
        startDate: "2024-08-25",
        endDate: "2024-08-25",
        venue : "Nalanda",
    },
]
  