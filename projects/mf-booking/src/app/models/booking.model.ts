import { PaymentStatusEnum, PaymentTypeEnum } from "commons-lib";

export class BookingDTO {
    idBooking?: number;
    dateTimeStart: Date = new Date();
    dateTimeEnd: Date = new Date();
    idCustomer?: number;
    idCourt: number = -1;    
    paymentStatus: PaymentStatusEnum = PaymentStatusEnum.Pending;
    paymentType: PaymentTypeEnum = PaymentTypeEnum.Cash;
    isRecurrent: boolean = false;
    observation: string = '';
    dateCreated: string = new Date().toISOString();
    dateUpdated: string = new Date().toISOString();
}