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


  