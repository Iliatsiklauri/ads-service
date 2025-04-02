"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuccessResponse = exports.ErrorResponse = void 0;
class ErrorResponse {
    constructor(status, message) {
        this.status = status;
        this.error = {
            message,
        };
    }
}
exports.ErrorResponse = ErrorResponse;
class SuccessResponse {
    constructor(status, message, token) {
        this.status = status;
        this.success = {
            message,
            ...(token && { token }),
        };
    }
}
exports.SuccessResponse = SuccessResponse;
