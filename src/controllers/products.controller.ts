import {
  Controller,
  Query,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
} from '@nestjs/common';

import { Response } from 'express';
@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('offset') offset = 1000,
    @Query('limit') limit = 5,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=${limit}, offset=${offset}, brand=${brand}`,
    };
  }

  @Get('filter') //esta ruta debe ir siempre arriba de las dinamicas
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':id')
  getProduct(@Res() response: Response, @Param('id') id: string) {
    response.status(200).send({ message: `product #${id}` });
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }

  @Put(':id')
  update(@Body() payload: any, @Param('id') id: number) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
