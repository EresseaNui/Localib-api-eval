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

  /**
   * Cette fonction prend un objet CreateVehicleDto comme paramètre et renvoie un objet Promesse d'un
   * véhicule.
   * @param {CreateVehicleDto} createVehiculePayload - CreateVehicleDto
   * @returns La valeur de retour est une Promesse&lt;Véhicule&gt;.
   */
  @Post()
  create(@Body() createVehiculePayload: CreateVehicleDto) {
    return this.vehicleService.create(createVehiculePayload);
  }

  /**
   * Elle renvoie le résultat de l'appel de la fonction findAll() sur l'objet vehicleService.
   * @returns La méthode findAll() de la classe VehicleService.
   */
  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  /**
   * Cette fonction prend un paramètre appelé id, puis le transmet à la fonction findOneById dans
   * vehicleService.
   * @param {string} id - Le nom du paramètre dans la route.
   * @returns La méthode vehicleService.findOneById(id) est renvoyée.
   */
  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.vehicleService.findOneById(id);
  }

  /**
   * Cette fonction prend un id et un updateVehicleDto comme paramètres et renvoie le résultat de la
   * fonction de mise à jour du vehicleService.
   * @param {string} id - L'identifiant du véhicule à mettre à jour.
   * @param {UpdateVehicleDto} updateVehiculePayload - UpdateVehicleDto
   * @returns La valeur de retour est le résultat de la méthode de mise à jour dans vehicleService.
   */
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVehiculePayload: UpdateVehicleDto,
  ) {
    return this.vehicleService.update(id, updateVehiculePayload);
  }

  /**
   * Cette fonction supprime un véhicule par son identifiant.
   * @param {string} id - L'identifiant du véhicule à supprimer
   * @returns La valeur de retour est une Promise&lt;void&gt;.
   */
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.vehicleService.delete(id);
  }

  /**
   * Cette fonction prend une charge utile de type VehicleDisponibilityDto et renvoie une promesse de
   * type VehicleDisponibilityDto
   * @param {VehicleDisponibilityDto} findDisponibilityPayload - VéhiculeDisponibilitéDto
   * @returns Une promesse&lt;Véhicule[]&gt;
   */
  @Post('disponibility')
  findAvailabilty(@Body() findDisponibilityPayload: VehicleDisponibilityDto) {
    return this.vehicleService.findAvailableVehicle(findDisponibilityPayload);
  }
}
