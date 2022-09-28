import { VehiculeService } from './../services/vehicule.service';
import { VehiculeModule } from './vehicule.module';
import { Vehicule } from './../entities/vehicule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Location } from 'src/entities/locations.entity';
import { Client } from 'src/entities/client.entity';
import { ClientModule } from './client.module';
import { LocationController } from 'src/controllers/location.controller';
import { LocationService } from 'src/services/location.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Location, Vehicule, Client]),
    ClientModule,
    VehiculeModule,
  ],
  controllers: [LocationController],
  providers: [LocationService],
})
export class LocationModule {}
