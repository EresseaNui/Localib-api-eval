import {
  ClientDto,
  CreateClientDto,
  UpdateClientDto,
} from './../dtos/client.dto';
import { Client } from './../entities/client.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  /**
   * Cette fonction prend un objet CreateClientDto et l'insère dans la table Client.
   * @param {CreateClientDto} createClientPayload - CreateClientDto
   * @returns Une promesse qui se résout en un tableau d'objets.
   */
  create(createClientPayload: CreateClientDto) {
    return from(
      this.clientRepository
        .createQueryBuilder()
        .insert()
        .into(Client)
        .values(createClientPayload)
        .execute(),
    );
  }

  /**
   * Elle renvoie une observable du résultat de la fonction find() de l'objet clientRepository.
   * @returns Une promesse.
   */
  findAll() {
    return from(this.clientRepository.find());
  }

  /**
   * Trouvez un client par identifiant et renvoyez-le en tant qu'observable.
   * @param {string} id - string - l'identifiant du client que vous voulez trouver
   * @returns Une promesse&lt;Client&gt;
   */
  findOneById(id: string): Promise<ClientDto> {
    return this.clientRepository.findOneBy({ id });
  }

  /**
   * Cette fonction prend un id et un updateClientPayload et retourne un observable du résultat de la
   * fonction de mise à jour du clientRepository.
   * @param {string} id - string - l'identifiant du client que vous souhaitez mettre à jour
   * @param {UpdateClientDto} updateClientPayload - UpdateClientDto
   * @returns La valeur de retour est une Promesse&lt;Client&gt;.
   */
  update(id: string, updateClientPayload: UpdateClientDto) {
    return from(this.clientRepository.update({ id }, updateClientPayload));
  }

  /**
   * Cette fonction supprime un client de la base de données et renvoie une promesse.
   * @param {string} id - string - l'identifiant du client à supprimer
   * @returns La valeur de retour est une Promise&lt;void&gt;.
   */
  delete(id: string) {
    return from(this.clientRepository.delete({ id }));
  }
}
