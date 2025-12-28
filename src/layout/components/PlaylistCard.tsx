import React, { useEffect, useState } from 'react'
import './PlaylistCard.style.css'
import { Typography } from '@mui/material';
import theme from '../../theme';

interface PlaylistCardProps {
    image?: string;
    ownerName?: string | null;
    name?: string;
    id?: string;
    type?: string;
    isSelected?: boolean;
    onClick?: () => void;
}

const PlaylistCard = ({image, ownerName, name, id, type, isSelected, onClick}: PlaylistCardProps) => {
  return (
    <div className={`palylistCardContainer ${isSelected ? 'playlistActive' : ''}`} onClick={onClick}>
      {image
      ? <img className='playlistCardImg' src={image}></img>
      : <div className='playlistCardImg'>no img</div>}
      <div className='palylistInfoContainer'>
        <Typography color='primary.main' sx={{fontWeight: 700}}>{name ? name : ''}</Typography>
        {ownerName
        ? <div>{type} {ownerName}</div>
        : <div></div>
        }
      </div>
    </div>
  )
}

export default PlaylistCard
