- 함수마다 50줄이 넘으면 콘솔에 warning이 생기며 향후 수정건이 생길때 리팩토링 하는것으로 하겠습니다.
- 프로젝트마다 특정 폴더는 함수당 50줄이 넘으면 빌드 에러가 나기 때문에 함수 줄 수를 강제로 맞춰야 합니다.
    - intranet/src/templates2
- 빌드 에러 확인은 `yarn lint` 및 개발 중간 푸시를 하시고 젠킨스 빌드 결과를 확인하시면 됩니다.
- SRP 를 지켰는데도 50줄이 넘으면 코드리뷰 진행하고 리팩토링을 논의하도록 하겠습니다.

## References

- https://eslint.org/docs/latest/rules/
- https://eslint.org/docs/latest/rules/max-lines
- https://eslint.org/docs/latest/rules/max-params
- https://eslint.org/docs/latest/rules/max-lines-per-function
- https://eslint.org/docs/latest/rules/max-depth
- https://eslint.org/docs/latest/rules/no-else-return
- https://eslint.org/docs/latest/rules/curly
- https://eslint.org/docs/latest/rules/arrow-body-style
- https://eslint.org/docs/latest/rules/array-callback-return
