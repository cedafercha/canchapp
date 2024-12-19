import { PaymentStatusEnum, PaymentTypeEnum } from "commons-lib";
import { CourtDTO } from "./court.model";
import { CustomerDTO } from "./customer.model";

export class EventDTO {
    idBooking: number = -1;
    dateTimeStart: Date = new Date();
    dateTimeEnd: Date = new Date();
    dateTimeStartNew: Date = new Date();
    dateTimeEndNew: Date = new Date();
    customer?: CustomerDTO;
    court: CourtDTO = new CourtDTO();
    observation: string = '';
    isRecurrent: boolean = false;
    paymentType: PaymentTypeEnum = PaymentTypeEnum.Cash;
    paymentStatus: PaymentStatusEnum = PaymentStatusEnum.Pending;
}