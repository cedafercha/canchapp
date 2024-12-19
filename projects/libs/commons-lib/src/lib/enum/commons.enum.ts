export enum ApiEnum {
    Booking = 'http://localhost:5196/api/Booking/',
    Security = 'http://localhost:5197/api/Security/',
    Company = 'http://localhost:5198/api/Company/',
    Browser = 'http://localhost:5199/api/Browser/',  
    Select = 'http://localhost:5199/api/Select/',
    HoliDay = 'http://localhost:5199/api/HoliDay/',
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
	Cash = 0,
	Debit = 1,
    Credit = 2
}

export enum PaymentStatusEnum {
    Pending = 0,
    Paid = 1
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
    BookingPaid = 103
}
