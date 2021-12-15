import * as React from 'react';
import styled from 'styled-components';
//import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

import Grid from '../elements/Grid';
import { history } from '../redux/configureStore';

function postCard(props) {
  const a = 1;
  return (
    <Card sx={{ maxWidth: 614, marginBottom: 4 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="라이언"
            src="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201906/11/ed4c23f1-8ffa-4275-82a7-c6f358b44a27.jpg"
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="라이언일병구하기"
        // subheader="September 14, 2016"
        onClick={() => {
          history.push('/myPage');
        }}
      />
      <CardMedia
        component="img"
        height="614"
        image="https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201906/11/ed4c23f1-8ffa-4275-82a7-c6f358b44a27.jpg"
        alt="Paella dish"
      />

      <CardActions disableSpacing>
        <Grid is_flex>
          <Grid>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon
                onClick={() => {
                  console.log('1');
                }}
              />
            </IconButton>
            <IconButton aria-label="comment">
              <ChatBubbleOutlineIcon
                onClick={() => {
                  console.log('2');
                }}
              />
            </IconButton>
            <IconButton aria-label="send">
              <SendOutlinedIcon
                onClick={() => {
                  console.log('3');
                }}
              />
            </IconButton>
          </Grid>
          <IconButton aria-label="save">
            <BookmarkBorderOutlinedIcon
              onClick={() => {
                console.log('4');
              }}
            />
          </IconButton>
        </Grid>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <span style={{ fontWeight: 20 }}>좋아요 개</span>
          <br />
          초대해주셔서 감사합니다🙏🏻
        </Typography>
      </CardContent>
      <Grid is_flex>
        <input
          placeholder="😀 댓글달기..."
          style={{
            margin: '0',
            border: 'none',
            width: '520px',
            height: '40px',
            backgroundColor: 'rgba(0,0,0,0)',
          }}
          onClick={() => {
            console.log('5');
          }}
        />
        <button
          style={{
            border: 'none',
            width: '94px',
            height: '46px',
            color: 'skyblue',
            backgroundColor: 'rgba(0,0,0,0)',
            cursor: 'pointer',
          }}
          onClick={() => {
            console.log('6');
          }}
        >
          게시
        </button>
      </Grid>
    </Card>
  );
}

export default postCard;
