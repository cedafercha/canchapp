import { CourtEventDTO } from "./courtEvent.model";
import { CustomerEventDTO } from "./customerEvent.model";

export class EventDTO {
    dateTimeStart: Date = new Date();
    dateTimeEnd: Date = new Date();
    customer?: CustomerEventDTO;
    court?: CourtEventDTO;
    observation: string = '';
    isRecurrent: boolean = false;    
}