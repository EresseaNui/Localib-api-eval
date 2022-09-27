import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum VehiculeType {
  VOITURE = 'voiture',
  CAMION = 'camion',
  MOTO = 'moto',
  UTILITAIRE = 'utilitaire',
}

export enum VehiculeEtat {
  A = 'A',
  B = 'B',
  C = 'C',
  D = 'D',
}

@Entity()
export class Vehicule {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: VehiculeType,
  })
  type: VehiculeType;

  @Column()
  marque: string;

  @Column()
  modele: string;

  @Column()
  immatriculation: string;

  @Column({
    type: 'enum',
    enum: VehiculeEtat,
  })
  etat: VehiculeEtat;

  @Column()
  louer: boolean;
}
