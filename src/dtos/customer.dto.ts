import { PartialType } from '@nestjs/mapped-types';
export class CustomerDto {
  id: string;
  lastname: string;
  firstname: string;
  birthdate: Date;
  mail: string;
  phone: string;
}

export interface CreateCustomerDto extends Omit<CustomerDto, 'id'> {}

export class UpdateCustomerDto extends PartialType(CustomerDto) {}
