import { Vehicule } from './vehicule.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Client } from './client.entity';

@Entity()
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Client, (client: Client) => client.id)
  client: Client;

  @ManyToOne(() => Vehicule, (vehicule: Vehicule) => vehicule.id)
  vehicule: Vehicule;

  @Column()
  date_debut: Date;

  @Column()
  date_fin: Date;

  @Column()
  tarification: number;
}
