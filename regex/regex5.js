// form 이 submit 되면
// submit 중지
// id / password /email 유효성 검증 후 형시게 맞지 않는다면 메세지 추가

//form
// button type 확인 : submit(form submit),button(click)

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const id = document.querySelector("#inputId");
  const email = document.querySelector("#staticEmail");
  const password = document.querySelector("#inputPassword");
  const name = document.querySelector("#inputName");

  const regId = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#])[0-9a-zA-Z!@#]{6,12}$/;
  const regPwd = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#*_])[0-9a-zA-Z!@#*_]{8,12}$/;
  const emailreg =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regName = /^[가-흫]{2,7}$/;
  //   console.log(id.closest("div"));
  if (!regName.test(name.value)) {
    name.closest("div").lastElementChild.innerHTML = "이름을 확인해주세요";
  } else {
    name.closest("div").lastElementChild.innerHTML = "";
  }
  if (!regId.test(id.value)) {
    id.closest("div").lastElementChild.innerHTML = "아이디를 확인해주세요";
  } else {
    id.closest("div").lastElementChild.innerHTML = "";
  }
  if (!regPwd.test(password.value)) {
    password.closest("div").lastElementChild.innerHTML =
      "비밀번호를 확인해주세요";
  } else {
    password.closest("div").lastElementChild.innerHTML = "";
  }
  if (!emailreg.test(email.value)) {
    email.closest("div").lastElementChild.innerHTML = "이메일을 확인해주세요";
  } else {
    email.closest("div").lastElementChild.innerHTML = "";
  }

  //  e.target.submit();
});
