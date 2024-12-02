const btn_login = document.querySelector(".style-btn");
const singup = document.querySelector(".left-box-conteiner");
const obj_conteiner_content = document.querySelector(".conteiner-content");
let states_page = ["login", "singup"];
let is_login = false;
let now_state = states_page[0];

const dic_list_login = {
    "login": {
        ".left-title-box": "ACESSAR CONTA",
        ".left-subtitle-box": "Você não tem conta ?",
        ".style-btn": "Crie sua conta"
    },
    "singup": {
        ".left-title-box": "CRIE SUA CONTA",
        ".left-subtitle-box": "Você já é cadastrado ?",
        ".style-btn": "Fazer Login"
    }
};

btn_login.addEventListener("click", () => {
    singup.classList.toggle("active-singup");
    obj_conteiner_content.classList.toggle("active-singup");
    btn_login.classList.toggle("active-singup")
    is_login = !is_login;
    now_state = states_page[+is_login];

    toggleText(now_state);
});

function toggleText(now_state)
{
    Object.keys(dic_list_login[now_state]).forEach((i =>
    {
        document.querySelector(i).textContent = dic_list_login[now_state][i]
    }
    ))
}