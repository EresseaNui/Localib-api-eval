import { PartialType } from '@nestjs/mapped-types';
export class ClientDto {
  id: string;
  nom: string;
  prenom: string;
  date_naissance: Date;
  email: string;
  telephone: string;
}

export interface CreateClientDto extends Omit<ClientDto, 'id'> {}

export class UpdateClientDto extends PartialType(ClientDto) {}
