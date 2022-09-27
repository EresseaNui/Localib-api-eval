import { from } from 'rxjs';
import { CreateVehiculeDto, UpdateVehiculeDto } from './../dtos/vehicule.dto';
import { Vehicule } from './../entities/vehicule.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehiculeService {
  constructor(
    @InjectRepository(Vehicule)
    private readonly vehiculeRepository: Repository<Vehicule>,
  ) {}

  /**
   * Il prend un CreateVehiculeDto comme paramètre et renvoie un Observable du résultat de la requête
   * @param {CreateVehiculeDto} createVehiculePayload - CreateVehiculeDto
   * @returns Une promesse.
   */
  create(createVehiculePayload: CreateVehiculeDto) {
    return from(
      this.vehiculeRepository
        .createQueryBuilder()
        .insert()
        .into(Vehicule)
        .values(createVehiculePayload)
        .execute(),
    );
  }

  /**
   * Il renvoie un Observable d'un tableau d'entités Vehicule.
   * @returns Un Observable d'un tableau d'entités Vehicule.
   */
  findAll() {
    return from(this.vehiculeRepository.find());
  }

  /**
   * Cette fonction renvoie une promesse qui se résout en un seul objet véhicule, ou null si aucun
   * véhicule n'est trouvé.
   * @param {string} id - chaîne de caractères
   * @returns Une promesse&lt;Véhicule&gt;
   */
  findOneById(id: string) {
    return from(this.vehiculeRepository.findOneBy({ id }));
  }

  /**
   * Mettre à jour un véhicule par son id et le updateVehiculePayload
   * @param {string} id - chaîne de caractères
   * @param {UpdateVehiculeDto} updateVehiculePayload - UpdateVehiculeDto
   * @returns Le type de retour est Observable&lt;Véhicule&gt;.
   */
  update(id: string, updateVehiculePayload: UpdateVehiculeDto) {
    return from(this.vehiculeRepository.update({ id }, updateVehiculePayload));
  }

  /**
   * Supprimer un véhicule de la base de données par son identifiant
   * @param {string} id - chaîne de caractères
   * @returns Une promesse.
   */
  delete(id: string) {
    return from(this.vehiculeRepository.delete({ id }));
  }
}
