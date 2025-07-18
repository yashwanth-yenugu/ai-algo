import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { BreezeConnect } from 'breezeconnect';

@Injectable()
export class BreezeConnectService {
  constructor(private configService: ConfigService) {}

  private async generateSession(apiSession: string): Promise<any> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const breeze = new BreezeConnect({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        appKey: this.configService.getOrThrow('BREEZE_CONNECT_API_KEY'),
      });
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      await breeze.generateSession(
        this.configService.getOrThrow('BREEZE_CONNECT_SECRET_KEY'),
        apiSession,
      );
      return breeze;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getFunds(apiSession: string): Promise<unknown> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const breeze = await this.generateSession(apiSession);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const response = await breeze.getFunds();
      console.log('getFunds response: ', response);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getDematHoldings(apiSession: string): Promise<unknown> {
    try {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const breeze = await this.generateSession(apiSession);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      const response = await breeze.getDematHoldings();
      console.log('getDematHoldings response: ', response);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
