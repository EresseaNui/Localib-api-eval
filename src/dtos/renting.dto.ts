import { PartialType } from '@nestjs/mapped-types';
import { CustomerDto } from './customer.dto';
import { VehicleDto } from './vehicle.dto';

export class RentingDto {
  id: string;
  client: CustomerDto;
  vehicle: VehicleDto;
  start_date: Date;
  end_date: Date;
  pricing: number;
}

export class CreateRentingDto extends RentingDto {
  customer_id?: string;
  vehicle_id?: string;
}

export class UpdateRentingDto extends PartialType(CreateRentingDto) {}
