import { VehiculeService } from './vehicule.service';
import { CreateLocationDto, UpdatelocationDto } from './../dtos/location.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/entities/locations.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ClientService } from './client.service';
import { from, Observable } from 'rxjs';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    private readonly clientRepository: ClientService,
    private readonly vehiculeRepository: VehiculeService,
  ) {}

  async create(createLocationpayload: CreateLocationDto): Promise<any> {
    const client = await this.clientRepository
      .findOneById(createLocationpayload.client_id)
      .then((data) => data);
    const vehicule = await this.vehiculeRepository
      .findOneById(createLocationpayload.vehicule_id)
      .then((data) => data);

    const location = new Location();
    location.date_debut = createLocationpayload.date_debut;
    location.date_fin = createLocationpayload.date_fin;
    location.tarification = createLocationpayload.tarification;
    location.client = client;
    location.vehicule = vehicule;

    const vehiculePayload = {
      louer: true,
    };

    await this.vehiculeRepository.update(vehicule.id, vehiculePayload);
    return await this.locationRepository.save(location);
  }

  findAll(): Observable<Location[]> {
    return from(this.locationRepository.find());
  }

  findOnyById(id: string): Promise<Location> {
    return this.locationRepository.findOneBy({ id });
  }

  update(
    id: string,
    updatePayloadLocation: UpdatelocationDto,
  ): Observable<UpdateResult> {
    return from(this.locationRepository.update({ id }, updatePayloadLocation));
  }

  delete(id: string) {
    return from(this.locationRepository.delete({ id }));
  }
}
