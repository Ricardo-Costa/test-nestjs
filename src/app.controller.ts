import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('logs')
  logs(): Array<string> {
    return [
      'log1: ok, só vai.',
      'log1: ok, só vai.'
    ];
  }
}
