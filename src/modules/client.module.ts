import { ClientService } from 'src/services/client.service';
import { ClientController } from './../controllers/client.controller';
import { Client } from './../entities/client.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  controllers: [ClientController],
  providers: [ClientService],
})
export class ClientModule {}
