/*Funções para as validações do nome, e e-mail */

const form = document.getElementById("form");
const userName = document.getElementById("username");
const email = document.getElementById("email");
const subject = document.getElementById("subject");

//Função de evento..
form.addEventListener("submit", () => {
  checkInputs();
});

/*Função para validar as entradas nos inputs */
function checkInputs() {
  const userNameValue = userName.value;
  const emailValue = email.value;
  const subjectValue = subject.value;

  if (userNameValue === "") {
    setErrorFor(userName);
  } else {
    setSuccessFor(userName);
  }

  if (emailValue === "") {
    setErrorFor(email);
  } else if (!checkEmail(emailValue)) {
    setErrorFor(email);
  } else {
    setSuccessFor(email);
  }

  if (subjectValue === "") {
    setErrorFor(subject);
  } else {
    setSuccessFor(subject);
  }
}

/*Função que irá setar os Erros*/
function setErrorFor(input) {
  const formControl = input.parentElement;

  //Adicionar a classe de erro
  formControl.className = "form-control error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;

  //Adicionando a classe de sucesso..
  formControl.className = "form-control success";
}

//Função para validar o e-mail..
function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
