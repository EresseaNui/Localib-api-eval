import { ClientDto } from './client.dto';
import { PartialType } from '@nestjs/mapped-types';
import { VehicleDto } from './vehicle.dto';

export class LocationDto {
  id: string;
  client: ClientDto;
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
