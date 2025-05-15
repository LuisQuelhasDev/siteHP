document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll("[data-tab-button]");
    
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(button){
            const abaAlvo = button.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`);
            escondeAbas();
            aba.classList.add("navbar__content--active");
            removeButton();
            button.target.classList.add("navbar__options__item--active");
        })
    }
})

function removeButton(){
    const buttons = document.querySelectorAll("[data-tab-button]");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove("navbar__options__item--active")
    }
}

function escondeAbas(){
    const tabsContainer = document.querySelectorAll("[data-tab-id]");
    
    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove("navbar__content--active");
    }
}