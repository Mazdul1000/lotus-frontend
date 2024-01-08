export interface IMeta {
    limit: number;
    page: number;
    size: number;
}

export type IResponseSuccessType = {
    data: any;
    meta?: IMeta
}

type IGenericErrorMessageType = {
    path: string | number;
    message: string
}

export type IResponseErrorType = {
    statusCode: number;
    message: string;
    errorMessages: IGenericErrorMessageType[]
}
