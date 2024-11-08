import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('merhaba')
  getHello1(): string {
    return this.appService.getHello1();
  }

  @Get('hello')
  getHello2(): string {
    return this.appService.getHello2();
  }
}
