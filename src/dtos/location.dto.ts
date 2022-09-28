import { VehiculeDto } from './vehicule.dto';
import { ClientDto } from './client.dto';
import { PartialType } from '@nestjs/mapped-types';

export class LocationDto {
  id: string;
  client: ClientDto;
  vehicule: VehiculeDto;
  date_debut: Date;
  date_fin: Date;
  tarification: number;
}

export class CreateLocationDto extends LocationDto {
  client_id?: string;
  vehicule_id?: string;
}

export class UpdatelocationDto extends PartialType(CreateLocationDto) {}
