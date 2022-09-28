import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from './locations.entity';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column()
  birthdate: Date;

  @Column()
  mail: string;

  @Column()
  phone: string;

  @OneToMany(() => Location, (renting) => renting.id)
  rentings: Location[];
}
