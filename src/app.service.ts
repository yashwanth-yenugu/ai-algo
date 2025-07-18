import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private counter: number = 0;

  ping() {
    this.counter++;
    return { message: 'Pong', counter: this.counter };
  }
}
