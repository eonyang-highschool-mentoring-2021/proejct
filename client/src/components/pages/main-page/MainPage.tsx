import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const MainPage = (): JSX.Element => (
  <Grid
    container
    style={{
      width: '100%',
      height: '100%',
      backgroundColor: 'tomato'
    }}
  >
    <Typography>메인 페이지</Typography>
  </Grid>
);

export default MainPage;
