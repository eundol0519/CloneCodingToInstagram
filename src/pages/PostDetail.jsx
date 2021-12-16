// *** PostDetail.jsx ***

import React from 'react';
import Modal from 'react-modal';
import { Grid, Image, Text } from '../elements/index';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as commentActions } from '../redux/modules/comment';

// mui icons import
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ClearIcon from '@mui/icons-material/Clear';

const PostDetail = props => {
  const postId = useParams(); // 파라미터로 넘어온 postId
  const dispatch = useDispatch();
  const postInfo = useSelector(state => state.post.cards[1]);
  const userInfo = useSelector(state => state.user.users[1]);
  const commentInfo = useSelector(state => state.comment.cards[1]);

  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [commentBox, setCommentBox] = React.useState(false); // 댓글창 활성화 유무
  const [content, setContent] = React.useState('');
  const [like, setLike] = React.useState(postInfo.myLike ? true : false); // 사용자별 좋아요 유무

  // 모달창을 닫으면 state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostDetailModal(false);
  };

  React.useEffect(() => {
    dispatch(postActions.PostDetailLookUpFB(props.postId));
  }, []);

  const commentList = () => {
    if (!commentBox) {
      dispatch(commentActions.CommentLookUpFB(postId));
      setCommentBox(true);
    } else {
      setCommentBox(false);
    }
  };

  const back = () => {
    setCommentBox(false);
  };

  const checkActive = () => {
    if (content === '') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const commentWrite = () => {
    if (content === undefined || content === '') {
      window.alert('댓글을 입력 해주세요');
      return;
    }

    dispatch(commentActions.CommentAddFB(props.postId, content));
    setContent(''); // 댓글을 입력하면 input의 value를 날려준다.
  };

  const commentDelete = commentId => {
    const deleteConfirm = window.confirm('댓글을 삭제 하시겠습니까?');

    if (deleteConfirm) {
      dispatch(commentActions.CommentDeleteFB(commentId, props.postId));
    }
  };

  const postDelete = () => {
    const deleteConfirm = window.confirm('게시물을 삭제 하시겠습니까?');

    if (deleteConfirm) {
      dispatch(postActions.PostDeleteFB(props.postId))
        .then(response => {
          setModal(false);
          props.setPostDetailModal(false);
        })
        .catch(error => {
          console.log('PostDetail.jsx PostDeleteFB error', error);
        });
    }
  };

  const postLike = () => {
    if (!like) {
      // 좋아요 갯수 +1
      setLike(true);
      dispatch(postActions.PostLikeFB(props.postId, 'plus'));
    } else {
      // 좋아요 갯수 -1
      setLike(false);
      dispatch(postActions.PostLikeFB(props.postId, 'minus'));
    }
  };

  return (
    <Modal
      isOpen={modal}
      ariaHideApp={false}
      onRequestClose={modalOff}
      style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(15, 15, 15, 0.79)',
        },
        content: {
          position: 'absolute',
          top: '70%',
          left: '50%',
          width: '60%',
          height: '70%',
          border: 'none',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '3px',
          outline: 'none',
          transform: 'translate(-50%, -50%)',
          padding: '0px',
          margin: 'auto',
        },
      }}
    >
      <Grid width="60%" height="100%" float="left">
        <img
          style={{
            width: '100%',
            height: '500px',
          }}
          src={`${postInfo.imageUrl}`}
          alt="게시물 사진"
        ></img>
      </Grid>
      <Grid width="39%" height="100%" float="left">
        {commentBox ? (
          <>
            <Grid height="10%" is_flex margin="1% 1% 2% 1%">
              <Grid is_flex justifyContent>
                <Image shape="circle" src={`${postInfo.imageUrl}`}></Image>
                <Text width="85%" bold>
                  {postInfo.nickname}
                </Text>
              </Grid>
              <ArrowBackIosIcon onClick={back}></ArrowBackIosIcon>
            </Grid>
            <Grid height="60%" overflow margin="1% 2% 1% 2%">
              {commentInfo.map(c => {
                return (
                  <>
                    <Grid key={c.commentId}>
                      <Text bold margin="0px 0px 2% 3%">
                        {c.nickname}
                      </Text>
                      <Text width="90%" margin="0px 0px 2% 3%">
                        {c.content}
                      </Text>
                      <Grid is_flex gap="55%" margin="3%">
                        <Text>{c.createdAt}</Text>
                        {userInfo.nickname === c.nickname ? (
                          <Grid
                            width="50%"
                            _onClick={() => {
                              commentDelete(c.commentId);
                            }}
                          >
                            <ClearIcon></ClearIcon>
                          </Grid>
                        ) : null}
                      </Grid>
                      <hr width="98%" align="left"></hr>
                    </Grid>
                  </>
                );
              })}
            </Grid>
          </>
        ) : (
          <>
            <Grid height="10%" is_flex justifyContent margin="1% 1% 2% 1%">
              <Image
                shape="circle"
                src={`${postInfo.imageUrl_profile}`}
              ></Image>
              <Text width="85%" bold>
                {postInfo.nickname}
              </Text>
            </Grid>
            <Grid height="60%" overflow margin="1% 2% 1% 2%">
              {postInfo.content}
            </Grid>
          </>
        )}
        <Grid height="15%" is_flex>
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
                    onClick={commentList}
                  ></ChatBubbleOutlineIcon>
                </IconButton>
                {userInfo.nickname === postInfo.nickname ? (
                  <IconButton aria-label="delete">
                    <ClearIcon onClick={postDelete}></ClearIcon>
                  </IconButton>
                ) : null}
              </Grid>
            </Grid>
          </CardActions>
          <Grid width="30%">{postInfo.likeCount}개</Grid>
          <Grid width="30%">{postInfo.createdAt}</Grid>
        </Grid>
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
          <button
            style={{
              border: 'none',
              width: '94px',
              height: '46px',
              backgroundColor: 'rgba(0,0,0,0)',
              color: active ? '#B2DFFC' : '#0095f6',
              cursor: 'pointer',
            }}
          >
            게시
          </button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default PostDetail;
