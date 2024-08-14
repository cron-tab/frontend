# React Guidelines

## Basic Rules

- 파일 하나당 하나의 React 컴포넌트만 포함합니다.

## Naming

- 파일 이름과 컴포넌트 이름은 동일해야 합니다.
- 파일 이름과 컴포넌트 이름은 PascalCase를 사용합니다.

```tsx
// Good
// Filename: UserInfo.tsx
// Filename: UserInfo/index.tsx

export function UserInfo() {
  return (
    <>
      <Id />
      <UserName />
      <Email />
    </>
  );
}
```

```tsx
// Bad
// Filename: UserInfo.tsx

export function UserInfo() {
  return (
    <>
      <Id />
      <UserName />
      <Email />
    </>
  );
}

function Id() {
  return <div>id</div>;
}

function UserName() {
  return <div>UserName</div>;
}
```

## [SRP(Single-responsibility principle)](https://en.wikipedia.org/wiki/Single-responsibility_principle)

- 컴포넌트 작성시 SRP를 지킬 수 있도록 코드 작성 후 리팩토링을 진행해야 합니다.

```tsx
// Bad
export function UserInfo() {
  const { apiResponse } = useSharedContext();
  const currentUser = apiResponse?.currentUser;

  const id = currentUser?.id;
  const username = currentUser?.username;
  const email = currentUser?.email;

  const onClickLogin = () => {
    login(username);
  };

  const onClickSingUp = () => {
    signUp(email);
  };

  return (
    <>
      <Id />
      <UserName />
      <Email />
      <div>id: {id}</div>
      <div>username: {username}</div>
      <div>email: {email}</div>
      <button onClick={onClickLogin}>로그인</button>
      <button onClick={onClickSignUp}>회원가입</button>
    </>
  );
}
```

```tsx
// Good
// Filename: UserInfo.tsx
export function UserInfo() {
  return (
    <>
      <Id />
      <UserName />
      <Email />
      <LoginButton />
      <SignUpButton />
    </>
  );
}

// Filename: LoginButton.tsx
export function LoginButton() {
  const { apiResponse } = useSharedContext();
  const currentUser = apiResponse?.currentUser;

  const username = currentUser?.username;

  const onClickLogin = () => {
    login(username);
  };

  return <button onClick={onClickLogin}>로그인</button>;
}

// Filename: SignUpButton.tsx
export function SignUpButton() {
  const { apiResponse } = useSharedContext();
  const currentUser = apiResponse?.currentUser;

  const email = currentUser?.email;

  const onClickSingUp = () => {
    signUp(email);
  };

  return <button onClick={onClickSingUp}>로그인</button>;
}
```

References

- https://en.wikipedia.org/wiki/Single-responsibility_principle
-
