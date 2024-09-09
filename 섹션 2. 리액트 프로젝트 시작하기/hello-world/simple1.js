function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    // UI 를 보여주는 가장 작은 단위 == 리액트 요소
    "button",
    { onClick: () => setLiked(!liked) }, // 속성값
    text // chileren
  );
}

// 1. 렌더링을 위한 작업 (단일)
const domContainer = document.getElementById("root");
ReactDOM.render(React.createElement(LikeButton), domContainer); // 컴포넌트를 랜더링 할 때에도 createElement 를 통해 리액트 요소로 만들어 줌

// 2. 렌더링을 위한 작업 * 3
const domContainer1 = document.getElementById("root1");
ReactDOM.render(React.createElement(LikeButton), domContainer1); // 컴포넌트를 랜더링 할 때에도 createElement 를 통해 리액트 요소로 만들어 줌
const domContainer2 = document.getElementById("root2");
ReactDOM.render(React.createElement(LikeButton), domContainer2); // 컴포넌트를 랜더링 할 때에도 createElement 를 통해 리액트 요소로 만들어 줌
const domContainer3 = document.getElementById("root3");
ReactDOM.render(React.createElement(LikeButton), domContainer3); // 컴포넌트를 랜더링 할 때에도 createElement 를 통해 리액트 요소로 만들어 줌

// 3. 렌터링을 위한 작업 (3개를 하나의 리액트 돔에서 해결)
const domContainer4 = document.getElementById("root4");
ReactDOM.render(
  React.createElement(
    "div",
    null,
    React.createElement(LikeButton),
    React.createElement(LikeButton),
    React.createElement(LikeButton)
  ),
  domContainer4
); // 컴포넌트를 랜더링 할 때에도 createElement 를 통해 리액트 요소로 만들어 줌
