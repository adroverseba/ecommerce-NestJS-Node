import { Controller, Query, Get, Param } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('offset') offset = 1000,
    @Query('limit') limit = 5,
    @Query('brand') brand: string,
  ) {
    return `products limit=${limit}, offset=${offset}, brand=${brand}`;
  }

  @Get('filter') //esta ruta debe ir siempre arriba de las dinamicas
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':id')
  getProduct(@Param('id') id: string): string {
    return `product #${id}`;
  }
}
