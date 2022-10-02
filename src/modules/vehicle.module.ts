import { Customer } from './../entities/customer.entity';
import { Renting } from './../entities/renting.entity';
import { VehicleService } from '../services/vehicle.service';
import { VehicleController } from '../controllers/vehicle.controller';
import { Vehicle } from '../entities/vehicle.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    TypeOrmModule.forFeature([Vehicle, Renting, Customer])
  ],
  controllers: [VehicleController],
  providers: [VehicleService],
  exports: [VehicleService],
})
export class VehicleModule {}
