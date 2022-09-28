import { VehiculeService } from './../services/vehicule.service';
import { VehiculeController } from './../controllers/vehicule.controller';
import { Vehicule } from './../entities/vehicule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Location } from 'src/entities/locations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicule, Location])],
  controllers: [VehiculeController],
  providers: [VehiculeService],
  exports: [VehiculeService],
})
export class VehiculeModule {}
