import { Vehicle } from './vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Renting {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Customer, (customer: Customer) => customer.id)
  customer: Customer;

  @ManyToOne(() => Vehicle, (vehicle: Vehicle) => vehicle.id)
  vehicle: Vehicle;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  pricing: number;
}
