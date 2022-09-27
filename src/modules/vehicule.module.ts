import { VehiculeService } from './../services/vehicule.service';
import { VehiculeController } from './../controllers/vehicule.controller';
import { Vehicule } from './../entities/vehicule.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([Vehicule])],
  controllers: [VehiculeController],
  providers: [VehiculeService],
})
export class VehiculeModule {}
