import { axiosClassic, instance } from '@/api/api.interceptor';
import { IProduct, TypePaginationProducts } from '@/types/product.interface';
import { TypeProductData, TypeProductDataFilters } from './product.types';

export const ProductService = {
  async getAll(queryData = {} as TypeProductDataFilters) {
    return axiosClassic<TypePaginationProducts>({
      url: '/products',
      method: 'GET',
      params: queryData,
    });
  },

  async getSimilar(productId: number | string) {
    return axiosClassic<IProduct[]>({
      url: `/products/similar/${productId}`,
      method: 'GET',
    });
  },

  async getBySlug(slug: string) {
    return axiosClassic<IProduct>({
      url: `/products/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'GET',
    });
  },

  async getByCategory(categorySlug: string) {
    return axiosClassic<IProduct[]>({
      url: `/products/by-category/${categorySlug}`,
      method: 'GET',
    });
  },

  async createProduct() {
    return instance<IProduct>({
      url: `/products/`,
      method: 'POST',
    });
  },

  async updateProduct(id: string | number, data: TypeProductData) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'PUT',
      data,
    });
  },

  async deleteProduct(id: string | number) {
    return instance<IProduct>({
      url: `/products/${id}`,
      method: 'DELETE',
    });
  },
};
