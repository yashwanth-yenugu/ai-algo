import { BadRequestException, Controller, Get, Query } from '@nestjs/common';
import { BreezeConnectService } from './breeze-connect.service';

@Controller('breeze-connect')
export class BreezeConnectController {
  constructor(private breezeConnectService: BreezeConnectService) {}

  @Get('/get-funds')
  async getFunds(@Query('apiSession') apiSession: string) {
    try {
      const response = await this.breezeConnectService.getFunds(apiSession);
      return { success: true, data: response };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  @Get('/get-demat-holdings')
  async getDematHoldings(@Query('apiSession') apiSession: string) {
    try {
      const response =
        await this.breezeConnectService.getDematHoldings(apiSession);
      return { success: true, data: response };
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
