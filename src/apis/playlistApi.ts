import { GetCurrentUserPlaylistsRequest, GetCurrentUserPlaylistsResponse, GetPlaylistItemsRequest, GetPlaylistItemsResponse, GetPlaylistRequest, Playlist, PlaylistTrack } from "../models/playlist";
import api from "../utils/api";

const getCurrentUserPlaylists = async({limit, offset}: GetCurrentUserPlaylistsRequest): Promise<GetCurrentUserPlaylistsResponse> => {
    try {
        const response = await api.get('/me/playlists', {
            params: {limit, offset}
        });

        return response.data;
    } catch (error) {
        throw new Error('Fail to fetch current user playlists!');
    }
};

export default getCurrentUserPlaylists;

export const getPlaylist = async(params: GetPlaylistRequest): Promise<Playlist> => {
    try {
        const response = await api.get(`/playlists/${params.playlistId}`, {
            params
        })

        return response.data;
    } catch (error) {
        throw new Error('Fail to fetch playlist detail!');
    }
};

export const getPlaylistItems = async(params: GetPlaylistItemsRequest): Promise<GetPlaylistItemsResponse> => {
    try {
        const response = await api.get(`/playlists/${params.playlistId}/tracks`, {
            params
        });

        return response.data;
    } catch (error) {
        throw new Error('Fail to fetch playlist items!');
    }
};