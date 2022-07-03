
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface MemberInput {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface BandInput {
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<MemberInput>[]>;
    website?: Nullable<string>;
    genresIds?: Nullable<Nullable<string>[]>;
}

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

export interface Band {
    id: string;
    name: string;
    origin?: Nullable<string>;
    members?: Nullable<Nullable<Member>[]>;
    website?: Nullable<string>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface Member {
    artist?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface IQuery {
    band(id: string): Nullable<Band> | Promise<Nullable<Band>>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Band>[]> | Promise<Nullable<Nullable<Band>[]>>;
    genre(id: string): Nullable<Genre> | Promise<Nullable<Genre>>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Nullable<Genre>[]> | Promise<Nullable<Nullable<Genre>[]>>;
    user(id: string): Nullable<User> | Promise<Nullable<User>>;
    jwt(email: string, password: string): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    createBand(createBandInput?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    updateBand(id: string, updateBandInput?: Nullable<BandInput>): Nullable<Band> | Promise<Nullable<Band>>;
    deleteBand(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    createGenre(createGenreInput?: Nullable<CreateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    deleteGenre(id: string): Nullable<DeleteResponse> | Promise<Nullable<DeleteResponse>>;
    updateGenre(id: string, updateGenreInput?: Nullable<UpdateGenreInput>): Nullable<Genre> | Promise<Nullable<Genre>>;
    register(registerInput?: Nullable<RegisterInput>): Nullable<User> | Promise<Nullable<User>>;
}

export interface Genre {
    id: string;
    name?: Nullable<string>;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
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
