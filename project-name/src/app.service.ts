import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! den';
  }

  getHello1(): string {
    return 'Hello Deniz!';
  }

  getHello2(): string {
    return 'Hello aksdjfaksdfasf!';
  }
}
