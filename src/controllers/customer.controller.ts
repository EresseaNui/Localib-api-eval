import { UpdateCustomerDto, CreateCustomerDto } from './../dtos/customer.dto';
import { CustomerService } from './../services/customer.service';

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post()
  create(@Body() createClientPayload: CreateCustomerDto) {
    return this.customerService.create(createClientPayload);
  }

  @Get()
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.customerService.findOneById(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientPayload: UpdateCustomerDto,
  ) {
    return this.customerService.update(id, updateClientPayload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.customerService.delete(id);
  }
}
