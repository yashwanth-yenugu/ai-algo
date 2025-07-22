import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  BreezeConnect,
  type Response,
  type GetFundsSuccess,
  type GetDematHoldingsSuccess,
} from 'breezeconnect';

@Injectable()
export class BreezeConnectService {
  constructor(private configService: ConfigService) {}

  private async generateSession(apiSession: string): Promise<BreezeConnect> {
    try {
      const breeze = new BreezeConnect({
        appKey: this.configService.getOrThrow('BREEZE_CONNECT_API_KEY'),
      });
      await breeze.generateSession(
        this.configService.getOrThrow('BREEZE_CONNECT_SECRET_KEY'),
        apiSession,
      );
      return breeze;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getFunds(apiSession: string): Promise<Response<GetFundsSuccess>> {
    try {
      const breeze = await this.generateSession(apiSession);
      const response = await breeze.getFunds();
      console.log('getFunds response: ', response);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }

  async getDematHoldings(
    apiSession: string,
  ): Promise<Response<GetDematHoldingsSuccess[]>> {
    try {
      const breeze = await this.generateSession(apiSession);
      const response = await breeze.getDematHoldings();
      console.log('getDematHoldings response: ', response);
      return response;
    } catch (error) {
      throw new Error(error as string);
    }
  }
}
