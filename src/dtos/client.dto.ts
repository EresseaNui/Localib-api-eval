import { PartialType } from '@nestjs/mapped-types';
export class ClientDto {
  id: string;
  nom: string;
  prenom: string;
  date_naissance: Date;
  email: string;
  telephone: string;
}

export class CreateClientDto {}

export class UpdateClientDto extends PartialType(CreateClientDto) {}
