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
  // ParseIntPipe,
} from '@nestjs/common';

import { Response } from 'express';
import { ProductsService } from '../services/products.service';
import { ParseIntPipe } from '../common/parse-int.pipe';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts(
    @Query('offset') offset = 1000,
    @Query('limit') limit = 5,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=${limit}, offset=${offset}, brand=${brand}`,
    // };
    return this.productService.findAll();
  }

  @Get('filter') //esta ruta debe ir siempre arriba de las dinamicas
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':id')
  getProduct(@Res() response: Response, @Param('id', ParseIntPipe) id: number) {
    const product = this.productService.findOne(id);
    response.status(200).send(product);
  }

  @Post()
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };
    return this.productService.create(payload);
  }

  @Put(':id')
  update(@Body() payload: any, @Param('id') id: number) {
    return this.productService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
