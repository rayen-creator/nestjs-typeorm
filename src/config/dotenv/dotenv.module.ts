import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import typeorm from '../typeorm';

@Module({
    imports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [typeorm]
      }),
    ],
    exports: [
      ConfigModule.forRoot({
        isGlobal: true,
        load: [typeorm]
      }),
    ],
  })
export class DotenvModule {}
