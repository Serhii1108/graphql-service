export interface CreateGenreDto {
  name: string;
  description: string;
  country: string;
  year: number;
}

export interface Genre extends CreateGenreDto {
  _id: string;
}
