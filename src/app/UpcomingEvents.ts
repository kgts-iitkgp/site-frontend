import { Event } from "./types";
import nashify from "/public/Nashify.jpg"
import Tech from "/public/Tech_workshop.jpg"
import Stratathon from '/public/Stratathon.jpg'
import war from "/public/war_of_wits.jpg"

export const Upcoming : Event[] = [
    {
        id: '1',
        title : 'Wits on Board',
        description : "It is an annual on-spot strategy based competition for students of IIT Kharagpur",
        startDate : "March",
        endDate : "March",
        image : war,
    },
    {
        id : "2",
        title : "Nashify",
        description: "It is the first of its kind game theory based on-spot inter-college event designed and conducted by the The KGPian Game Theory Society in Kshitij",
        startDate : "2024-11-03",
        endDate : "2024-11-03",
        image : nashify,
    },
    {
        id : "3",
        title : "Stratathon",
        description : "It is the flagship event of KGTS, which is conducted every year, during Kshitij, IIT Kharagpur. It includes various in-house developed strategic decision-making games, played in various rounds and formats, among the students of colleges from all over India.",
        month : "January",
        image : Stratathon,
    },
    {
        id : "4",
        title : "Tech Workshop",
        description: "Four-week long event on Web Development to give begineers a glimpse of website making.",
        month : "February",
        image : Tech,
    },
]