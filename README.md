## Create

```jsx
create-next-app
npm run dev
```

## Route

기본 리액트 앱에서는 router-dom 을 import 해서 라우팅을 했지만 Next.js 에서는 기본으로 제공함

`create-next-app`을 하면 `pages` 폴더가 생성된다.

`index.js` (/) : 기본 메인 페이지

`news.js` : `http://localhost:3000/news`

별도의 라우트를 작성해주지 않아도 페이지가 생긴다.

이 방법 외에도

`pages` 에 `news` 폴더를 만들어 `index.js` 를 만들어주면 `http://localhost:3000/news`에 똑같이 접근이 가능하다.

![Screenshot 2022-12-20 at 3.52.04 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/de28f807-ab17-4cee-a19b-0a754674b449/Screenshot_2022-12-20_at_3.52.04_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T051445Z&X-Amz-Expires=86400&X-Amz-Signature=54ab2b99cc0439c5d1a1f7d8c4e50322cd7148221ccce8beabf8bbde7cf9db9a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202022-12-20%2520at%25203.52.04%2520PM.png%22&x-id=GetObject)

**중첩으로 파일을 만들고 싶을 때**

(예를 들어 `http://localhost:3000/news/someting`)

![Screenshot 2022-12-20 at 3.55.56 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9523d72d-8eb8-46c4-9803-f2f2d69a2b8c/Screenshot_2022-12-20_at_3.55.56_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T051508Z&X-Amz-Expires=86400&X-Amz-Signature=a54e57df03a3de437cc9706e4f2003379c2840e003f72179140c2702f67bdabb&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202022-12-20%2520at%25203.55.56%2520PM.png%22&x-id=GetObject)

이렇게 작성해주면 원하는 url로 라우팅된다.

**동적인 url 을 보내야 할 때**

[filename].js []대괄호안에 파일명을 작성하면 동적페이지로 받는다.

`http://localhost:3000/news/news`

라고 url 을 입력했을 때 useRouter은 사용자가 어떤 라우터에 있는지 알려줄 수 있다.

`router.query` 을 콘솔에 출력해보면 어느 쿼리에 있는지 알려줘서 URL에 인코딩된 구체적인 값을 얻을 수 있다. 추출해서 나중에 여러 데이터를 다루고 각 데이터에 기반해서 여러 다른 작업을 할 수 있다.

```jsx
import { useRouter } from 'next/router';
// Next.js 에서 제공하는 useRouter hook

function DetailPage() {
  const router = useRouter();
  const newsId = router.query;

  console.log(newsId);
  /*{newsId: 'news'}
		newsId: 
		"news" */

  return <h1>Detail Page</h1>;
}

export default DetailPage;
```

![Screenshot 2022-12-20 at 4.04.46 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7a8f270b-6b71-4456-9350-577ea05aab53/Screenshot_2022-12-20_at_4.04.46_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T051526Z&X-Amz-Expires=86400&X-Amz-Signature=6628df653ff1e38e958700df58041e5204fa3e49dae05d754412f4b2577571c9&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202022-12-20%2520at%25204.04.46%2520PM.png%22&x-id=GetObject)

## Link

**Link**

이 특수 컴포넌트 Link가 앵커 태그를 렌더링하고 이 앵커 태그에 하는 클릭을 감지해서

클릭을 하면 브라우저가 기본 동작으로 새 HTML 페이지를 받는 요청을 보내지 못하도록 한다. 대신에 불러올 컴포넌트를 읽어 들이고 URL을 변경하여 페이지가 바뀐 것처럼 보이게 한다.

```jsx
import Link from 'next/link'

next.js 는
<Link href="/"/> to 가 아닌 href 프로퍼티로 작성
```

**a**

a 로 url 을 이동할 경우 잠깐 X 표시가 떴다가 새로 고침 아이콘으로 돌아온다.

이는 항상 브라우저가 새 요청을 보내고 새 HTML 페이지를 받는다는 신호.

이건 싱글 페이지 애플리케이션이 아니다. 사용자가 탐색할 때마다 새 요청을 백엔드에 보내고 새로운 HTML 페이지를 받는다는 것

이러면 저장했던 상태들이 없어질 수 있다. 리덕스 상태나 컨텍스트 상태 등 전부 없어진다.

---

## 사전 렌더링 기능

데이터 패칭할 때 두 번 렌더링 되는 문제(사용자를 기다리게 하고, 처음 서버에서 받아온 HTML파일이 비어있어서 SEO가 되지않음) 해결 할 수 있다.

- 두 번 렌더링 된다는 것은 useState로 배열을 관리할 때 첫번째 렌더링때는 빈배열, 두번째 렌더링 때는 useEffect 로 패칭 후에야 배열 state 가 채워짐

이 내장된 프로세스에는 단점이라고 하자면 단점일 부분이 있다

사전 렌더링한 페이지는 컴포넌트가 첫 번째 렌더링 사이클을 마친 이후의 스냅샷을 콘텐츠로 갖고 있다

→ 중요한 데이터가 손실된 상태

이렇게 어떤 라우터가 있다면 요청은 라우터에 전해지고 페이지로 간다

![Screenshot 2022-12-23 at 3.43.39 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ad6a615a-7c00-43ea-9338-0aa828b17748/Screenshot_2022-12-23_at_3.43.39_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T051544Z&X-Amz-Expires=86400&X-Amz-Signature=c7ef9880d6a102b688ab6c9f90a6d5b9d707360b22eabf98062f87fb5470d29a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202022-12-23%2520at%25203.43.39%2520PM.png%22&x-id=GetObject)

여기에서 사전 렌더링한 페이지를 반환하지만 데이터는 손실되었을 것.

이게 이론적으로는 SEO, 즉 검색 엔진 최적화에 좋을지 몰라도 항상 좋은 건 아닐 수 있다

HTML 페이지를 받은 후에 React가 받아 가서 페이지에 hydrate라고 부르는 작업을 수행

즉 React가 페이지를 싱글 페이지 애플리케이션으로 만들고 제어하는 것.

useEffect 함수를 실행할 것이고 데이터를 받아와서 페이지를 업데이트할 것

→ 브라우저에서(서버에서도 아니고 사전 렌더링한 페이지에서도 아니다)

대신 이 페이지를 브라우저에서 받은 후일 것. 따라서 이 경우에는 필요한 모든 데이터가 있는 완전한

대화형 페이지나 앱을 갖게 된다.

하지만 초기에 반환된 HTML 코드에 이미 데이터가 포함되도록 데이터가 있는 페이지를 사전 렌더링하려면

이 내장된 사전 렌더링 프로세스를 미세 조정해야 하고 그에 맞는 설정을 해야 한다.

→ NextJS의 페이지 렌더링 방법 제어에 사용하는 두가지 형태의 사전 렌더링 제공

### 1. **정적 생성**

정적 생성에서 페이지 컴포넌트가 사전 렌더링 되는 시점은 애플리케이션을 빌드하거나 Next 프로젝트를 빌드하는 시점 즉 프로덕션용으로 빌드하는 시점

**중요!** 정적 생성에서는 기본적으로 요청이 서버에 도달했을 때 서버에서 즉각적으로 페이지를 사전 렌더링하지 않는다. 대신에 개발자가 프로덕션용 사이트를 빌드할 때 사전 렌더링을 함.

즉 사이트가 배포되고 나면 사전 렌더링한 페이지는 변경되지 않는다는 뜻

### - getStaticProps

NextJS는 페이지를 마련한다. 기본적으로 이미 정적인 페이지를 생성하고 기본적으로 빌드 프로세스 중에 페이지를 생성한다. 하지만 데이터를 기다려야 한다면, 즉 페이지 컴포넌트에 데이터를 가져와서 추가해야 한다면 페이지 컴포넌트 파일 안에서 특수 함수를 export로 내보내면 된다.

- pages 폴더 안에 있는 컴포넌트 파일들에서만 가능하다.
- 이 함수는 실제로 이 페이지에서 사용할 props를 준비
- 이 props는 페이지에서 필요한 데이터를 포함할 수 있다
- 비동기적으로 설정될 수 있어서 유용
- 여기에서 promise를 반환할 수 있다

```jsx
function HomePage(props) {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      meetups: DUMY_MEETUPS,
    },
    revalidate: 10,
  };
};

export default HomePage;
```

NextJS는 이 promise가 데이터를 읽어 들일 때까지 기다린다

그다음에 이 컴포넌트 함수에서 사용할 props를 반환 → 이 컴포넌트 함수가 실행되기 전에 데이터를 읽어 들일 수 있어서 이 컴포넌트를 필요한 데이터와 함께 렌더링할 수 있다.

여기에 작성하는 모든 코드는 클라이언트 측에 들어가지 않기 때문에 클라이언트 측에서 절대 실행되지 않는다. (이 코드는 빌드 프로세스 중에 실행되기 때문)

- **revalidate**
  데이터를 업데이트 해주는 프로퍼티
  revalidate 값이 10이라면 이 페이지에 요청이 들어오면 적어도 10초마다 서버에서 페이지를 다시 생성

### -getStaticPaths

동적 페이지에서 필요한 함수고, 넥스트 JS에게 어떤 동적 매개변수 밸류의 어떤 페이지가 프리 제너레이트되어야 하는지 말해주는 중요한 함수

ex.디테일페이지 작업에서의 사용

디테일 페이지 같은 경우 매초 여러번의 데이터 변동은 없지만 동적 페이지이다.

그래서 `getStaticProps` 를 사용하여 프리패칭 하는데

여기서 `getStaticPaths` 를 함께 사용해주어야 한다.

왜냐면 데이터를 패치할 때 정확한 데이터를 불러왔는지 확인할 방법이 필요하다.

예를들어 ID같은게 필요하다. URL에 ID 가 인코드 되어있으니 `useRouter`로 사용할 생각을 할 수도 있지만 이건 함수 밖에 있기 때문에 여기서 훅사용이 불가능하다.

→ context 매개변수 사용!

context.params 를 사용하여 ID객체를 가져올 수 있다.

```jsx
export const getStaticProps = async (context) => {
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        image:
          'https://cdn.pixabay.com/photo/2022/01/30/17/16/snowman-6981771_1280.jpg',
        title: 'title',
        address: 'address',
        description: 'description',
      },
    },
  };
};
```

이렇게 해주면

![Screenshot 2022-12-23 at 5.08.48 PM.png](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/62c03314-d9fc-42ce-88dc-f2071551cd32/Screenshot_2022-12-23_at_5.08.48_PM.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221228T051602Z&X-Amz-Expires=86400&X-Amz-Signature=3400718b6e33b4fbe2e06c4e2737f685aa5b9604dbfc01c8da37be6e670f8e2a&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22Screenshot%25202022-12-23%2520at%25205.08.48%2520PM.png%22&x-id=GetObject)

`getStaticPaths` 를 작성하라고 뜬다.

`getStaticPaths` 은 next.js 가 이해할 수 있는 또다른 함수이다.

- `getStaticProps`는 페이지가 빌드 프로세스 중에 프리 제너레이트 됐다.
  ⇒ 넥스트 JS가 동적 페이지의 모든 버전의 프리 제너레이트가 필요하다는 말)지원되는 모든 ID에서)
  - 동적이기 때문에 넥스트 JS는 어떤 ID 밸류가 프리 제너레이트 페이지가 되어야 하는지 알아야 한다.
  - ID는 여기 있는 URL에서 얻을 수 있다. 하지만 사용자가 URL의 특정 밸류로 페이지에 방문했을 때 프리 제너레이트되는 게 아니라 빌드 프로세스에서 되는 것이다. 따라서 모든 URL에서 프리 제너레이트해야 한다.
    (만약 프리 제너레이트 하지 않은 페이지인 ID로 입장하면 404 에러를 보게 될 것)
- `getStaticPaths` 함수는 객체를 리턴
  모든 동적 세그먼트 밸류가 있는 객체
      ```jsx
      export const getStaticPaths = async () => {
        return {
          fallback: false,
          paths: [
            {
              params: {
                meetupId: 'm1',
              },
            },
            {
              params: {
                meetupId: 'm2',
              },
            },
          ],
        };
      };
      ```

      - 이 객체는 paths 키가 있어야 함 = 배열
      - 그리고 배열에는 객체가 여러 개 있어야 함
      - 동적 페이지 버전당 객체가 하나, 이 객체는 params 키를 가짐( 꼭 필요. 이건 모든 키 밸류 쌍을 가진 객체다)

### -fallback

이 키가 넥스트 JS에게 paths 배열이 모든 지원되는 매개변수를 저장할지 아니면 일부만 저장할지 말해준다.

`false` : paths에게 모든 지원되는 미트 업 ID 밸류를 포함하라고 하는 것

사용자가 지원되지 않는 것을 입력하면 404 error 이 뜬다.

`true` : 들어오는 요청에 관해서, 서버에서 미트 업 ID로 페이지를 동적으로 만든다.

### 2. **서버 사이드 렌더링**

동적 → 요청이 있을때만 데이터 업데이트

### -getServerSideProps

```jsx
export const getServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMY_MEETUPS,
    },
  };
};
```

getStaticProps와의 차이점: 이 함수는 빌드 프로세스 중에는 실행되지 않는다

요청이 들어올 때마다 실행되기 때문에 시간을 지정해서 revalidate 할 필요가 없다.

매개변수가 필요하다.

→ context 매개변수에서 요청 객체에 접근할 수 있고, 응답 객체가 돌아온다.

응답객체는 prop 키로 객체를 리턴한다. 이 키가 페이지 컴포넌트 함수 prop을 저장하고 있다.

매초 여러 번 바뀌는 데이터를 가지고 있다면 `getServerSideProps`이 좋은 선택

## API 라우트

- html 코드를 리턴하지 않고 HTTP 요청을 받는다.
  그리고 fetch를 Post 하고 요청을 삭제한다.
- `pages` 폴더 내에 `api` (폴더명이 반드시 api 여야함) 폴더 생성
  파일 이름은 URL에서 경로 세그먼트가 될 것 .
  ex. new-meetup.js → /api/new-meetup
- 리액트 컴포넌트를 정의하고, 렌더링하거나 리턴하지 않는다.
  대신에 서버 사이드 코드를 포함하는 함수를 정의 할 것
- API 라우트는 서버에서만 돌아간다. 클라이언트에게 노출되지 않기 때문에 인증서를 사용할 수 있다.

```jsx
//api/new-meetup

function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;

    const { title, image, address, description } = data;
  }
}

export default handler;
```

req 요청 객체는 들어오는 요청에 관한 데이터 포함

res 응답 객체는 응답을 보낼 때 필요 - 헤더나 요청 바디를 받을 수 있다

req.method 를 입력해서 어떤 요청이 보내졌는지 알게 한다.

위 코드에서는 데이터 요청이 POST 요청일 때만 코드를 트리커 하고 req.body에 접속해서 데이터를 받는다.
