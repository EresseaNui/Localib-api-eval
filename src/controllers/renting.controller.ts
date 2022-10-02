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
  Query,
} from '@nestjs/common';

@Controller('rentings')
export class RentingController {
  constructor(private readonly rentingService: RentingService) {}

  @Post()
  create(@Body() createLocationPayload: CreateRentingDto) {
    return this.rentingService.create(createLocationPayload);
  }

  @Get()
  findAll() {
    return this.rentingService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.rentingService.findOnyById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLocationPayload: UpdateRentingDto,
  ) {
    return this.rentingService.update(id, updateLocationPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.rentingService.delete(id);
  }

  @Post(':id')
  findRentingsByUserId(@Param('id') userId: string) {
    return this.rentingService.findAllByUserId(userId);
  }
}
