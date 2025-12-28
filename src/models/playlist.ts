import { ApiResponse } from "./apiResponse";
import { ExternalURLs, Image, Owner } from "./commonType";

export interface GetCurrentUserPlaylistsRequest {
    limit?: number;
    offset?: number;
};

export type GetCurrentUserPlaylistsResponse = ApiResponse<SimplifiedPlaylistObject>;

export interface SimplifiedPlaylistObject {
    collaborative?: boolean;
    description?: string;
    external_urls?: ExternalURLs;
    href?: string;
    id?: string;
    images?: Image[];
    name?: string;
    owner?: Owner;
    public?: boolean;
    snapshot_id?: string;
    tracks?: {
        href?: string;
        total?: number;
    };
    type?: string;
    uri?: string;
};