import { CreateRentingDto, UpdateRentingDto } from './../dtos/renting.dto';
import { Renting } from './../entities/renting.entity';
import { Customer } from '../entities/customer.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { VehicleService } from './vehicle.service';
import { Vehicle } from 'src/entities/vehicle.entity';
import { CustomerService } from './customer.service';

@Injectable()
export class RentingService {
  constructor(
    @InjectRepository(Renting)
    private readonly rentingRepository: Repository<Renting>,
    private readonly customerService: CustomerService,
    private readonly vehicleService: VehicleService,
  ) {}

  /**
   * Je veux créer une nouvelle location, mais je dois d'abord trouver le client et le véhicule, puis je
   * peux enregistrer la location.
   * @param {CreateRentingDto} createLocationpayload - CreateRentingDto
   * @returns L'objet de localisation est renvoyé.
   */
  async create(createLocationpayload: CreateRentingDto): Promise<any> {
    const customer: Customer = await this.customerService.findOneById(
      createLocationpayload.customer_id,
    );
    const vehicle: Vehicle = await this.vehicleService.findOneById(
      createLocationpayload.vehicle_id,
    );

    const location = new Renting();
    location.start_date = createLocationpayload.start_date;
    location.end_date = createLocationpayload.end_date;
    location.pricing = createLocationpayload.pricing;
    location.customer = customer;
    location.vehicle = vehicle;

    return await this.rentingRepository.save(location);
  }

  /**
   * Il renvoie une observable d'un tableau d'objets Renting, qui sont extraits de la base de données à
   * l'aide de la fonction rentingRepository.find().
   * @returns Un Observable d'un tableau d'objets Renting.
   */
  findAll(): Observable<Renting[]> {
    return from(
      this.rentingRepository.find({
        relations: {
          vehicle: true,
          customer: true,
        },
      }),
    );
  }

  /**
   * Retrouver une location par son identifiant et la restituer avec son véhicule et sa relation
   * client.
   * @param {string} id - string - l'identifiant de la location que nous voulons trouver
   * @returns Une promesse d'un objet de location.
   */
  findOnyById(id: string): Promise<Renting> {
    return this.rentingRepository.findOne({
      where: { id },
      relations: ['vehicle', 'customer'],
    });
  }

 /**
  * Il renvoie une promesse d'un tableau d'objets Renting, qui sont trouvés par l'identifiant du client
  * @param {string} id - string - l'identifiant de l'utilisateur
  * @returns Un tableau d'objets Renting.
  */
  findAllByUserId(id: string): Promise<Renting[]> {
    return this.rentingRepository.find({
      where: {
        customer: {
          id,
        },
      },
      relations: ['vehicle', 'customer'],
    });
  }

  /**
   * Cette fonction prend un identifiant et un updatePayloadLocation et renvoie un Observable de
   * UpdateResult.
   * @param {string} id - string - l'identifiant de la location que vous souhaitez mettre à jour
   * @param {UpdateRentingDto} updatePayloadLocation - UpdateRentingDto
   * @returns Le type de retour est un Observable de UpdateResult.
   */
  update(
    id: string,
    updatePayloadLocation: UpdateRentingDto,
  ): Observable<UpdateResult> {
    return from(this.rentingRepository.update({ id }, updatePayloadLocation));
  }

  /**
   * Cette fonction supprime une location de la base de données et renvoie une observable de la
   * location supprimée.
   * @param {string} id - string - l'identifiant de la location à supprimer
   * @returns La valeur de retour est une Promesse&lt;Location&gt;.
   */
  delete(id: string) {
    return from(this.rentingRepository.delete(id));
  }
}
