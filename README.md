1. GraphQL로 해결할 수 있는 두가지의 문제점
   -overfetching
   요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것이다.
   예를 들어 1번 사용자의 이름이 필요하다고 치자.
   그럼 /users/1 의 형식으로 요청을 하는데, 응답으로 이름뿐만이 아니라,
   나이,주소 등등 요청하지 않은 정보까지도 포함이 된다.
   이걸 overfetching이라고 한다.

   graphql을 이용하면
   필요한 정보만 요청해서 받을 수 있다.

   -underfetching
   인스타그램을 예로 들면 앱을 시작할 때 많은 정보를 받게 된다.
   앱을 시작하면 페이지의 피드, 알림, 사용자 프로필을 가져오기 위해서
   세번의 요청을 해야하는데, 이 과정에서 세가지의 요청이 3번 오고간다.
   이게 under-fetching이다. 하나를 완성하려고 많은 소스를 요청하는 것이다.

graphql을 이용하면 이것들을 해결할 수 있다. query를 통해 정확하게 원하는 정보만 받을 수 있다.
query는 database에 원하는 정보를 요청하고 graphql 언어로 내가 원하는 정보를 알려줄 수 있다.

nodemon : 파일을 수정할때마다 서버를 재시작

schema는 사용자에게 보내거나, 사용자로부터 받을 data에 대한 설명이다.

database로부터 정보를 얻는다. 이걸 query라 부른다. query는 정보를 받을 때만 쓰인다.

mutation은 정보를 변형할 대, 서버에서 혹은 database에서, 메모리에서 정보를 바꾸는 작업을 할때 쓰인다.

어떤 사용자가 query에 이름을 보내면, 사용자한테 string을 보낸다.

typeDefs는 모든 type들에 대한 정의이다. / resolver는 query를 resolve(해결)한다.

graphql playground는 database를 테스트하게 해준다.

graphql resolvers는 graphql 서버에서 요청을 받는다. graphql 서버가 query나 mutation의 정의를 발견하면 resolver를 찾고 함수를 실행해준다.
