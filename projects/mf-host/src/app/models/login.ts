export interface AuthCredentials {
    email: string;
    password?: string;
    tenantId?: string;
}

export interface ILoginToken {
    token: string;
    isProvisional: boolean;
    companies: ICompanyLogin[];
}

export interface ICompanyLogin {
    companyName: string;
    email: string;
    idRole: number | null;
    idUser: number;
    roleName: string | null;
    tenantId: string;
    userName: string;
}