import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function ActionAreaCard({ index }) {
  console.log(index);
  return (
    <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Full Name: {index.firstName} {index.lastName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Company Name: {index.company.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Address: {index.address.city}, {index.address.state}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            email: {index.email}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Age: {index.age}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Date Of Birth: {index.birthDate}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            Blood-Group: {index.bloodGroup}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            University: {index.university}
          </Typography>     
        </CardContent>
    </Card>
  );
}