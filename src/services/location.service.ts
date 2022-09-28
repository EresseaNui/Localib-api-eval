import { Customer } from './../entities/customer.entity';
import { CreateLocationDto, UpdatelocationDto } from './../dtos/location.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Location } from 'src/entities/locations.entity';
import { Repository, UpdateResult } from 'typeorm';
import { from, Observable } from 'rxjs';
import { VehicleService } from './vehicle.service';
import { Vehicle } from 'src/entities/vehicle.entity';
import { CustomerService } from './customer.service';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private readonly locationRepository: Repository<Location>,
    private readonly customerService: CustomerService,
    private readonly vehicleService: VehicleService,
  ) {}

  async create(createLocationpayload: CreateLocationDto): Promise<any> {
    const customer: Customer = await this.customerService.findOneById(
      createLocationpayload.client_id,
    );
    const vehicle: Vehicle = await this.vehicleService.findOneById(
      createLocationpayload.vehicle_id,
    );

    const location = new Location();
    location.date_debut = createLocationpayload.date_debut;
    location.date_fin = createLocationpayload.date_fin;
    location.tarification = createLocationpayload.tarification;
    location.customer = customer;
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
