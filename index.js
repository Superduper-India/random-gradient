const btn = document.querySelector("button");

const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
];


function changeColor() {
    const randomColor1 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    if (randomColor1 === randomColor2) {
        return changeColor(); //선택된 두 가지 색상이 겹치는 것을 방지하기 위한 코드 --> 함수 내부에 자기 자신을 호출하는 함수: 재귀 함수
    }
    //document.body.style.backgroundImage = "linear-gradient(90deg, " + randomColor1 + ", " + randomColor2 + ")";//내가 작성한 코드
    document.body.style.background = `linear-gradient(to left, ${randomColor1}, ${randomColor2}`; //템플릿 리터럴 표기법 with 백스트링(`) 활용
}

btn.addEventListener("click", changeColor);

