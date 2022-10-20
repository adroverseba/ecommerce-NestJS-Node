import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 1;
  private products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'bla bla',
      price: 122,
      image: ' ',
      stock: 12,
    },
  ];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const product = this.products.find((prod) => prod.id === id);
    if (!product) {
      // throw new NotFoundException(`Product #${id} not found`);
      throw new HttpException(`Product not found ${id}`, HttpStatus.NOT_FOUND);
    }
    return product;
  }

  findIndex(id: number) {
    const findIndex = this.products.findIndex((prod) => prod.id === id);
    if (findIndex == -1) {
      // throw new NotFoundException(`Product #${id} not found`);
      throw new HttpException(
        `Product not found ${id} 2`,
        HttpStatus.NOT_FOUND,
      );
    }
    return findIndex;
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const productIndex = this.findIndex(id);
    const product = {
      ...this.products[productIndex],
      ...payload,
    };
    return (this.products[productIndex] = product);
  }

  remove(id) {
    const productIndex = this.findIndex(id);
    this.products.splice(productIndex, 1);
    return { id };
  }
}
