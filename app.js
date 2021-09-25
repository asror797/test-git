let n = 0;

let localStorageData = localStorage.getItem("data")

let data =(localStorageData) ? JSON.parse(localStorageData) : [
    {
        id: 1,
        name: "Muhammad Yunus",
        img: "./img/profil_img/muhammadyunus.jpg",
        username: "@muhammad_yunusoff",
        phone: "+998 99 987 65 43",
        bio: "19 y.o. Fullstack developer",
        chatMessage: [{
                sender: "Azamat",
                message: "Assalomu alaykum",
                messageSendedTime: "09:27"
            },
            {
                sender: "Muhammad Yunus",
                message: "Va alaykum assalom",
                messageSendedTime: "10:15"
            }
        ]
    },
    {
        id: 2,
        name: "Azamat",
        img: "./img/profil_img/Azamat.jpg",
        username: "@azamat_ortiqov",
        phone: "+998 94 1512312",
        bio: "Harakat qilish uchun eng yaxshi lahza bu - hozir 🔥🚀",
        chatMessage: [{
                sender: "Azamat",
                message: "Assalomu alaykum aka tuzumisiz ishlariz bo'lyapti",
                messageSendedTime: "10:20"
            },
            {
                sender: "Muhammad Yunus",
                message: "Va alaykum assalom ukam qalisan, yaxshi rahmat tuzikman sendachi ishlaring yaxshimi",
                messageSendedTime: "10:25"
            }
        ]
    },
    {
        id: 3,
        name: "Ilhomjon",
        img: "./img/profil_img/ilhomjon.jpg",
        username: "@ilhomjon_musayev",
        phone: "+998 88 3551260",
        bio: "20 y.o | Web developer in 🇺🇿 My blog: @ilhomjonmusayev",
        chatMessage: [{
                sender: "Azamat",
                message: "Ilhomjon nima gapla maza yaxshimi?",
                messageSendedTime: "11:53"
            },
            {
                sender: "Ilhomjon",
                message: "Tinchli dos yaxshi rahmat o'zizdachi",
                messageSendedTime: "11:55"
            }
        ]
    },
    {
        id: 4,
        name: "Jamshid",
        img: "./img/profil_img/jamshid.jpg",
        username: "@jamshidev",
        phone: "+998 94 1794202",
        bio: "@jamshid_pro | https://nometa.uz",
        chatMessage: [{
                sender: "Azamat",
                message: "Assalomu alaykum do'stim yaxshimisan",
                messageSendedTime: "12:27"
            },
            {
                sender: "Jamshid",
                message: "Va alaykum assalom yaxshi rahmat do'stim o'zingchi",
                messageSendedTime: "12:30"
            }
        ]
    },
    {
        id: 5,
        name: "Usmon",
        img: "./img/profil_img/Usmon.jpg",
        username: "@not_an_old_man",
        phone: "+998 99 1423471",
        bio: "Shaxsiy blog @ulatipov",
        chatMessage: [{
                sender: "Azamat",
                message: "Hayrli kun yaxshimisiz",
                messageSendedTime: "14:52"
            },
            {
                sender: "Usmon",
                message: "Hayrli kun yaxshi rahmat o'zizchi",
                messageSendedTime: "14:55"
            }
        ]
    },
    {
        id: 6,
        name: "Durbek",
        img: "./img/profil_img/Kai.jpg",
        username: "@ExtraOrdinaryoo",
        phone: "+998 94 1283767",
        bio: "NT",
        chatMessage: [{
                sender: "Azamat",
                message: "Assalomu alaykum",
                messageSendedTime: "14:25"
            },
            {
                sender: "Durbek",
                message: "Va alaykum assalom",
                messageSendedTime: "14:25"
            }
        ]
    },
    {
        id: 7,
        name: "Muhammad",
        img: "./img/profil_img/muhammad.jpg",
        username: "@mukhammad_0628",
        phone: "+998 99 567 85 91",
        bio: "19 y.o Frontend Developer @mukhammad_tech",
        chatMessage: [{
                sender: "Azamat",
                message: "What are you doing",
                messageSendedTime: "15:16"
            },
            {
                sender: "Muhammad",
                message: "I gaming conter sitrike. And you?",
                messageSendedTime: "15:27"
            }
        ]
    },
    {
        id: 8,
        name: "Rustam",
        img: "./img/profil_img/rustam.jpg",
        username: "@rustambek_0301",
        phone: "+998 88 562 98 75",
        bio: "Telefon nomeringiz, qaysi kurs va o'zingiz haqingizda qoldiring.",
        chatMessage: [{
                sender: "Azamat",
                message: "Hello",
                messageSendedTime: "16:05"
            },
            {
                sender: "Rustam",
                message: "Hello",
                messageSendedTime: "16:06"
            }
        ]
    },
    {
        id: 9,
        name: "Sohibjon",
        img: "./img/profil_img/sohibjon.jpg",
        username: "@uzbekboy02",
        phone: "+998 93 1730203",
        bio: "TSQ",
        chatMessage: [{
                sender: "Azamat",
                message: "Hayrli kun yaxshimisan dos",
                messageSendedTime: "17:18"
            },
            {
                sender: "Sohibjon",
                message: "Senga ham hayrli bo'lsin , rahmat yaxshi dos o'zingchi",
                messageSendedTime: "17:20"
            }
        ]
    },
    {
        id: 10,
        name: "Shaxzod",
        img: "./img/profil_img/shaxzod.jpg",
        username: "@Shahzod_Coder",
        phone: "+998 97 2924400",
        bio: "You don’t know who I am.",
        chatMessage: [{
                sender: "Azamat",
                message: "How are you",
                messageSendedTime: "18:27"
            },
            {
                sender: "Shaxzod",
                message: "I'm fine thank's",
                messageSendedTime: "18:30"
            }
        ]
    }
];
localStorage.setItem('data', JSON.stringify(data));


const peopleListElement = document.querySelector(".people__list");

userChatRender();

function userRender(name , img , message , messageSendedTime) {

    const peopleItemElement = document.createElement("li");
    const peopleImgElement = document.createElement("img");
    const peopleNameWrapper = document.createElement("div");
    const nameTickTimeWrapperElement = document.createElement("div");
    const peopleNameElement = document.createElement("h6");
    const tickImgElement = document.createElement("img");
    const timeElement = document.createElement("time");
    const peopleMessageElement = document.createElement("div");
    const peopleMessageTextElement = document.createElement("p");

    peopleItemElement.classList.add("people__item","d-flex","align-items-center","mb-1");
    peopleImgElement.classList.add("people__img");
    peopleNameWrapper.classList.add("people__name__wrapper","pt-0");
    nameTickTimeWrapperElement.classList.add("bjir");
    peopleNameElement.classList.add("people__name");
    tickImgElement.classList.add("tick");
    timeElement.classList.add("people__time");
    peopleMessageElement.classList.add("people_text","pt-1");

    peopleNameElement.textContent = name;
    peopleImgElement.src = img;
    timeElement.textContent = messageSendedTime;
    peopleMessageTextElement.textContent = message;
    tickImgElement.src = "./img/icons/tick.png";

    peopleItemElement.appendChild(peopleImgElement);
    peopleItemElement.appendChild(peopleNameWrapper);
    peopleNameWrapper.appendChild(nameTickTimeWrapperElement);
    peopleNameWrapper.appendChild(peopleMessageElement);
    nameTickTimeWrapperElement.appendChild(peopleNameElement);
    nameTickTimeWrapperElement.appendChild(tickImgElement);
    nameTickTimeWrapperElement.appendChild(timeElement);
    peopleMessageElement.appendChild(peopleMessageTextElement);

    return peopleItemElement;
}

function userChatRender() {
    for(let i=0; i<data.length; i++){
        peopleListElement.appendChild(userRender(data[i]["name"] , data[i]["img"] , data[i]["chatMessage"][1]["message"] , data[i]["chatMessage"][1]["messageSendedTime"]));
    }
}



const peopleItem = document.querySelectorAll(".people__item");

// user-info_header 
const peopleImg = document.querySelector(".peopleImg");
const peopleName = document.querySelector(".people_name");

//profil 
const usersInfoHeaderElement = document.querySelector(".users_info_header");
const usersInfoMainElement = document.querySelector(".users_info_main");
const usersInfoFooterElement = document.querySelector(".users_info_footer");

const peoplesProfilElement = document.querySelector(".peoples_profil");
const peopleProfilImgElement = document.querySelector(".peopleProfilImg");
const peopleProfilPictureNameElement = document.querySelector(".peopleProfilPictureName");
const peopleNumberElement = document.querySelector(".people_number");
const peopleBioElement = document.querySelector(".people_bio");
const peopleUsernameElement = document.querySelector(".people_username");
const nameDateImgWrapperElement = document.querySelector(".name_date_img_wrapper");

peopleItem.forEach( (element , index)=> {
    element.addEventListener("click" , event=>{
        event.preventDefault();
        n=index;
        peopleImg.src = data[n]["img"];
        peopleName.textContent = data[n]["name"];
        peopleProfilImgElement.src = data[n]["img"];
        peopleProfilPictureNameElement.textContent = data[n]["name"];
        peopleNumberElement.textContent = data[n]["phone"];
        peopleBioElement.textContent = data[n]["bio"];
        peopleUsernameElement.textContent = data[n]["username"];

        usersInfoHeaderElement.classList.remove("d-none");
        usersInfoMainElement.classList.remove("d-none");
        usersInfoFooterElement.classList.remove("d-none");

        nameDateImgWrapperElement.addEventListener("click" , event => {
            event.preventDefault();
            peoplesProfilElement.classList.remove("d-none");
            const peopleProfilIconsItemButtonElement = document.querySelector(".people_profil_icons_item_button3");
            peopleProfilIconsItemButtonElement.addEventListener("click" , event => {
                event.preventDefault();
                peoplesProfilElement.classList.add("d-none");
            })
        })

        renderChatMessages()
    }) 
})

const userInfoMainListElement = document.querySelector(".user_info_main_list");

let config = {
    background: 'black',
    name: 'Azamat'
    // myProfilePhoto: './assets/img/telegram.svg'
}

function messageRender(text , time , sender){

    if(sender == config.name){
    const userInfoMainItem = document.createElement("li");
    const userMessage = document.createElement("p");
    const messageTime = document.createElement("div");
    userInfoMainItem.appendChild(userMessage);
    userInfoMainItem.appendChild(messageTime);
    userInfoMainItem.classList.add("user_info_main_item");
    userMessage.classList.add("user_message" , "mb-0");
    messageTime.classList.add("message_time");
    userMessage.textContent = text;
    messageTime.textContent = time;
    return userInfoMainItem;
    }else {
    const peopleELement = document.createElement("li");
    const mbOElement = document.createElement("p");
    const divElement = document.createElement("div");
    peopleELement.appendChild(mbOElement);
    peopleELement.appendChild(divElement);
    peopleELement.classList.add("people");
    divElement.classList.add("divEl");
    mbOElement.classList.add("mb-0");
    mbOElement.textContent = text;
    divElement.textContent = time;
    return peopleELement;
    }
}

function renderChatMessages(){
    userInfoMainListElement.innerHTML = "";
    for (let message of data[n].chatMessage) {
        userInfoMainListElement.appendChild(messageRender(message.message , message.messageSendedTime , message.sender));
    }
}

const usersInfoFooterFormElement = document.querySelector(".users_info_footer_form");
const footerFormInputElement = document.querySelector(".footer_form_input");

usersInfoFooterFormElement.addEventListener("submit" , event => {
    event.preventDefault();

    let date = new Date;
    let hour = date.getHours();
    let minut = date.getMinutes();

    data[n]["chatMessage"].push({
        sender: "Azamat",
        message: footerFormInputElement.value,
        messageSendedTime: hour + ":" + minut
    })

    localStorage.setItem('data', JSON.stringify(data));

    if(footerFormInputElement.value.length > 0){
    const newUserInfoMainItem = document.createElement("li");
    const newUserMessage = document.createElement("p");
    const newMessageTime = document.createElement("div");
    newUserInfoMainItem.appendChild(newUserMessage);
    newUserInfoMainItem.appendChild(newMessageTime);
    newUserInfoMainItem.classList.add("user_info_main_item");
    newUserMessage.classList.add("user_message" , "mb-0");
    newMessageTime.classList.add("message_time");
    newMessageTime.textContent = hour + ":" + minut;
    newUserMessage.textContent = footerFormInputElement.value;

    userInfoMainListElement.appendChild(newUserInfoMainItem);
    }

    footerFormInputElement.value = "";
})

