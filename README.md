# TodoList react 구현

### day 1 map함수 이용하여 array형식 state출력하기

```
const [todo, setTodo] = useState([
    { id: 1, title: "치킨먹기", status: "진행중" },
    { id: 2, title: "헬스장가기", status: "진행중" },
  ]);
```

```
<ul>
        {todo.map((v, i) => {
          return <li key={v.id}>{v.title}</li>;
        })}
      </ul>
```

todo 라는 array 형식의 state에 id,title,status 값을 보관하는 객체를 입력했습니다.
추후 입력값에 따라 동적으로 진행하기 위해 map 함수로 배열을 복사해 li 태그 값을 출력했습니다.
localstorage에 배열을 보관하고 배열값을 다시 출력하는 식으로 진행 할 예정입니다.
