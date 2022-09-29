import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Renting } from './renting.entity';

export enum VehicleType {
  CAR = 'car',
  TRUCK = 'truck',
  BIKE = 'bike',
  UTILITY = 'utility',
}

export enum VehicleEtat {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

@Entity()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: VehicleType,
  })
  type: VehicleType;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  registration_number: string;

  @Column({
    type: 'enum',
    enum: VehicleEtat,
  })
  vehicle_state: VehicleEtat;

  @Column()
  renting_price: number;

  @OneToMany(() => Renting, (renting) => renting.id)
  rentings: Renting[];
}
