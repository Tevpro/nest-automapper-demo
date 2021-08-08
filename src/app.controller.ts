import { InjectMapper } from '@automapper/nestjs';
import { Mapper } from '@automapper/types';
import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderDto } from './dto/oder.dto';
import { Order } from './entity';

@Controller()
export class AppController {
  constructor(
    @InjectMapper() private readonly mapper: Mapper,
    private readonly appService: AppService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  createOrder(@Body() order: OrderDto) {
    const result = this.mapper.map(order, Order, OrderDto);
    return result;
  }
}
