# Mock 서버 설정

- [MWS](https://mswjs.io/)를 모든 프로젝트에 동일한 구조로 사용합니다.
- .js 파일로 작성하며 변수, 파일명을 한글로 작성가능합니다.

```

|- src
    |- mocks
    |   |- ...
    |   |- handlers.js
    |   |- ...
    | ...
    |- templates
    |   |- ...
    |   |- MockSample
    |   |   |- api
    |   |   |   |- getApiEvent
    |   |   |   |   |- index.js
    |   |   |   |   |- 성공.json
    |   |   |   |   |- 특정실패케이스1.json
    |   |   |   |   |- 특정실패케이스2.jsson
    |   |   |- ...
    |   |- ...
    | ...
```

## 1. api/index.js 파일 생성

- export 함수로 작성합니다.
  - 변수 작성 X
  - export default X
- api path(/api/events)를 camel case 함수명으로 작성합니다.

src/templates/MockSample/api/index.js

```js
import { rest } from "msw";
import { dailyApi } from "@/intranet/src/lib/api";
import 성공 from "./성공.json";

const API_URL = `/api/rp/localstay/property`;

export async function getApiLocalStayPropertyCalendar(hotelidx, params) {
  return await dailyApi.get(`${API_URL}/${hotelidx}/calendar`, {
    params,
  });
}

export const getApiLocalStayPropertyCalendarMock = () =>
  rest.get(`*${API_URL}/:hotelIdx/calendar`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(성공));
  });
```

참고
- https://mswjs.io/docs/api/request

```js
rest.post("/user/:userId/articles", (req, res, ctx) => {
  const { userId } = req.params;
  return res(ctx.text(userId));
});
```

## 2. response json 파일 생성

api doc 에 있는 sample response 값을 생성합니다.

```js
{
  msgCode: 100,
  msg: "Request success!",
  data: {
    viewType: "LINE_BANNER",
    data: {
      idx: 9928,
      title: "",
      description: "",
      defaultImageUrl:
        "https://img.dailyhotel.me/resources/images/home_event/220628_line_1656577330.jpg",
      lowResolutionImageUrl:
        "https://img.dailyhotel.me/resources/images/home_event/220628_line_1656577330.jpg",
      linkUrl:
        "https://cdn.dailyhotel.com/mkt/event/card_promotion/2207_total/index.html",
      urlTarget: "WEBVIEW",
      diModel: { groupType: "LINE_BANNER", groupIndex: "15219" },
    },
    viewComponentList: null,
  },
  diModel: {
    set1_sd: "2022-07-12T00:00:00",
    seg: "0",
    grp: "A",
    set1_name: "home layout test",
    set1_mv: "99.99.99",
    set1_ed: "2022-07-22T00:00:00",
  },
};
```

## 2. src/mocks/handlers.js 등록

```js
import { getApiEvents } from "../mocks/getApiEvents";

export const handlers = [getApiEvents()];
```
