import { PartialType } from '@nestjs/mapped-types';
import { VehicleEtat, VehicleType } from 'src/entities/vehicle.entity';

export class VehicleDto {
  id: string;
  type: VehicleType;
  brand: string;
  model: string;
  registration_number: string;
  vehicle_state: VehicleEtat;
  renting_price: number;
}

export interface CreateVehicleDto extends Omit<VehicleDto, 'id'> {}
export class UpdateVehicleDto extends PartialType(VehicleDto) {}
export class VehicleDisponibilityDto {
  start_date: Date;
  end_date: Date;
}
