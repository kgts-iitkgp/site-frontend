import { Event } from '../types'; 

export function categorizeEvents(events: Event[]) {
  const currentDate = new Date();

  const upcomingEvents: Event[] = [];
  const ongoingEvents: Event[] = [];
  const pastEvents: Event[] = [];

  function getMonthIndex(month: string): number {
    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames.indexOf(month);
  }


  events.forEach(event => {
    if (event.startDate && event.endDate) {
      const startDate = new Date(event.startDate);
      const endDate = new Date(event.endDate);

      const currentDateWithoutTime = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());

      if (startDate > currentDateWithoutTime) {
        upcomingEvents.push(event);
      } else if (startDate <= currentDateWithoutTime && endDate >= currentDateWithoutTime) {
        ongoingEvents.push(event);
      } else if (endDate < currentDateWithoutTime) {
        pastEvents.push(event);
      }
    } else if (event.month) {
      const eventMonthIndex = getMonthIndex(event.month);
      const currentMonthIndex = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();


      const eventDate = new Date(currentYear + 1, eventMonthIndex, 1);

      if (eventDate > currentDate) {
        upcomingEvents.push(event);
      } else if (eventDate.getMonth() === currentMonthIndex) {
        ongoingEvents.push(event); 
      } else if (eventDate < currentDate) {
        pastEvents.push(event);
      }
    }
  });

  return { upcomingEvents, ongoingEvents, pastEvents };
}
