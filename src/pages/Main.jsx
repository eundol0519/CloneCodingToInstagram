// *** Main.jsx ***

import React from 'react';
import styled from 'styled-components';
import PostDetail from '../pages/PostDetail';
import Post from '../components/Post';
import { history } from '../redux/configureStore';
import { actionCreators as postAtions } from '../redux/modules/post';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import Grid from '../elements/Grid';
import unnamed from '../unnamed.jpg';
import avata from '../avata.png';
const Main = props => {
  const [postDetailModal, setPostDetailModal] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(postAtions.getPostDB());
  }, []);

  const postList = useSelector(state => state.post.postList);
  console.log(postList);

  return (
    <React.Fragment>
      <button
        onClick={() => {
          setPostDetailModal(true);
        }}
      >
        상세 페이지
      </button>
      {postDetailModal && (
        <PostDetail
          modal={postDetailModal}
          setPostDetailModal={setPostDetailModal}
          postId="8" // postId 넘겨 주시면 됩니다.
        ></PostDetail>
      )}

      <Box>
        <Container>
          {postList.map((p, idx) => {
            return (
              <ContainerItem>
                <Post key={p.postId} p={p} />
              </ContainerItem>
            );
          })}
        </Container>
        <ItemBox>
          <ItemBoxIn>
            <Profile>
              <ProfileOne>
                <Avatar
                  alt="정하나"
                  src={
                    'https://ca.slack-edge.com/T01L2TNGW3T-U02J6JQU3A8-42ddfd509b3a-512'
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    hana-j
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/hana-j`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar alt="이동호" src={unnamed} />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    TnIoP
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/TnIoP`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar alt="라이언" src={avata} />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    doyeon8621
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/doyeon8621`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar
                  alt="최주영"
                  src={
                    'https://ca.slack-edge.com/T01L2TNGW3T-U02K7HPA1BJ-163062d75326-512'
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    cwd3469
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/cwd3469`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar
                  alt="오은희"
                  src={
                    'https://ca.slack-edge.com/T01L2TNGW3T-U02HZ6KKL3E-9ed765d12a93-512'
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    eundol0519
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/eundol0519`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
              <ProfileOne>
                <Avatar
                  alt="신항민"
                  src={
                    'https://ca.slack-edge.com/T01L2TNGW3T-U02JJ3V9CLT-49c3c240fe6c-512'
                  }
                />
                <Grid is_flex>
                  <span style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                    ssinking91
                  </span>
                  <span
                    style={{
                      marginLeft: '10px',
                      fontWeight: 'bold',
                      fontSize: '15px',
                      color: 'dodgerblue',
                      cursor: 'pointer',
                    }}
                    onClick={() => {
                      window.open(`https://github.com/ssinking91`);
                    }}
                  >
                    팔로우
                  </span>
                </Grid>
              </ProfileOne>
            </Profile>
          </ItemBoxIn>
        </ItemBox>
      </Box>
      {/* 
      <Container>
        {postList.map((p, idx) => {
          return (
            <ContainerItem key={idx}>
              <Post p={p} />
            </ContainerItem>
          );
        })}
      </Container>
      <ItemBox /> */}
    </React.Fragment>
  );
};
const Box = styled.div`
  max-width: 934px;
  /* width: 891px; */
  margin: 0 auto;
  display: flex;
`;

const Container = styled.div`
  max-width: 614px;
  /* width: 891px; */
  /* margin: 0 auto; */
  display: flex;
  flex-wrap: wrap;
`;

const ContainerItem = styled.div`
  width: 614px;
  height: 891px;
  margin-bottom: 120px;
`;

const ItemBox = styled.div`
  display: flex;
  max-width: 304px;
  margin-left: 20px;
`;
const ItemBoxIn = styled.div`
  position: fixed;
  width: 304px;
  height: 600px;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  width: 304px;
  height: 600px;
  margin: 0 auto;
`;
const ProfileOne = styled.div`
  display: flex;
  width: 304px;
  height: 30px;
  padding: 15px 0;
  margin: 0 auto;
  align-items: center;
`;

export default Main;
