import React from 'react'
import { PlaylistTrack } from '../../../models/playlist';
import { TableCell, TableRow } from '@mui/material';
import { Episode, Track } from '../../../models/track';
import dayjs from 'dayjs';
import moment from 'moment';

interface DesktopPlaylistItemProps {
    index: number;
    item: PlaylistTrack;
}

const DesktopPlaylistItem = ({item, index}: DesktopPlaylistItemProps) => {
  const isEpisodeOrUndefined = (track: Track | Episode | undefined): track is Episode => {
    return track === undefined || 'description' in track 
  };

  return (
    <TableRow>
        <TableCell>{index}</TableCell>
        <TableCell>{item.track?.name || 'no name'}</TableCell>
        <TableCell>{isEpisodeOrUndefined(item.track) ? 'N/A' : item.track?.album?.name}</TableCell>
        <TableCell>{item.added_at ? dayjs(item.added_at).format('YYYY-MM-DD') : 'unknown'}</TableCell>
        <TableCell>{item.track?.duration_ms ? moment(item.track.duration_ms).format('mm:ss') : 'unknown'}</TableCell>
    </TableRow>
  )
}

export default DesktopPlaylistItem
