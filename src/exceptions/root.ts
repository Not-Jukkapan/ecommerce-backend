// message, status code, error code,error message

export class HttpException extends Error {
    message: string;
    statusCode: number;
    errorCode: ErrorCodes;
    errorMessage: any;

    constructor(message: string, statusCode: number, errorCode: ErrorCodes, errorMessage: any) {
        super(message);
        this.message = message;
        this.statusCode = statusCode;
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }
}

export enum ErrorCodes {
    USER_NOT_FOUND = 1001,
    USER_ALREADY_EXISTS = 1002,
    INCORRECT_PASSWORD = 1003,
    UNPROCESSABLE_ENTITY = 2001,
}