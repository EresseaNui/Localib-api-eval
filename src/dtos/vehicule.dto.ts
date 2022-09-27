import { PartialType } from '@nestjs/mapped-types';
export class VehiculeDto {
  id: string;
  type: string;
  marque: string;
  modele:string;
  immatriculation: string;
  etat: string;
  louer: boolean;
}

export class CreateVehiculeDto {}
export class UpdateVehiculeDto extends PartialType(CreateVehiculeDto) {}
