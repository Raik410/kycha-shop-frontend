import { axiosClassic, instance } from '@/api/api.interceptor';
import { ICategory } from '@/types/category.interface';

export const CategoryService = {
  async getAll() {
    return axiosClassic<ICategory[]>({
      url: '/categories',
      method: 'GET',
    });
  },

  async getById(id: string | number) {
    return instance<ICategory[]>({
      url: `/categories/${id}`,
      method: 'GET',
    });
  },

  async getBySlug(slug: string) {
    return axiosClassic<ICategory>({
      url: `/categories/by-slug/${slug}`,
      method: 'GET',
    });
  },

  async createCategory() {
    return instance<ICategory>({
      url: `/categories/`,
      method: 'POST',
    });
  },

  async updateCategory(id: string | number, name: string) {
    return instance<ICategory>({
      url: `/categories/${id}`,
      method: 'PUT',
      data: {
        name,
      },
    });
  },

  async deleteCategory(id: string | number) {
    return instance<ICategory>({
      url: `/categories/${id}`,
      method: 'DELETE',
    });
  },
};
