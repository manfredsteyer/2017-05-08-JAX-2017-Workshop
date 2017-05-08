
import { ErrorHandler } from '@angular/core';

export class CustomErrorHandler implements ErrorHandler {

  handleError(error: any): void {
    console.error('custom error handler', error);
  }

}
