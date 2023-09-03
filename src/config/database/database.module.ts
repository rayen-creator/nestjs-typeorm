import { Module } from '@nestjs/common';
import {  ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DotenvModule } from '../dotenv/dotenv.module';

@Module({
    imports: [
        // TypeOrmModule.forRootAsync({
        //     imports: [ConfigModule],
        //     useFactory: (configService: ConfigService) => ({
        //         type: 'postgres',
        //         host: configService.get('POSTGRES_HOST'),
        //         port: +configService.get<number>('POSTGRES_PORT'),
        //         username: configService.get('POSTGRES_USER'),
        //         password: configService.get('POSTGRES_PASSWORD'),
        //         database: configService.get('POSTGRES_DATABASE'),
        //         entities: [Item],
        //         migrations: ["config/migrations/*{.ts,.js}"],
        //         synchronize: true,
        //         autoLoadEntities: true
        //     }),
        //     inject: [ConfigService],
        // }),
        TypeOrmModule.forRootAsync({
            inject: [ConfigService],
            useFactory: async (configService: ConfigService) => (configService.get('typeorm'))
        }),
        DotenvModule,
    ],
    exports: []
}) export class DatabaseModule { }
