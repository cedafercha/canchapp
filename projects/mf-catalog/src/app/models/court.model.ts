import { CourtRateDTO } from "./courtRate.model";

export class CourtDTO {
    idCourt: number = 0;
    name: string = '';
    description: string  = '';
    isActive: boolean = false;
    color: string  = '';
    courtRates: CourtRateDTO[] = [];
}