export * from './user';
export * from './course';
export * from './api';

export interface BaseEntity {
  _id: string;
  createdAt: string;
  updatedAt: string;
}
