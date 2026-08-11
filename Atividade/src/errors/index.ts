export abstract class AppError extends Error{
    constructor(message: string, public statusCode: number = 500){
        super(message)
        this.statusCode = statusCode
    }
}

export class BadRequestError extends AppError {
    constructor(message: string){
        super(message)
        this.statusCode = 400
    }
}

export class UnauthorizeError extends AppError{
    constructor(message: string){
        super(message)
        this.statusCode = 401
    }
}

export class ForbiddenError extends AppError{
    constructor(message: string){
        super(message)
        this.statusCode = 402
    }
}

export class NotFoundError extends AppError{
    constructor(message: string){
        super(message)
        this.statusCode = 404
    }
}

export class ConflictError extends AppError{
    constructor(message: string){
        super(message)
        this.statusCode = 409
    }
}