import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BreezeConnectModule } from './breeze-connect/breeze-connect.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  imports: [ConfigModule.forRoot({ isGlobal: true }), BreezeConnectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
