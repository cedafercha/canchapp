export enum ApiEnum {
    Customer = 'http://localhost:5194/api/Customer/',
    Report = 'http://localhost:5195/api/Report/',
    DashBoard = 'http://localhost:5195/api/DashBoard/',
    Booking = 'http://localhost:5196/api/Booking/',
    Security = 'http://localhost:5197/api/Security/',
    Company = 'http://localhost:5198/api/Company/',
    Browser = 'http://localhost:5199/api/Browser/',  
    Select = 'http://localhost:5199/api/Select/',
    HoliDay = 'http://localhost:5199/api/HoliDay/',
    Court = 'http://localhost:5199/api/Court/',    
}
export enum NotificationTypeEnum {
	Succes = 'success',
    Default = 'default',
    Primary = 'primary',
    Secondary = 'secondary',
    Warning = 'warning',
    Danger = 'danger',
	Info = 'info'
}
export enum PlacementFromEnum {
	Top = 'top',
	Bottom = 'bottom'
}
export enum PlacementAlignEnum {
	Left = 'left',
	Right = 'right',
    Center = 'center'
}
export enum PaymentTypeEnum {
    None = 0,
	Cash = 1,
	Debit = 2,
    Credit = 3
}
export enum PaymentStatusEnum {
    None = 0,
    Pending = 1,
    Paid = 2
}
export enum BrowserIdEnum {
	BrowserCustomer = 'BrowserCustomer'
}
export enum SelectIdEnum {
	ListCourt = 'ListCourt'
}
export enum ActionEnum {
	None = 0,
	Create = 1,
    Edit = 2,
    Detail = 3,
    Delete = 4
}
export enum CodeErrorEnum {
    /* Error general  */
    InternalServerError = 100,
    /* Error Reservas  */
	BookingNotAvailable = 101,
    BookingNotFound = 102,
    BookingPaid = 103,
    BookingDateStartMustBeGreater = 104,
    /* Error Canchas  */
	CourtWithRecords = 201,
    CourtNotFound = 202,
}
export enum DayEnum {
	Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
