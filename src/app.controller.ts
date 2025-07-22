import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  ping() {
    return this.appService.ping();
  }

  @Get('/login')
  login(@Res() res: Response) {
    return this.appService.login(res);
  }

  @Post('/callback')
  loginCallback(@Body() body: { API_Session: string }) {
    return { success: true, apiSession: body.API_Session };
  }

  @Get('/health')
  health() {
    return { status: 'ok', timestamp: new Date().toISOString() };
  }
}
