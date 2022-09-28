import { PartialType } from '@nestjs/mapped-types';
import { VehiculeEtat, VehiculeType } from 'src/entities/vehicule.entity';
export class VehiculeDto {
  id: string;
  type: VehiculeType;
  marque: string;
  modele: string;
  immatriculation: string;
  etat: VehiculeEtat;
  louer: boolean;
}

export class CreateVehiculeDto {}
export class UpdateVehiculeDto extends PartialType(CreateVehiculeDto) {}
