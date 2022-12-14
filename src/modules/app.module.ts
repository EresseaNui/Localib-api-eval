import { RentingModule } from './renting.module';
import { CustomerModule } from './customer.module';
import { VehicleModule } from './vehicle.module';
import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DBNAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    VehicleModule,
    CustomerModule,
    RentingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
