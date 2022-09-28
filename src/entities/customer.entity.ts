import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Renting } from './renting.entity';

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

  @OneToMany(() => Renting, (renting) => renting.id)
  rentings: Renting[];
}
