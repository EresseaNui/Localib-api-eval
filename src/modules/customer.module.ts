import { CustomerService } from 'src/services/customer.service';
import { CustomerController } from '../controllers/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Renting } from 'src/entities/renting.entity';
import { Customer } from 'src/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Renting])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
