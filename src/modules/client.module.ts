import { ClientService } from 'src/services/client.service';
import { ClientController } from './../controllers/client.controller';
import { Client } from './../entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Location } from 'src/entities/locations.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Location])],
  controllers: [ClientController],
  providers: [ClientService],
  exports: [ClientService],
})
export class ClientModule {}
