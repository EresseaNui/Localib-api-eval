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

    const vehiclePayload = {
      disponibility: false,
    };

    await this.vehicleService.update(vehicle.id, vehiclePayload);
    return await this.rentingRepository.save(location);
  }

  findAll(): Observable<Renting[]> {
    return from(this.rentingRepository.find());
  }

  findOnyById(id: string): Promise<Renting> {
    return this.rentingRepository.findOneBy({ id });
  }

  update(
    id: string,
    updatePayloadLocation: UpdateRentingDto,
  ): Observable<UpdateResult> {
    return from(this.rentingRepository.update({ id }, updatePayloadLocation));
  }

  delete(id: string) {
    return from(this.rentingRepository.delete(id));
  }
}
