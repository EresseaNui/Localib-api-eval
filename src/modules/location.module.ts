import { Vehicle } from './../entities/vehicle.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Location } from 'src/entities/locations.entity';
import { Client } from 'src/entities/client.entity';
import { ClientModule } from './client.module';
import { LocationController } from 'src/controllers/location.controller';
import { LocationService } from 'src/services/location.service';
import { VehicleModule } from './vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, Vehicle, Client]),
    ClientModule,
    VehicleModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
