# 개발환경 설정

### [brew 설치](https://brew.sh/)

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### [NVM 설치](https://formulae.brew.sh/formula/nvm)

```shell
brew install nvm
```

- 각 프로젝트 마다 Node.JS 의존성이 다르므로 아래 방법으로 Node.JS 버전을 관리합니다.

### [zsh 에서 nvm 설정](https://github.com/nvm-sh/nvm#zsh)

- 터미널에서 디렉토리 변경을 할때 .nvmrc 파일의 노드버전을 자동으로 선택하게 합니다.
- ~/.zshrc 파일에 아래 내용을 추가합니다.

```shell
# ~/.zshrc
autoload -U add-zsh-hook

load-nvmrc() {
  local nvmrc_path
  nvmrc_path="$(nvm_find_nvmrc)"

  if [ -n "$nvmrc_path" ]; then
    local nvmrc_node_version
    nvmrc_node_version=$(nvm version "$(cat "${nvmrc_path}")")

    if [ "$nvmrc_node_version" = "N/A" ]; then
      nvm install
    elif [ "$nvmrc_node_version" != "$(nvm version)" ]; then
      nvm use
    fi
  elif [ -n "$(PWD=$OLDPWD nvm_find_nvmrc)" ] && [ "$(nvm version)" != "$(nvm version default)" ]; then
    echo "Reverting to nvm default version"
    nvm use default
  fi
}

add-zsh-hook chpwd load-nvmrc
load-nvmrc
```

## WebStrom

- [Toolbox App](https://www.jetbrains.com/ko-kr/toolbox-app/) 을 설치합니다.
- Toolbox 에서 WebStrom 을 설치합니다.

### [prettier 설정](https://blog.jetbrains.com/webstorm/2020/07/webstorm-2020-2/)

- 수시로 [Reformat your code](https://www.jetbrains.com/help/webstorm/reformat-and-rearrange-code.html#arrange_code) (⌥⌘L)
  실행한다.

<img width="1000" src="https://blog.jetbrains.com/wp-content/uploads/2020/06/webstorm-prettier-settings.png">

- [x] On code reformat
- [x] On Save

## 환경변수

- .env: 모든 환경에서 공통으로 사용되는 (API Key, URL) 환경변수 설정
- .env.development: `npm start` 로 실행시 필요한 환경변수 설정
- .env.development.local: `npm start` 로 실행시 필요한 환경변수 오버라이드 설정 (git 관리대상이 아님 커밋하지 마셈)
- .env.production: 빌드 후 상용 서버로 배포되는 환경변수 설정
- .env.production.alpha: 빌드 후 알파 서버로 배포되는 환경변수 설정
- .env.production.dev: 빌드 후 개발 서버로 배포되는 환경변수 설정

### 로컬개발 환경변수 적용

.env.development 파일을 .env.development.local 로 복사 후 사용

## 폴더 구조

- `코로케이션` 원칙을 기준으로 작성

> `React`는 파일을 어떤 식으로 폴더에 분류할 것인지에 대해서 제시하고 있지는 않습니다.
> 자주 함께 변경되는 파일들을 같이 보관하는 것이 좋은 방법입니다.
> 이러한 원칙을 “코로케이션(colocation)“이라고 부릅니다.
> 그래서 처음부터 “옳은” 방법 하나를 선택하는 것이 대단히 중요하지는 않습니다.

#### 참고

- [리엑트 공식 파일 구조](https://ko.reactjs.org/docs/faq-structure.html)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [React Folder Structure](https://www.robinwieruch.de/react-folder-structure)
