import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { OrderDto } from './dto/oder.dto';
import { Order } from './entity';

@ApiTags('Automapper')
@Controller()
export class AppController {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly appService: AppService,
  ) {}

  @Post()
  createOrder(@Body() order: OrderDto) {
    const result = this.mapper.map(order, Order, OrderDto);
    return result;
  }
}
