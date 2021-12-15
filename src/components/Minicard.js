import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import Grid from '../elements/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const MiniCard = props => {
  return (
    <Card sx={{ minWidth: 614 }}>
      <CardContent>
        <Grid is_flex>
          <Typography
            sx={{ fontSize: 30, mb: 3 }}
            color="text.secondary"
            gutterBottom
          >
            user_nickname
          </Typography>
        </Grid>
        <Typography variant="h7" component="div" sx={{ mb: 3 }}>
          게시물{bull}팔로워{bull}팔로우{bull}
        </Typography>

        <Typography variant="body2">
          Olivia 개인레슨 문의주세요 ❤️🧡💛💚💙💜❤️🧡💛💚💙💜
          <br />
          {/* {'"개인레슨"'} */}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">오바마님과 바이든님이 팔로우합니다.</Button>
      </CardActions>
    </Card>
  );
};

export default MiniCard;
