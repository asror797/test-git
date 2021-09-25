const menuButtonElement = document.querySelector(".menu_button");
const settingsElement = document.querySelector(".settings");

menuButtonElement.addEventListener("click", event => {
    event.preventDefault();
    settingsElement.classList.toggle("d-none");
})


const headerButtonsOneElement = document.querySelector(".header_buttons_one");

headerButtonsOneElement.addEventListener("click", event => {
    event.preventDefault();
    const usersInfoElement = document.querySelector("#users_info");
    const qidiruvElement = document.querySelector(".qidiruv");
    usersInfoElement.classList.add("users_info_width");
    qidiruvElement.classList.remove("d-none");

    const closeButtonElement = document.querySelector(".close_btn");

    closeButtonElement.addEventListener("click", event => {
        event.preventDefault();
        usersInfoElement.classList.remove("users_info_width");
        qidiruvElement.classList.add("d-none");
    })

})

const formInputElelment = document.querySelector(".form__input");
const searchFormElement = document.querySelector(".search_form");
const searchElement = document.querySelector(".search");

formInputElelment.addEventListener("focus", event => {
    event.preventDefault();
    searchFormElement.classList.add("search_border");
    searchElement.classList.add("search_grayscale");

    formInputElelment.addEventListener("focusout", event => {
        event.preventDefault();
        searchFormElement.classList.remove("search_border");
        searchElement.classList.remove("search_grayscale");
    });
})



const wordSearchInputElement = document.querySelector(".qidiruv_form_input");
const wordSearchFormElement = document.querySelector(".qidiruv_form");
const wordSearchLoupeElement = document.querySelector(".word_search_loupe");

wordSearchInputElement.addEventListener("focus", event => {
    event.preventDefault();
    wordSearchFormElement.classList.add("qidiruv_form_border");
    wordSearchLoupeElement.classList.add("qidiruv_loupe_grayscale");
})

wordSearchInputElement.addEventListener("focusout", event => {
    event.preventDefault();
    wordSearchFormElement.classList.remove("qidiruv_form_border");
    wordSearchLoupeElement.classList.remove("qidiruv_loupe_grayscale");
});

const headerButtonsTwoElement = document.querySelector(".header_buttons_two");
const muteSelectDeleteELement = document.querySelector(".mute_select_delete");

headerButtonsTwoElement.addEventListener("click", event => {
    event.preventDefault();
    muteSelectDeleteELement.classList.toggle("d-none")
});


