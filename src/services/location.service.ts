import { CreateLocationDto, UpdatelocationDto } from './../dtos/location.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'src/entities/client.entity';
import { Location } from 'src/entities/locations.entity';
import { Repository, UpdateResult } from 'typeorm';
import { ClientService } from './client.service';
import { from, Observable } from 'rxjs';
import { VehicleService } from './vehicle.service';
import { Vehicle } from 'src/entities/vehicle.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    private readonly clientService: ClientService,
    private readonly vehicleService: VehicleService,
  ) {}

  async create(createLocationpayload: CreateLocationDto): Promise<any> {
    const client: Client = await this.clientService.findOneById(
      createLocationpayload.client_id,
    );
    const vehicle: Vehicle = await this.vehicleService.findOneById(
      createLocationpayload.vehicle_id,
    );

    const location = new Location();
    location.date_debut = createLocationpayload.date_debut;
    location.date_fin = createLocationpayload.date_fin;
    location.tarification = createLocationpayload.tarification;
    location.client = client;
    location.vehicle = vehicle;

    const vehiclePayload = {
      disponibility: false,
    };

    await this.vehicleService.update(vehicle.id, vehiclePayload);
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
    return from(this.locationRepository.delete(id));
  }
}
