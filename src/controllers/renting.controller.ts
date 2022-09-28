import { CreateRentingDto, UpdateRentingDto } from './../dtos/renting.dto';
import { RentingService } from './../services/renting.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('rentings')
export class RentingController {
  constructor(private readonly locationService: RentingService) {}

  @Post()
  create(@Body() createLocationPayload: CreateRentingDto) {
    return this.locationService.create(createLocationPayload);
  }

  @Get()
  findAll() {
    return this.locationService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.locationService.findOnyById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationPayload: UpdateRentingDto,
  ) {
    return this.locationService.update(id, updateLocationPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.locationService.delete(id);
  }
}
