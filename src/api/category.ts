import { api } from './base'
export interface CategoryResponse {
  data: CategoryEntity[];
  message: string;
  success: boolean;
}

/**
* CategoryEntity
*/
export interface CategoryEntity {
  background: string;
  cate_name: string;
  cate_pic: string;
  id: string;
}
const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query<CategoryEntity[], void>({
      query: () => `/category`,
      transformResponse: (response: CategoryResponse) => response.data
    })
  })
})
export const { useGetCategoryQuery, useLazyGetCategoryQuery } = categoryApi