
import * as React from 'react';
import MenuList from '../components/MenuList';
import CardList from '../components/cardList';
import '../style/navBar.css'
import Grid from '@mui/material/Grid2';

export default function MainPage() {

  return (
    <Grid container spacing={2} className="container">

      <Grid item xs={4} >
        <MenuList />
      </Grid>
      <Grid item xs={8} >
        <CardList />
      </Grid>
    </Grid>

  );
}