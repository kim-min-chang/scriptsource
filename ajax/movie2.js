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

      movies.forEach((movie) => {
        //   console.log("순위 : ", movie.rank);
        //   console.log("증감 : ", movie.rankInten);
        //   console.log("영화명 : ", movie.movieNm);
        str += "<p>${movie.rank}위(";
        let rankInten = parseInt(movie.rankInten);
        if (rankInten > 0) {
          str += "▲)";
        } else if (rankInten < 0) {
          str += "▼)";
        } else {
          str += ")";
        }
        str += "</p>";

        str += "<p>${movei.rank}위() : ${movie.movieNm}</p>";
      });
      document.querySelector(".border-success").innerHTML = str;
    });
  // .catch((error) => console.log(error));
};
document.querySelector(".btn-secondary").addEventListener("click", getMovie);
