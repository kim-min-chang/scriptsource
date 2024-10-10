const txtYear = document.querySelector("#txtYear");
const selMon = document.querySelector("#selMon");
const selDay = document.querySelector("#selDay");
// 오늘 날짜 구한 뒤 구한 날짜를 화면에 보여주기
init = () => {
  const now = new Date();
  const year = now.getFullYear();
  let month = now.getMonth();
  let day = now.getDate();
  txtYear.value = year;
  //selMon.value= month;

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  selMon.value = month;
  selDay.value = day;
};

init();

getMovie = () => {
  // 년, 월, 일 가져오기
  const year = txtYear.value;
  const month = selMon.value;
  const day = selDay.value;

  const date = year + month + day;
  // url
  let url =
    "https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";

  // url+년월일
  url += date;

  //   console.log(url);
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new error("주소확인");
      return response.json();
    })
    .then((date) => {
      //화면출력
      console.log(date.boxOfficeResult.dailyBoxOfficeList);
      const movies = date.boxOfficeResult.dailyBoxOfficeList;

      let str = "";
      movies.forEach((movie) => {
        // 순위 : rank
        // 증감 : rankInten
        // 영화명 : movieNm
        // 개봉일 : openDt
        // 당일관객수 : audiCnt
        // 누적관객수 : audiAcc
        str += "<tr><td>" + movei.rank + "</td>";
        str += "<td>";
        let rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          str += "(▲";
        } else if (rankInten < 0) {
          str += "(▼";
        } else {
          str += "(";
        }
        str += +")</td>";
        str += "<td>" + movie.movieNm + "</td>";
        str += "<td>" + movie.openDt + "</td>";
        str += "<td>" + movie.audiCnt + "</td>";
        str += "<td>" + movie.audiAcc + "</td>";
        str += "<tr>";
      });
      document.querySelector(".table tbody").innerHTML = str;
      // invisible 클래스명 제거
      document
        .querySelector(".container . row:nth-child(3)")
        .classList.remove("invisible");
    });
  // .catch((error) => console.log(error));
};
document.querySelector(".btn-secondary").addEventListener("click", getMovie);
