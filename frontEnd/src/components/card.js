import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { useTheme } from '@emotion/react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';

const DummyCardData = [
  {
    imgSrc: "image.png",
    content: "Gaming UI Designer",
    cap: "Rockstar game"
  },
  {
    imgSrc: "image.png",
    content: "Gaming UI Designer",
    cap: "Rockstar game"
  },
  {
    imgSrc: "image.png",
    content: "Gaming UI Designer",
    cap: "Rockstar game"
  }
];

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '25%',
});

const CardCom = React.memo(() => {
  const theme = useTheme();

  return (
    <>
      {DummyCardData.map((card, index) => (
        <Paper
          key={index}
          sx={(theme) => ({
            p: 2,
            flexGrow: 1,
            backgroundColor: '#fff',
            ...theme.applyStyles('dark', {
              backgroundColor: '#1A2027',
            }),
          })}
        >
          <Grid container spacing={5} justifyContent="space-between">
            <Grid item>
              <Img alt="complex" src={require(`../images/${card.imgSrc}`)} loading="lazy" />
            </Grid>

            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                {card.content}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {card.cap}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
});

export default CardCom;
