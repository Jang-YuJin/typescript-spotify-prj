import { Typography } from '@mui/material';
import React from 'react'
import './Card.style.css'
import PlayButton from './PlayButton';

interface CardProps {
    image: string;
    name: string;
    artistName: string | undefined;
}

const Card = ({image, name, artistName}: CardProps) => {
  return (
    <div className='cardContainer'>
        <img src={image} className='cardImg'></img>
        <div className='palyButton'><PlayButton></PlayButton></div>
        <Typography className='cardName'>{name}</Typography>
        {artistName ? <Typography className='cardArtistName'>{artistName}</Typography> : ''}
    </div>
  )
}

export default Card
