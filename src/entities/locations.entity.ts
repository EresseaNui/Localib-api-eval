import { Vehicle } from './vehicle.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Customer } from './customer.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Customer, (customer: Customer) => customer.id)
  customer: Customer;

  @ManyToOne(() => Vehicle, (vehicle: Vehicle) => vehicle.id)
  vehicle: Vehicle;

  @Column()
  date_debut: Date;

  @Column()
  date_fin: Date;

  @Column()
  tarification: number;
}
