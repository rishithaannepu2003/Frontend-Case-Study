import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GoogleMap from './Map';
import "./Card.css";
import ActionAreaCard from './Detail';
export default function CardComponent({ data }) {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleCard = (idx) => {
        setActiveIndex(idx === activeIndex ? -1 : idx);
    };

    const [index, setIndex] = useState(-1);

    const toggleCard2 = (person) => {
        setIndex(person===index?-1:person);
    };
    console.log(index);
    return (
        <div className='cardwrapper'>
            {data.map((person, idx) => (
                <Card sx={{ maxWidth: 345 }} key={idx}>
                    <CardActionArea onClick={() => toggleCard2(person.id)}>
                        {index===person.id?(<div><ActionAreaCard index={person}/></div>):(<> <CardMedia
                            component="img"
                            height="140"
                            image={person.image}
                            alt="img"
                        />
                        
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {person.firstName} {person.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem qui voluptatum maxime soluta eum corrupti fugit suscipit vel ipsa ex quibusdam, rerum quasi, eligendi aspernatur praesentium. Excepturi, atque. Error, eum!
                            </Typography>
                        </CardContent>
                        </>)}
                       
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => toggleCard(idx)}>
                            Summary
                        </Button>
                    </CardActions>
                    {activeIndex === idx && (
                        <div className='map'>
                            <GoogleMap key={person.id} data={person} />
                        </div>
                    )}
                </Card>
            ))}
        </div>
    );
}