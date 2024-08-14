# E2E Testing

- 데일리FE팀에서는 [Cypress](https://docs.cypress.io/api/table-of-contents)로 e2e 테스팅을 진행합니다.

## CI

- Jenkins JOB 으로 테스트를 진행합니다.
- [alpha](https://jenkins.yanolja.in/view/DailyHotel/job/dh-fe-mobile-web-react-ts-alpha-publish)
  - 개발 브랜치에서 Push가 되면 Jenkins에서 localhost:3000 서버를 실행시킨 후 테스트를 진행합니다.
- [dev](https://jenkins.yanolja.in/view/DailyHotel/job/dh-fe-web-testing-dev)
  - 15분 마다 1번씩 https://www.dev.dailyhotel.in 도메인을 대상으로 테스트를 진행합니다.
- [prod](https://jenkins.yanolja.in/view/DailyHotel/job/dh-fe-web-testing-prod)
  - 6시간 마다 1번씩 https://www.dailyhotel.com 도메인을 대상으로 테스트를 진행합니다.
  - 테스트 결과는 [cypress cloud](https://cloud.cypress.io/projects/b7h8eb/runs) 저장됩니다.

## 테스트 작성 방법

- js 파일 형식으로만 작성합니다.
- 개발, 상용에서 모두 동작하는 테스트 코드를 작성합니다.
  - 특정 업장 idx를 활용하는 경우는 지양합니다.
- 테스트 파일은 `templetes/<PageName>/cypress/xxx.cy.js` 형태로 작성합니다.

### selector

- [cypress selector](https://docs.cypress.io/api/cypress-api/selector-playground-api)는 `data-test` 로 작성합니다.
- `<PageName>__<ComponentName>` 형태로 작성합니다.

```js
<Button onClick={onClick} data-test={`Payment__ConfirmModal__ConfirmButton`}>
  동의하고 결제 진행
</Button>
```

### 테스트 파일은 describe, it syntax 형태로 작성합니다.

```js
describe(`PLP`, () => {
  it(`PLP 리스트 선택`, () => {
    cy.get(".fix-fixed > :nth-child(2)").click();
    cy.get(".select-date > button").click();
  });
});
```

### Queries

- [as](https://docs.cypress.io/api/commands/as)

### Actions

- [scrollTo](https://docs.cypress.io/api/commands/scrollTo#__docusaurus_skipToContent_fallback)

```js
cy.scrollTo("bottom", { duration: 3000 });
```

- [type](https://docs.cypress.io/api/commands/type)

```js
cy.get('[data-test="LoginEmail__EmailInput"]').type("daily-fe@naver.com");
cy.get('[data-test="LoginEmail__PasswordInput"]').type("DailyFe0981!");
cy.get('[data-test="LoginEmail__LoginButton"]').click();
```

### Assertions

- [should](https://docs.cypress.io/api/commands/should)

```js
cy.url().should("include", "stays");
cy.getCookie("lpinfo").should("exist");
```

### Other Commands

- [intercept](https://docs.cypress.io/api/commands/intercept)
- alias 는 `api_<APIName>` 형태로 작성합니다.

```js
cy.intercept("/newdelhi/goodnight/api/v10/stay/plp/list**").as("api_plp");
```

- [wait](https://docs.cypress.io/api/commands/wait)

```js
cy.wait("@api_plp");
```
