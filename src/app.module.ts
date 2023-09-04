import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { DotenvModule } from './config/dotenv/dotenv.module';
import { DatabaseModule } from './config/database/database.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [SharedModule,DotenvModule, DatabaseModule, AuthModule, UserModule, TaskModule, CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
