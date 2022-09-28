import { PartialType } from '@nestjs/mapped-types';
import { CustomerDto } from './customer.dto';
import { VehicleDto } from './vehicle.dto';

export class LocationDto {
  id: string;
  client: CustomerDto;
  vehicle: VehicleDto;
  date_debut: Date;
  date_fin: Date;
  tarification: number;
}

export class CreateLocationDto extends LocationDto {
  client_id?: string;
  vehicle_id?: string;
}

export class UpdatelocationDto extends PartialType(CreateLocationDto) {}
