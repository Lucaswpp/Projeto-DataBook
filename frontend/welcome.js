const btn_menu = document.querySelector(".btn-menu");
const conteiner_head = document.querySelector(".conteiner-head");



btn_menu.addEventListener("click", () => {

     
        conteiner_head.classList.toggle("active");
        
        let decison_path_img = conteiner_head.classList.contains("active") ? "./close-menu.png" : "./menu-icone.png"

        btn_menu.querySelector(".assset-menu").src = decison_path_img;    
    })
