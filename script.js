const messages = [
    "Are you sure po?",
    "Really sure??",
    "totoo nayan??",
    "Hindi na mag babago isip mo?",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "wala na sad nako",
    "ayaw mo talaga?",
    "Grabe Naman?!",
    "Ok fine, i won't bother you na",
    "eme lang, say yes please! ❤️"
];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}