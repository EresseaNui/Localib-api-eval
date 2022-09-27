import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vehicule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  type: string;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  immatriculation: string;

  @Column()
  etat: string;

  @Column()
  louer: boolean;
}
