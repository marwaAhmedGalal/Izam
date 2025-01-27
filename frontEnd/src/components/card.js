import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import { useTheme } from '@emotion/react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});
export default function CardCom() {
  const theme = useTheme();

  return (
    <Paper
      sx={(theme) => ({
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: '#fff',
        ...theme.applyStyles('dark', {
          backgroundColor: '#1A2027',
        }),
      })}
    >
      <Grid container spacing={2}>
        <Grid item>
            <Img alt="complex" src="./images/image.png" />
       
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Gaming Ui Designer
              </Typography>
              <Typography variant="body2" gutterBottom>
                Rockstar game
              </Typography>
            
            </Grid>
          </Grid>
          <Grid item>
                <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}