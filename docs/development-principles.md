# 코딩 가이드

- [코딩 잘하는 팁 세가지 ](https://www.youtube.com/watch?v=jafa3cqoAVM)
- [실무에서 바로 쓰는 Frontend Clean Code](https://youtu.be/edWbHp_k_9Y?t=219)
- [깨끗한 코드를 위한 5가지 팁](https://www.youtube.com/watch?v=Jz8Sx1XYb04&t=1s)
- [[CLASS101]프론트엔드 문서\_코드리뷰편](https://jobs.class101.net/dev/event/secret_codereview)
- [FluentUI/Coding style](https://github.com/microsoft/fluentui/wiki/Coding-Style)
- [FluentUI/React guidelines](https://github.com/microsoft/fluentui/wiki/React-Guidelines)
- [FluentUI/TypeScript guidelines](https://github.com/microsoft/fluentui/wiki/TypeScript-Guidelines)
- [TypeScript guidelines](https://github.com/Microsoft/TypeScript/wiki/Coding-guidelines)
- [Pillarstudio/Reactjs Guidelines](https://github.com/pillarstudio/standards/blob/master/reactjs-guidelines.md)
- [Airbnb/Javascript](https://github.com/airbnb/javascript)
- [Goolge/JS Guide](https://google.github.io/styleguide/jsguide.html)

# Frontend Dev 팀 개발 원칙

> 논리가 간단해야 버그가 숨어들지 못한다. 의존성을 최대한 줄여야 유지보수가 쉬워진다. By Bjarne Stroustrup

- 외부 라이브러리 의존성은 최소한으로 가져가며 내부 모듈간의 의존성도 최소화
- 외부 라이브러리 사용시 버전을 올릴 경우 어플케이션 전체 테스트가 필요한지 확인
- 최대한 React, Next 에서 제공하는 기본 기능으로 개발
- ex) styled-component 대신 next [styled-jsx](https://github.com/vercel/styled-jsx) 사용
- 팀 내부 논의없이 어떠한 dependency 추가/삭제/버전 수정 금지
- 팀 내부 논의없이 어떠한 공통 코드도(src/.env*, src/constants/*, src/hooks/_, src/types/_) 추가/수정/삭제 금지

## 공통 UI 컴포넌트 개발 원칙

- 공통 UI 컴포넌트란 src/component/ 폴더에서 개발되며 페이지에서 공통으로 사용되는 UI 컴포넌트를 의미합니다.
- 공통 UI 컴포넌트 개발은 내부 협의 후 일정을 잡고 개발하며 개인의 판단에 의해 개발되지 않습니다.
- UI 컴포넌트는 props 를 전달 받아 사용해야 합니다.
- 디자인 시스템에 등록되어 문서화를 합니다.

## 페이지 개발 원칙

- `src/templates`, `src/pages` 폴더에서 1개의 URL에 매칭이 되는 화면을 개발합니다.
- 페이지는 api, components, containers, hooks, types 폴더만 존재하며 다른 폴더를 임의로 생성하지 않습니다.
- 2개 이상의 페이지에서 동일하게 쓰이는 components, hooks 가 있더라도 페이지 폴더를 분리해서 복사를 한 후 사용합니다.
  - 내부에서 url 혹은 props로 분기를 하지 않습니다.
- 페이지에서 사용되는 코드는 타입정의를 최소한으로만 합니다.
- 페이지에서 사용되는 API 들의 인터페이스 정의를 하지 않습니다.
- 페이지 안에서는 공통으로 상태관리가 필요한 것만 src/templates/${PAGE_NAME}/containers 안에서 Context API 를 통해 상태 관리를 합니다.
- 컴포넌트에서 props drilling을 하지 않습니다.
