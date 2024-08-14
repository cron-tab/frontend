# 함수 by Clean Code 3장 함수 

### 작게 만들어라
- 함수를 만드는 첫째 규칙은 ‘작게'다. 함수를 만다는 둘째 규칙은 ‘더 작게'다.
- if / else / while 문 등에 들어가는 블록은 한 줄이어야 한다. 중첩 구조가 생길만큼 함수가 커져서는 안 된다는 뜻이다.
- 함수에서 들여쓰기 수준은 1단이나 2단을 넘어서면 안된다. 그래야 함수는 읽고 이해하기 쉬워진다.


### 한 가지만 해라!
- 함수는 한 가지를 해야한다. 그 한 가지를 잘 해야 한다. 그 한 가지만을 해야 한다.
- 함수가 ‘한 가지' 만 하는지 판단하는 방법은 의미 있는 이름으로 다른 함수를 추출할 수 있다면 그 한수는 여러 작업을 하는 셈이다.

### 함수 당 추사항화 수준은 하나로
- 한 함수 내에 추상화 수준을 섞으면 코드를 읽는 사람이 헷갈린다. 추상화 수준을 섞으면 깨어진 창문처럼 사람들이 함수에 세부사항을 점점 더 추가한다.


## 플래그 인수 사용 금지

> 플래그 인수 by Clean Code 3장 함수
>
> - 함수에서 이상적인 인수 개수는 0개다. 다음이 1개고, 다음이 2개다.
> - 플래그 인수는 추하다. 함수로 부울 값을 넘기는 관례는 정말로 끔찍하다. 함수가 한꺼번에 여러가지를 처리한다고 대놓고 공표하는 셈이니까!
> - render(true) 라는 코드는 헷갈리기 십상이다. renderForSuite(), renderForSingleTest() 라는 함수로 나눠야 마땅하다.

> [FlagArgument](https://martinfowler.com/bliki/FlagArgument.html) by martinfowler
>
> My reasoning here is that the separate methods communicate more clearly what my intention is when I make the call. Instead of having to remember the meaning of the flag variable when I see book(martin, false) I can easily read regularBook(martin).

```javascript
// Bad
class Concert...
  public Booking book (Customer aCustomer, boolean isPremium) {...}

// Good
class Concert...
  public Booking regularBook(Customer aCustomer) {...}
  public Booking premiumBook(Customer aCustomer) {...}
```

```javascript
// Bad
public Booking book (Customer aCustomer, boolean isPremium) {
    lorem().ipsum();
    dolor();
    if(isPremium)
    sitAmet();
    consectetur();
    if(isPremium)
    adipiscing().elit();
    else {
    aenean();
    vitaeTortor().mauris();
    }
    eu.adipiscing();


// Good
class Order...
    public Booking regularBook(Customer aCustomer) {
      return hiddenBookImpl(aCustomer, false);
    }
    public Booking premiumBook(Customer aCustomer) {
      return hiddenBookImpl(aCustomer, true);
    }
    private Booking hiddenBookImpl(Customer aCustomer,  boolean isPremium) {...}
```

# colocation

## 변수

- 함수 스코프에서 사용되는 모든 변수는 함수 시작과 동시에 선언되어야 함
- 되도록이면 사용되는 순서와 동일한 순서로 선언
- jsx 에서의 js문법은 변수로 추출
- Refactor → Introduce Variable 기능 사용
- 불명확한 변수명 작성 금지 예) values -> changedUserValues

회의록 작성시 제목, 일시, 비고 란과 같은 글을 작성하기 위한 머릿말 양식으로 생각해보면 어떨까

```tsx
//Bad

{
  // 불명확한 변수명 수정
  week?.map((v, k) => {
    if (!v.date) {
      return <td key={`td-${k}`} className={`empty`}></td>;
    }

    // 변수 선언 위치를 최상단으로 이동
    const rateplans = v.rateplans;

    return (
      <td key={`td-${k}`}>
        <div className={`day`} key={`day-${k}`}>
          // jsx 안에 js 구문 변수로 치환
          {moment(v.date).format("DD")}
        </div>

        <Rateplans rateplans={rateplans} />
      </td>
    );
  });
}
```

```tsx
//Good
{
  week?.map((weekData, key) => {
    const date = weekData.date;
    const today = moment(date).format("DD");
    const rateplans = weekData.rateplans;

    if (!date) {
      return <td key={`td-${key}`} className={`empty`}></td>;
    }
    return (
      <td key={`td-${key}`}>
        <div className={`day`} key={`day-${key}`}>
          {today}
        </div>

        <Rateplans rateplans={rateplans} />
      </td>
    );
  });
}
```

## boolean

- boolean 변수 이름은 isXXX
- is로 시작하는 변수는 함수여서는 안된다.
- boolean 값이 반환되는 함수 이름은 getIsXXX

```ts
// bad
if (!account.isDisabled) {
  // ...
}

// good
if (account.isEnabled) {
  // ...
}
```
