## router.isReady

- https://stackoverflow.com/questions/61040790/userouter-withrouter-receive-undefined-on-query-in-first-render

```js
const router = useRouter();
useEffect(() => {
  if (!router.isReady) return;
  // codes using router.query
}, [router.isReady]);
```
