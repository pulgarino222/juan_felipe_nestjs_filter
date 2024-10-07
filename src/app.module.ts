import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModuleCustom } from './config/config.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [ConfigModuleCustom,
    TypeOrmModule.forRoot({ 
      type:'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.PASSWORD,
      database: process.env.DB_NAME,
      entities: [join(__dirname + '/**/*.entity{.ts,.js}')],
      synchronize: true,}),

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
