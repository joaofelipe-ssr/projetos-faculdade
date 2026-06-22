class DomainException extends Error {
    constructor(message:string) {
        super(message);
        this.name = 'DomainException';
        this.message = 'Exceção de domínio genérica';
        (Error as any).captureStackTrace(this, this.constructor);
    }
}

export { DomainException }