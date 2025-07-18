import { Module } from '@nestjs/common';
import { BreezeConnectController } from './breeze-connect.controller';
import { BreezeConnectService } from './breeze-connect.service';

@Module({
  controllers: [BreezeConnectController],
  providers: [BreezeConnectService],
})
export class BreezeConnectModule {}
