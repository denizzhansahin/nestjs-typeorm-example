import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!.';
  }

  create(body?: any): string {
    return JSON.stringify(body);
  }
}
