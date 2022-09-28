import {
  VehicleService,
} from '../services/vehicle.service';
import {
  VehicleController,
} from '../controllers/vehicle.controller';
import { Vehicle } from '../entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Location } from 'src/entities/locations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Location])],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
