import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: process.env.DB_DATABASE,
      host: process.env.DB_HOST,
      password: String(process.env.DB_PASSWORD),
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      synchronize: false,
      entities: [`${__dirname}/**/*entity{.ts,.js}`],
      migrations: [`${__dirname}/migration/*{.ts,.js}`],
      migrationsRun: true,
    }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
