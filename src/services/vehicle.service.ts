import { Renting } from 'src/entities/renting.entity';
import { RentingService } from './renting.service';
import { Vehicle } from '../entities/vehicle.entity';
import { from } from 'rxjs';
import { CreateVehicleDto, UpdateVehicleDto } from '../dtos/vehicle.dto';
import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle)
    private readonly vehicleRepository: Repository<Vehicle>,
    @Inject(forwardRef(() => RentingService))
    private readonly rentingService: RentingService,
  ) {}

  /**
   * Il prend un CreateVehiculeDto comme paramètre et renvoie un Observable du résultat de la requête
   * @param {CreateVehicleDto} createVehiclePayload - CreateVehiculeDto
   * @returns Une promesse.
   */
  create(createVehiclePayload: CreateVehicleDto) {
    const payload = {
      ...createVehiclePayload,
      disponibility: true,
    };
    return from(
      this.vehicleRepository
        .createQueryBuilder()
        .insert()
        .into(Vehicle)
        .values(payload)
        .execute(),
    );
  }

  find(param: boolean) {
    if (param) return this.findVehicleDisponibilityById();

    return this.findAll();
  }

  /**
   * Il renvoie un Observable d'un tableau d'entités Vehicule.
   * @returns Un Observable d'un tableau d'entités Vehicule.
   */
  findAll(): Promise<Vehicle[]> {
    return this.vehicleRepository.find();
  }

  /**
   * Cette fonction renvoie une promesse qui se résout en un seul objet véhicule, ou null si aucun
   * véhicule n'est trouvé.
   * @param {string} id - chaîne de caractères
   * @returns Une promesse&lt;Véhicule&gt;
   */
  findOneById(id: string): Promise<Vehicle> {
    return this.vehicleRepository.findOneBy({ id });
  }

  /**
   * Mettre à jour un véhicule par son id et le updateVehiculePayload
   * @param {string} id - chaîne de caractères
   * @param {UpdateVehicleDto} updateVehiclePayload - UpdateVehiculeDto
   * @returns Le type de retour est Observable&lt;Véhicule&gt;.
   */
  update(id: string, updateVehiclePayload: UpdateVehicleDto) {
    return from(this.vehicleRepository.update({ id }, updateVehiclePayload));
  }

  /**
   * Supprimer un véhicule de la base de données par son identifiant
   * @param {string} id - chaîne de caractères
   * @returns Une promesse.
   */
  delete(id: string) {
    return from(this.vehicleRepository.delete({ id }));
  }

  async findVehicleDisponibilityById() {
    const vehicles: Vehicle[] = await this.findAll();
    const rentings: Renting[] = await this.rentingService.findAll();

    // const rentings: Rentings[] = this.findAll();

    console.log('vehicle', vehicles);
    console.log('rentings', rentings);
  }
}
