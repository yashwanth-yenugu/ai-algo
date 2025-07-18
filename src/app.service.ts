import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Response } from 'express';

@Injectable()
export class AppService {
  private counter: number = 0;

  constructor(private configService: ConfigService) {}

  ping() {
    this.counter++;
    return { message: 'Pong', counter: this.counter };
  }

  login(res: Response): void {
    res
      .status(302)
      .redirect(
        `https://api.icicidirect.com/apiuser/login?api_key=${encodeURIComponent(this.configService.getOrThrow('BREEZE_CONNECT_API_KEY'))}`,
      );
  }
}
