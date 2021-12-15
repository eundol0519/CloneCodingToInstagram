// *** PostDetail.jsx ***

import React from 'react';
import Modal from 'react-modal';
import { Grid, Image, Text, Input, Button } from '../elements/index';
import { Container } from '../elements';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as postActions } from '../redux/modules/post';
import { actionCreators as commentActions } from '../redux/modules/comment';

const PostDetail = props => {
  const [modal, setModal] = React.useState(props.modal ? true : false); // 모달창
  const [active, setActive] = React.useState(true); // 버튼 활성화 유무
  const [commentBox, setCommentBox] = React.useState(false); // 댓글창 활성화 유무
  const [content, setContent] = React.useState('');

  const postId = useParams(); // 파라미터로 넘어온 postId
  const dispatch = useDispatch();
  const postInfo = useSelector(state => state.post.cards[1]);
  const commentInfo = useSelector(state => state.comment.cards[1]);

  // 모달창을 닫으면 state도 false로 바꾸기
  const modalOff = () => {
    setModal(false);
    props.setPostDetailModal(false);
  };

  React.useEffect(() => {
    // dispatch(postActions.PostDetailLookUpFB(postId));
  }, []);

  const commentList = () => {
    setCommentBox(true);
    // dispatch(commentActions.CommentLookUpFB(postId));
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
        {/* <img src={`서버 주소/${postInfo.imageUrl}`} alt="게시물 사진"></img> */}
        <img
          style={{
            width: '100%',
            height: '500px',
          }}
          src="https://blog.kakaocdn.net/dn/EicxP/btq2z0ELlLb/4DzUVhKcnWurHt8VoJGWJ1/img.png"
          alt="게시물 사진"
        ></img>
      </Grid>
      <Grid width="40%" height="100%" float="left">
        {commentBox ? (
          <>
            <Grid height="10%" is_flex margin="0px 0px 0px 2%">
              <Grid is_flex justifyContent>
                <Image shape="circle" src={`${postInfo.imageUrl}`}></Image>
                <Text bold>{postInfo.nickname}</Text>
              </Grid>
              <Grid width="30%" center _onClick={back}>
                뒤로가기
              </Grid>
            </Grid>
            <Grid height="60%" overflow>
              {commentInfo.map(c => {
                return (
                  <>
                    <Grid margin="0px 0px 2% 1%" key={c.commentId}>
                      <Grid margin="2% 0%">{c.nickname}</Grid>
                      <Text margin="2% 0%">{c.content}</Text>
                      <Grid is_flex>
                        <Grid>{c.createdAt}</Grid>
                        <Grid
                          _onClick={() => {
                            window.alert('삭제');
                          }}
                        >
                          삭제
                        </Grid>
                      </Grid>
                      <hr></hr>
                    </Grid>
                  </>
                );
              })}
            </Grid>
            <Grid height="15%" is_flex>
              <Grid
                width="30%"
                _onClick={() => {
                  window.alert('좋아요를 눌렀습니다.');
                }}
              >
                ♡
              </Grid>
              <Grid width="30%" _onClick={commentList}>
                댓글
              </Grid>
              <Grid width="30%">{postInfo.likeCount}개</Grid>
              <Grid width="30%">{postInfo.createdAt}</Grid>
            </Grid>
            <Grid height="15%" is_flex>
              <Input
                width="100%"
                value={content}
                _onChange={e => {
                  setContent(e.target.value);
                }}
                _onKeyUp={checkActive}
                placeholder="댓글 입력..."
              ></Input>
              <Button
                width="10%"
                padding="5%"
                className={!active ? 'activeBtn' : 'unActiveBtn'}
              ></Button>
            </Grid>
          </>
        ) : (
          <>
            <Grid height="10%" is_flex justifyContent margin="0px 0px 0px 2%">
              <Image shape="circle" src={`${postInfo.imageUrl}`}></Image>
              <Text bold>{postInfo.nickname}</Text>
            </Grid>
            <Grid height="60%">{postInfo.content}</Grid>
            <Grid height="15%" is_flex>
              <Grid
                width="30%"
                _onClick={() => {
                  window.alert('좋아요를 눌렀습니다.');
                }}
              >
                ♡
              </Grid>
              <Grid width="30%" _onClick={commentList}>
                댓글
              </Grid>
              <Grid width="30%">{postInfo.likeCount}개</Grid>
              <Grid width="30%">{postInfo.createdAt}</Grid>
            </Grid>
            <Grid height="15%" is_flex>
              <Input
                width="100%"
                value={content}
                _onChange={e => {
                  setContent(e.target.value);
                }}
                _onKeyUp={checkActive}
                placeholder="댓글 입력..."
              ></Input>
              <Button
                width="10%"
                padding="5%"
                className={!active ? 'activeBtn' : 'unActiveBtn'}
              ></Button>
            </Grid>
          </>
        )}
      </Grid>
    </Modal>
  );
};

export default PostDetail;
