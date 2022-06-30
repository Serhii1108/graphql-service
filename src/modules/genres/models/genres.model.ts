export interface CreateGenreDto {
  name: string;
  description: string;
  country: string;
  year: number;
}

export interface Genre extends CreateGenreDto {
  _id: string;
}

export interface DeleteUserResponse {
  acknowledged: boolean;
  deletedCount: number;
}
