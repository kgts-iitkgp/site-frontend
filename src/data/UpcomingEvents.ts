import { Event } from "./types";

import Tech from "/public/images/Tech_workshop.jpg"
import Stratathon from '/public/images/Stratathon.jpg'
import war from "/public/images/war_of_wits.jpg"

export const Upcoming : Event[] = [
    {
        id: '1',
        title : 'Wits on Board',
        description : "It is an annual on-spot strategy based competition for students of IIT Kharagpur",
        startDate : "March",
        endDate : "March",
        month : "March",
        image : war,
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