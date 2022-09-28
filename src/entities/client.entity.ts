import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Location } from './locations.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  nom: string;

  @Column()
  prenom: string;

  @Column()
  date_naissance: Date;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @OneToMany(() => Location, (renting) => renting.id)
  rentings: Location[];
}
