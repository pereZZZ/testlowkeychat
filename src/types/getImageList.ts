import {itemInterface} from './item';

export interface getImageListInterface {
  page: number;
  per_page: number;
  photos: itemInterface[];
  next_page: string;
}
