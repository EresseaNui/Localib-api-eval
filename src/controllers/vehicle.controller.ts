import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import {
  CreateVehicleDto,
  UpdateVehicleDto,
  VehicleDisponibilityDto,
} from 'src/dtos/vehicle.dto';
import { VehicleService } from 'src/services/vehicle.service';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  /* Méthode appelée lorsqu'une requête POST est envoyée au point de terminaison /vehicules. */
  @Post()
  create(@Body() createVehiculePayload: CreateVehicleDto) {
    return this.vehicleService.create(createVehiculePayload);
  }

  /* Méthode appelée lorsqu'une requête GET est envoyée au point de terminaison /vehicules. */
  @Get()
  findAll(
    @Query('disponibility') disponibility: boolean,
    @Body() findDisponibilityPayload: VehicleDisponibilityDto,
  ) {
    return this.vehicleService.find(disponibility, findDisponibilityPayload);
  }

  /* Méthode appelée lorsqu'une requête GET est envoyée au point de terminaison /vehicules/:id. */
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.vehicleService.findOneById(id);
  }

  /* Mise à jour des données dans la base de données. */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehiculePayload: UpdateVehicleDto,
  ) {
    return this.vehicleService.update(id, updateVehiculePayload);
  }

  /* Suppression des données de la base de données. */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehicleService.delete(id);
  }
}
