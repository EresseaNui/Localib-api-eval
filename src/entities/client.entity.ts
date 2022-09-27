// nom prenom datenaissance email telephone

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
