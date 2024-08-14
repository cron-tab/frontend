## Commit Message 작성

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) 을 확장하여 사용합니다.
- 1개의 커밋 메시지는 1개의 작업 내용만 포함합니다.
- 커밋 메시지 만으로 어떤 작업이인지 알 수 있게 상세히 작성합니다.
  - x 버그 수정
  - o 뒤로가기 후 앞으로 가기 했을때 스크롤 포지션이 달라지는 버그 수정

```
[project/branch] <type>[optional scope]: <description>
```

### 예시

```
[cdn/DHFE-754] bump: cdn@0.6.0

[cdn/DHFE-754] fix: 리프레시 동작에서 약관 체크박스 체크가 풀리는 버그 수정

[cdn/DHFE-754] edit: 약관 변경사항 수정

[cdn/DHFE-754] add: 골드회원 4월 페이지 생성

[cdn/DHFE-754] new: 골드회원 4월 프로모션 페이지
- add: 골드회원 4월 template

[cdn/DHFE-754] bump: cdn@0.5.6

[cdn/DHFE-754] feature: 카카오 공유하기 버튼 추가
- add: kakaoShare component

[cdn/DHFE-754] improve: 골드회원 4월 카카오공유하기 기능 추가
- build(deps): kakao 1.2.1 sdk 추가
- build(deps): Bump React version to "17.0.2"

[cdn/DHFE-754] bump: cdn@0.5.5

[cdn/DHFE-754] bug: 골드회원 4월
- fix: 앞으로 가기 뒤로가기 했을때 스크롤 포지션이 유지가 되지 않는 버그 수정

```

## type

### start type

커밋의 시작은 아래 타입으로만 시작해야 하며 해당 커밋의 목적을 파악하는 용도로 사용합니다.

- **new**: 티켓 제목
  - JIRA 이슈유형의 새기능
- **improve**: 티켓 제목
  - JIRA 이슈유형의 개선
- **bug**: 티켓 제목
  - JIRA 이슈유형의 버그
- **task**: 티켓 제목
  - JIRA 이슈유형의 작업

### middle type

**볼드** 타입은 주요 코드리뷰 대상

- **refactor**: 리팩토링 내용
- **feat**: 새로운 기능 추가
- **fix**: 버그 수정
- style: style 수정
- test: test 코드 작성
- perf: performance 개선
- chore: updating grunt tasks etc; no production code change
- add: 단순 파일 추가
- edit: 단순 파일 수정
- del: 파일 삭제
- docs: 문서 추가 내용
- build: build 관련 수정사항
- deps: dependency 관련 수정사항
- docs: 문서 수정사항
- ci: ci 관련 수정사항

### end type

- **bump**: 배포 버전
  - bump: cdn@0.2.10
  - bump: intranet@0.3.2
  - bump: mobile-web@3.0.1
