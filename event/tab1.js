// tab-button 클릭시 짝 맞춰서 tab-content 보여주기

// 이벤트 대상 찾아오기
const li1 = document.querySelector(".list li:nth-Child(1)");
const li2 = document.querySelector(".list li:nth-Child(2)");
const li3 = document.querySelector(".list li:nth-Child(3)");

// show 클래스명을 부착할 요소 찾기
const tap1 = document.querySelector(".container div:nth-Child(2)");
const tap2 = document.querySelector(".container div:nth-Child(3)");
const tap3 = document.querySelector(".container div:nth-Child(4)");
// 이벤트 연결
li1.addEventListener("click", () => {
  //   tap1 에 show 클래스 명 부착
  tap1.classList.add("show");
  // 다른 tab => show 제거
  tap2.classList.remove("show");
  tap3.classList.remove("show");

  li1.classList.add("orange");
  li2.classList.remove("orange");
  li3.classList.remove("orange");
});
li2.addEventListener("click", () => {
  //   tap1 에 show 클래스 명 부착
  tap2.classList.add("show");
  // 다른 tab => show 제거
  tap1.classList.remove("show");
  tap3.classList.remove("show");

  li2.classList.add("orange");
  li1.classList.remove("orange");
  li3.classList.remove("orange");
});
li3.addEventListener("click", () => {
  //   tap1 에 show 클래스 명 부착
  tap3.classList.add("show");
  // 다른 tab => show 제거
  tap1.classList.remove("show");
  tap2.classList.remove("show");

  li3.classList.add("orange");
  li1.classList.remove("orange");
  li2.classList.remove("orange");
});
