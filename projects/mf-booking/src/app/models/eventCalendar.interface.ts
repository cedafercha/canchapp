import { PaymentStatusEnum, PaymentTypeEnum } from "commons-lib";

export interface EventCalendarDTO {
    idBooking: number;
    idUser: number;
    nameUser: string;
    idCustomer: number;
    nameCustomer: string;
    idCourt: number;  
    nameCourt: string;
    dateCreated: Date;
    paymentStatus: PaymentStatusEnum;
    paymentType: PaymentTypeEnum;
    dateTimeStart: Date;
    dateTimeEnd: Date;
    isRecurrent: boolean;
    observation: string;
    color: string;
}