
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AlbumInput {
    name: string;
    released?: Nullable<number>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    trackIds?: Nullable<Nullable<string>[]>;
    genresIds?: Nullable<Nullable<string>[]>;
    image?: Nullable<string>;
}

export interface ArtistInput {
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bandsIds?: Nullable<Nullable<string>[]>;
    instruments?: Nullable<Nullable<string>[]>;
}

export interface MemberInput {
    artist: string;
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

export interface GenreInput {
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface TrackInput {
    title: string;
    albumId?: Nullable<string>;
    artistsIds?: Nullable<Nullable<string>[]>;
    bandsIds?: Nullable<Nullable<string>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genresIds?: Nullable<Nullable<string>[]>;
}

export interface RegisterInput {
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface Album {
    id: string;
    name: string;
    released?: Nullable<number>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    image?: Nullable<string>;
}

export interface IQuery {
    album(id: string): Album | Promise<Album>;
    albums(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Album>[] | Promise<Nullable<Album>[]>;
    artist(id: string): Nullable<Artist> | Promise<Nullable<Artist>>;
    artists(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Artist>[] | Promise<Nullable<Artist>[]>;
    band(id: string): Band | Promise<Band>;
    bands(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Band>[] | Promise<Nullable<Band>[]>;
    favourites(): Favourites | Promise<Favourites>;
    genre(id: string): Genre | Promise<Genre>;
    genres(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Genre>[] | Promise<Nullable<Genre>[]>;
    track(id: string): Track | Promise<Track>;
    tracks(limit?: Nullable<number>, offset?: Nullable<number>): Nullable<Track>[] | Promise<Nullable<Track>[]>;
    user(id: string): User | Promise<User>;
    jwt(email: string, password: string): string | Promise<string>;
}

export interface IMutation {
    createAlbum(createAlbumInput?: Nullable<AlbumInput>): Album | Promise<Album>;
    updateAlbum(id: string, updateAlbumInput?: Nullable<AlbumInput>): Album | Promise<Album>;
    deleteAlbum(id: string): DeleteResponse | Promise<DeleteResponse>;
    createArtist(createArtistInput?: Nullable<ArtistInput>): Artist | Promise<Artist>;
    updateArtist(id: string, updateArtistInput?: Nullable<ArtistInput>): Artist | Promise<Artist>;
    deleteArtist(id: string): DeleteResponse | Promise<DeleteResponse>;
    createBand(createBandInput?: Nullable<BandInput>): Band | Promise<Band>;
    updateBand(id: string, updateBandInput?: Nullable<BandInput>): Band | Promise<Band>;
    deleteBand(id: string): DeleteResponse | Promise<DeleteResponse>;
    addTrackToFavourites(id: string): Favourites | Promise<Favourites>;
    addBandToFavourites(id: string): Favourites | Promise<Favourites>;
    addArtistToFavourites(id: string): Favourites | Promise<Favourites>;
    addGenreToFavourites(id: string): Favourites | Promise<Favourites>;
    removeTrackFromFavourites(id: string): Favourites | Promise<Favourites>;
    removeBandFromFavourites(id: string): Favourites | Promise<Favourites>;
    removeArtistFromFavourites(id: string): Favourites | Promise<Favourites>;
    removeGenreFromFavourites(id: string): Favourites | Promise<Favourites>;
    createGenre(createGenreInput?: Nullable<GenreInput>): Genre | Promise<Genre>;
    updateGenre(id: string, updateGenreInput?: Nullable<GenreInput>): Genre | Promise<Genre>;
    deleteGenre(id: string): DeleteResponse | Promise<DeleteResponse>;
    createTrack(createTrackInput?: Nullable<TrackInput>): Track | Promise<Track>;
    updateTrack(id: string, updateTrackInput?: Nullable<TrackInput>): Track | Promise<Track>;
    deleteTrack(id: string): DeleteResponse | Promise<DeleteResponse>;
    register(registerInput?: Nullable<RegisterInput>): User | Promise<User>;
}

export interface Artist {
    id: string;
    firstName: string;
    secondName: string;
    middleName?: Nullable<string>;
    birthDate?: Nullable<string>;
    birthPlace?: Nullable<string>;
    country?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    instruments?: Nullable<Nullable<string>[]>;
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
    id: string;
    firstName?: Nullable<string>;
    secondName?: Nullable<string>;
    middleName?: Nullable<string>;
    instrument?: Nullable<string>;
    years?: Nullable<Nullable<string>[]>;
}

export interface Favourites {
    id: string;
    userId?: Nullable<string>;
    bands?: Nullable<Nullable<Band>[]>;
    genres?: Nullable<Nullable<Genre>[]>;
    artists?: Nullable<Nullable<Artist>[]>;
    tracks?: Nullable<Nullable<Track>[]>;
}

export interface Genre {
    id: string;
    name: string;
    description?: Nullable<string>;
    country?: Nullable<string>;
    year?: Nullable<number>;
}

export interface Track {
    id: string;
    title: string;
    album?: Nullable<Album>;
    artists?: Nullable<Nullable<Artist>[]>;
    bands?: Nullable<Nullable<Band>[]>;
    duration?: Nullable<number>;
    released?: Nullable<number>;
    genres?: Nullable<Nullable<Genre>[]>;
}

export interface User {
    id: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
}

export interface DeleteResponse {
    acknowledged?: Nullable<boolean>;
    deletedCount?: Nullable<number>;
}

type Nullable<T> = T | null;
