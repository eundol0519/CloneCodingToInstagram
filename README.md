# 인스타그램
<p align="center"><img width="500"  alt="스크린샷 2021-12-09 오후 2 32 42" src="https://sightmap.co.kr/wp-content/uploads/sites/2/2021/05/instagram.jpg">
 </p>

</br>

## 🤷 프로젝트 소개 
 <p> 인스타그램 </p>
  
  Web Site : http://team2instagram.s3-website.ap-northeast-2.amazonaws.com
</br>


## 🎥 시연 영상
 [![Hnet-image](https://www.youtube.com/watch?v=DxQZ4e5tRxw )<br>
이미지를 클릭하시면 유튜브 영상으로 이동됩니다.

## 🧑🏼‍💻 개발기간 및 팀원소개
### 기간: 2021.12.06 ~ 2021.12.11 (5일)  
</br>

### Front-end   
   <p><a href="https://github.com/eundol0519" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=React&message=오은희&color=61dafb&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/WooMinGy" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=React&message=우민기&color=61dafb&style=for-the-badge&>"/></a></p>
   
  
### Back-end
<p><a href="https://github.com/jybin96" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=정영빈&color=08CE5D&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/Zabee52" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=김용빈&color=08CE5D&style=for-the-badge&>"/></a></p>
   <p><a href="https://github.com/HundredCleanWater" target="_blank"><img width="150"  src="https://img.shields.io/static/v1?label=Spring&message=백정수&color=08CE5D&style=for-the-badge&>"/></a></p>
   

  
</br>



## 🏷 API Table
<details>
 <summary>자세히 보기</summary>
 
  ![image](https://user-images.githubusercontent.com/90129613/145416387-0d1c54aa-7110-4f2b-b1a4-0dbb90b07e62.png)
 
<!-- |기능|Method|URL|Request|Response|
|:-----:|:----:|----|----|----|
|로그인 요청|POST|/user/login|{username: "iamuser",</br>password: "1234"}| |
|회원</br>가입|POST|/api/signup|{username:"iamuser"</br>,"password:"1234"</br>,passwordCheck:"1234"}||
|아이디 중복 검사|POST|/api/idCheck|{username:"iamuser"}|{result:false}|
|로그인 여부</br>확인|GET|/api/islogin||{userInfo:{username:"username"}</br>}|
|로그아웃|GET|/api/logout|||
|사진</br>업로드|POST|/api/images||{imageUrl:"/images/cancle.png"}|
|게시글 작성|POST|/api/posts|{title:"제목입니다",</br>content:"반가워요",</br>imageUrl:"/images/cancle.png"}||
|게시글 수정|PUT|/api/posts/{postId}|{content:"반갑습니다"}||
|게시글 삭제|DELETE||||
|랜덤</br>게시글 조회|GET|/api/posts||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime}]</br>}|
|내가</br>작성한 게시글 조회|GET|/api/comments/{postId}||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글내용2",</br>createdAt:LocalDateTime}]</br>}|
|내가</br> 댓글을 작성한 게시글 조회|GET|/api/comments/{commentId}||{postId:1,</br>title:"제목",</br>content:"글내용",</br>comments:[{</br>commentId:1,</br>comment:"댓글내용",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글내용2",</br>createdAt:LocalDateTime}]</br>}|
|댓글</br> 작성|POST|/api/comments/{postId}|{comment:"댓글"}||
|피드</br>페이지|GET|/api/feeds||[myPosts:[{</br>postId:1</br>title:"제목",</br>content:"내용",},</br>{postId:2,</br>title:"제목2",</br>content"내용2"}],</br>myComments:[{</br>commentId:1,</br>comment:"댓글",</br>createdAt:LocalDateTime},</br>{commentId:2,</br>comment:"댓글2",</br>createdAt:LocaldateTime}]</br>]| -->

</details>



</br>


## 🔨사용한 기술 스택
<img width="866" alt="스크린샷 2021-12-09 오후 2 32 42" src="https://user-images.githubusercontent.com/90129613/145340150-0241eb6f-4f6f-4688-9083-11e60ef709c0.png">





<code> Front-end </code>
 * React 
 * JavaScript
 * CSS
 * Axios

<code> Back-end </code>
* [Back-end 개발Page](https://github.com/HanghaeAnonymous/Team-11-Back)


<code>Tool</code>
* Git
* GitHub

## ⚒️ 11조 와이어 프레임
 <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcX8PiK%2FbtrnyHwC5aj%2F5h3z7CSSEVEKcdW2FnH7u0%2Fimg.png" width="600" height="500"/>

## ✌🏻 개인 역할 및 트러블슈팅 해결과정

<code>오은희</code> 로그인(모달 창으로 구현), 로그아웃, 댓글 작성, 게시글 및 댓글 불러오기(상세 페이지 및 피드 페이지), 뷰 구현, 스크롤바 숨김 기능,  css디자인

<code>우민기</code> 회원가입(모달 창으로 구현), 게시글 작성, 수정, 삭제, 이미지 업로드, css디자인

<code>Trouble Shooting</code>[트러블 슈팅 해결과정](https://chrome-armadillo-b80.notion.site/ac9cfa6f72eb401692f490c3c1420c30)

</br>





## 📝 후기 및 팀 노션 페이지

<code>오은희</code> 
BE와 FE가 협력하는 방법을 배우면서 어떻게 협업하면 좋은 지 API, 와이어 프레임은 어떻게 작성하면 좋은 지, 기능을 구현하기 전에 어떤 흐름으로 진행 되는 지 감을 잡을 수 있습니다. 제게 있어 부족한 부분은 팀원분들이 채워 주시고, 제가 잘하는 부분에 있어서는 최선을 다할 수 있었고 이번 프로젝트에서 가장 크게 깨닳은 점은 1) 컨디션 조절을 잘해야 한다. 2) 기능을 구현하기 전에 어떤 흐름으로 코드를 구현 할 지, 어떤 request가 필요하고 어떤 response를 받아야 하는 지 크게 깨닳은 한 주 였습니다!

<code>우민기</code> 
원래는 FE와 BE 각각의 역할을 어느정도 알고 있었지만 어디까지가 FE의 역할인지의 구분선이 확실하지 못했었는데 이번 협업을 통해서 확실히 알게된 것 같고, 처음으로 서버와 통신하면서 많은 것들을 알게 된 것 같습니다. 또한, 팀원 분들의 실력이 좋기 때문도 있겠지만 저희는 계속 소통하며 프로젝트를 진행하니 그렇다할 큰 버그들이 발생하지 않아서 소통이 엄청 중요하다는 것을 느낀 것 같고, 처음에 api명세를 작성할떄까지만 해도 처음이다보니 잘 몰라 팀원들을 따랐었는데 다른 분들과의 협업을 통해 많은 것을 배울수 있던 한주였던 것 같습니다!

<code>팀 노션 페이지</code> [익명의 멘탈케어](https://chrome-armadillo-b80.notion.site/c96fcf057d404cb98d18c01cb404aaa7)
