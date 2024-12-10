import { CourtDTO } from "./court.model";
import { CustomerDTO } from "./customer.model";

export class EventDTO {
    dateTimeStart: Date = new Date();
    dateTimeEnd: Date = new Date();
    customer?: CustomerDTO;
    court: CourtDTO = new CourtDTO();
    observation: string = '';
    isRecurrent: boolean = false;    
}