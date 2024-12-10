import { PaymentStatusEnum, PaymentTypeEnum } from "commons-lib";

export class BookingDTO {
    DateTimeStart: Date = new Date();
    DateTimeEnd: Date = new Date();
    IdCustomer?: number;
    IdCourt: number = -1;    
    PaymentStatus: PaymentStatusEnum = PaymentStatusEnum.Pending;
    PaymentType: PaymentTypeEnum = PaymentTypeEnum.Cash;
    IsRecurrent: boolean = false;
    Observation: string = '';
    dateCreated: Date = new Date();
}