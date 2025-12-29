import { SimplifiedAlbumObject } from "./album";
import { ApiResponse } from "./apiResponse";
import { Artist } from "./artist";
import { External_ids, ExternalURLs, Followers, Image, Owner } from "./commonType";

export interface BasePalylist {
    collaborative?: boolean;
    description?: string | null;
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner?: Owner;
    public?: boolean;
    snapshot_id?: string;
    type?: 'palylist';
    uri?: string;
}

export interface GetCurrentUserPlaylistsRequest {
    limit?: number;
    offset?: number;
};

export type GetCurrentUserPlaylistsResponse = ApiResponse<SimplifiedPlaylistObject>;

export interface SimplifiedPlaylistObject extends BasePalylist{
    tracks?: {
        href?: string;
        total?: number;
    };
};

export interface GetPlaylistRequest {
    playlistId: string;
    market?: string;
    fields?: string;
    additionalTypes?: string;
};

export interface Playlist extends BasePalylist{
    tracks?: ApiResponse<PlaylistTrack>;
    followers: Followers;
};

export interface PlaylistTrack {
    added_at?: string | null;
    added_by?: {
        external_urls?: {
            spotify?: string;
        };
        href?: string;
        id?: string;
        type?: 'user';
        uri?: string;
    } | null;
    is_local?: boolean;
    track?: TrackObject | EpisodeObject;
    type: 'playlist';
    uri: string;
};

export interface TrackObject {
    album?: SimplifiedAlbumObject;
    artists?: Artist;
    available_markets?: string[];
    disc_number?: number;
    duration_ms?: number;
    explicit?: boolean;
    external_ids?: External_ids;
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    is_playable?: boolean;
    linked_from?: {};
    restrictions?: {
        reason: string;
    };
    name?: string;
    popularity?: number;
    preview_url?: string | null;
    track_number?: number;
    type?: 'track';
    uri: string;
    is_local: boolean;
};

export interface EpisodeObject {
    audio_preview_url: string | null;
    description: string;
    html_description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalURLs;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    language?: string;
    languages: string[];
    name: string;
    release_date: string;
    release_date_precision: string;
    resume_point?: {
        fully_played?: boolean;
        resume_position_ms?: number;
    };
    type: string;
    uri: string;
    restrictions?: {
        reason: string;
    };
    show: {
        available_markets: string[];
        copyrights: {
            text: string;
            type: string;
        }[];
        description: string;
        html_description: string;
        explicit: boolean;
        external_urls: ExternalURLs;
        href: string;
        id: string;
        images: Image[];
        is_externally_hosted: boolean;
        languages: string[];
        media_type: string;
        name: string;
        publisher: string;
        type: 'show';
        uri: string;
        total_episodes: number;
    }
};