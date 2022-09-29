import { VehicleService } from 'src/services/vehicle.service';
import { Customer } from '../entities/customer.entity';
import { Vehicle } from '../entities/vehicle.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { Renting } from 'src/entities/renting.entity';
import { CustomerModule } from './customer.module';
import { RentingController } from 'src/controllers/renting.controller';
import { RentingService } from 'src/services/renting.service';
import { VehicleModule } from './vehicle.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Renting, Vehicle, Customer]),
    CustomerModule,
    forwardRef(() => VehicleModule),
  ],
  controllers: [RentingController],
  providers: [RentingService],
})
export class RentingModule {}
