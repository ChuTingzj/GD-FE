import { api } from './base'
export interface CarouselResponse {
  data: CarouselEntity[];
  message: string;
  success: boolean;
}

/**
* CarouselEntity
*/
export interface CarouselEntity {
  id: string;
  img_url: string;
}

const carouselApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCarousel: build.query<CarouselEntity[], void>({
      query: () => `/carousel`,
      transformResponse: (response: CarouselResponse) => response.data
    })
  })
})
export const { useGetCarouselQuery, useLazyGetCarouselQuery } = carouselApi