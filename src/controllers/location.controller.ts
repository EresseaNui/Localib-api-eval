import { CreateLocationDto, UpdatelocationDto } from './../dtos/location.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { LocationService } from 'src/services/location.service';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Post()
  create(@Body() createLocationPayload: CreateLocationDto) {
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
    @Body() updateLocationPayload: UpdatelocationDto,
  ) {
    return this.locationService.update(id, updateLocationPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.locationService.delete(id);
  }
}
