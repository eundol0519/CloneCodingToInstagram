import * as React from 'react';
import { history } from '../redux/configureStore';
import { actionCreators as postAtions } from '../redux/modules/post';
import { actionCreators as commentActions } from '../redux/modules/comment';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '../elements/Grid';
// mui icons import
// import styled from 'styled-components';
import { styled } from '@mui/material/styles';
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

function PostCard(props) {
  const p = props.p;
  const dispatch = useDispatch();
  const postInfo = useSelector(state => state.post.cards[1]);

  const [content, setContent] = React.useState('');
  const [like, setLike] = React.useState(postInfo.myLike ? true : false); // 사용자별 좋아요 유무
  const [active, setActive] = React.useState(false); // 버튼 활성화 유무

  const postLike = () => {
    if (!like) {
      //!like = false일때만,
      // 좋아요 갯수 +1
      setLike(true);
      dispatch(postAtions.PostLikeFB(p.postId, 'plus'));
    } else {
      // 좋아요 갯수 -1
      setLike(false);
      dispatch(postAtions.PostLikeFB(p.postId, 'minus'));
    }
  };

  const commentWrite = () => {
    if (content === undefined || content === '') {
      window.alert('댓글을 입력 해주세요');
      return;
    }
    dispatch(commentActions.CommentAddFB(p.postId, content));
    setContent(''); // 댓글을 입력하면 input의 value를 날려준다.
  };
  const checkActive = () => {
    if (content === '') {
      setActive(false);
    } else {
      setActive(true);
    }
  };
  return (
    <Card sx={{ maxWidth: 614 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="라이언"
            src={p.imageUrl_profile}
            onClick={() => {
              history.push(`/myPage/${p.userId}`);
            }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={p.userNickname}
        // subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="614"
        image={p.imageUrl}
        alt={p.userNickname}
      />

      <CardActions disableSpacing>
        <Grid is_flex>
          <Grid>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon
                style={{ color: like && 'pink' }}
                onClick={postLike}
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
        <Typography variant="body2" color="Heading3">
          <span style={{ fontWeight: 20, fontWeight: 'bold' }}>
            좋아요 {postInfo.likeCount} 개
          </span>
          <br />
          <br />
          onKeyUp={checkActive}
          <span style={{ fontWeight: 20 }}>{p.content}</span>
          <br />
          <br />
          <spaon style={{ fontWeight: 20, opacity: 0.5 }}>
            댓글 {p.commentCount}개 모두보기
          </spaon>
          <br />
          <spaon style={{ fontWeight: 20, opacity: 0.5 }}>{p.createdAt}</spaon>
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
          value={content}
          onChange={e => {
            setContent(e.target.value);
          }}
          onKeyUp={checkActive}
          onKeyPress={e => {
            if (e.key === 'Enter') {
              commentWrite(e);
            }
          }}
        />
        <IconButton aria-label="save">
          <button
            style={{
              border: 'none',
              width: '94px',
              height: '46px',
              color: active ? '#0095f6' : '#B2DFFC',
              backgroundColor: 'rgba(0,0,0,0)',
            }}
            onClick={commentWrite}
            value={content}
          >
            게시
          </button>
        </IconButton>
      </Grid>
    </Card>
  );
}

export default PostCard;
