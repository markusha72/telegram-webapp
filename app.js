let tg = window.Telegram.WebApp; 
tg.expand(); // делаем экран приложения большим

// выводим имя пользователя
let userInfo = document.getElementById("user");
if (tg.initDataUnsafe?.user) {
    userInfo.innerHTML = "Вы: " + tg.initDataUnsafe.user.first_name;
} else {
    userInfo.innerHTML = "Вы: Гость";
}

// кнопка
let sendBtn = document.getElementById("sendBtn");
sendBtn.addEventListener("click", () => {
    alert("Спасибо, данные отправлены!");
    // если нужен возврат в бота:
    // tg.sendData("Привет, я из WebApp!");
});