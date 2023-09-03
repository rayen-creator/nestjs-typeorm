import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { DotenvModule } from './config/dotenv/dotenv.module';
import { DatabaseModule } from './config/database/database.module';

@Module({
  imports: [SharedModule,DotenvModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
