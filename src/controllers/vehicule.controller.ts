import { CreateVehiculeDto, UpdateVehiculeDto } from './../dtos/vehicule.dto';
import { VehiculeService } from './../services/vehicule.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('vehicules')
export class VehiculeController {
  constructor(private readonly vehiculeService: VehiculeService) {}

  /* Méthode appelée lorsqu'une requête POST est envoyée au point de terminaison /vehicules. */
  @Post()
  create(@Body() createVehiculePayload: CreateVehiculeDto) {
    return this.vehiculeService.create(createVehiculePayload);
  }

  /* Méthode appelée lorsqu'une requête GET est envoyée au point de terminaison /vehicules. */
  @Get()
  findAll() {
    return this.vehiculeService.findAll();
  }

  /* Méthode appelée lorsqu'une requête GET est envoyée au point de terminaison /vehicules/:id. */
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.vehiculeService.findOneById(id);
  }

  /* Mise à jour des données dans la base de données. */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehiculePayload: UpdateVehiculeDto,
  ) {
    return this.vehiculeService.update(id, updateVehiculePayload);
  }

  /* Suppression des données de la base de données. */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehiculeService.delete(id);
  }
}
