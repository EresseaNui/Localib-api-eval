import { UpdateCustomerDto } from './../dtos/customer.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { from } from 'rxjs';
import { Customer } from 'src/entities/customer.entity';
import { CreateCustomerDto } from 'src/dtos/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}

  /**
   * Cette fonction prend un objet CreateClientDto et l'insère dans la table Client.
   * @param {CreateCustomerDto} createCustomerPayload - CreateClientDto
   * @returns Une promesse qui se résout en un tableau d'objets.
   */
  create(createCustomerPayload: CreateCustomerDto) {
    return from(
      this.customerRepository
        .createQueryBuilder()
        .insert()
        .into(Customer)
        .values(createCustomerPayload)
        .execute(),
    );
  }

  /**
   * Elle renvoie une observable du résultat de la fonction find() de l'objet clientRepository.
   * @returns Une promesse.
   */
  findAll() {
    return from(this.customerRepository.find());
  }

  /**
   * Trouvez un client par identifiant et renvoyez-le en tant qu'observable.
   * @param {string} id - string - l'identifiant du client que vous voulez trouver
   * @returns Une promesse&lt;Client&gt;
   */
  findOneById(id: string): Promise<Customer> {
    return this.customerRepository.findOneBy({ id });
  }

  /**
   * Cette fonction prend un id et un updateClientPayload et retourne un observable du résultat de la
   * fonction de mise à jour du clientRepository.
   * @param {string} id - string - l'identifiant du client que vous souhaitez mettre à jour
   * @param {UpdateCustomerDto} updateCustomerPayload - UpdateClientDto
   * @returns La valeur de retour est une Promesse&lt;Client&gt;.
   */
  update(id: string, updateCustomerPayload: UpdateCustomerDto) {
    return from(this.customerRepository.update({ id }, updateCustomerPayload));
  }

  /**
   * Cette fonction supprime un client de la base de données et renvoie une promesse.
   * @param {string} id - string - l'identifiant du client à supprimer
   * @returns La valeur de retour est une Promise&lt;void&gt;.
   */
  delete(id: string) {
    return from(this.customerRepository.delete({ id }));
  }
}
