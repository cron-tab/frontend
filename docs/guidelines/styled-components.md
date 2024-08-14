Naming

- `Styled<ComponentName>.tsx` 형태의 파일이름으로 작성합니다.

```js
export function 개발환경설정() {
  const sharedState = usePageState();

  return (
    <SharedContext.Provider value={sharedState}>
      <초기화버튼 />
      <저장버튼 />
    </SharedContext.Provider>
  );
}
```

```js
export function 초기화버튼() {
  const onClick = () => {
    Cookie.remove(SETTINGS_API_URL);
    alert("초기화 되었습니다.");
    window.location.reload();
  };
  return <Styled초기화버튼 onClick={onClick}>초기화</Styled초기화버튼>;
}
```

## References

- https://styled-components.com/
