
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface CreateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface UpdateGenreInput {
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface RegisterInput {
    firstName?: Nullable<string>;
    lastName?: Nullable<string>;
    password: string;
    email: string;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface IQuery {
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    createGenre(createGenreInput?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateGenre(id: string, updateGenreInput?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    register(registerInput?: Nullable<RegisterInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface User {
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    password: string;
    email: string;
}

export interface DeleteResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

type Nullable<T> = T | null;
