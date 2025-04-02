export class ErrorResponse {
  status: number;
  error: {
    message: string | string[];
  };

  constructor(status: number, message: string | string[]) {
    this.status = status;
    this.error = {
      message,
    };
  }
}

export class SuccessResponse {
  status: number;
  success: {
    message: string | Object;
    token?: string;
  };

  constructor(status: number, message: string, token?: string) {
    this.status = status;
    this.success = {
      message,
      ...(token && { token }),
    };
  }
}
