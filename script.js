const name = document.querySelector(".name span");
const intro = document.querySelector(".intro");
const nameText = "MY NAME IS VU MY"
callback();
function textTypingEffect(intro, e, text, i = 0) {
    if (i == 0) {
        e.textContent = "";
        intro.textContent = "";
    }
    if (i >= 0 && i <= 7) intro.textContent += text[i];
    else e.textContent += text[i];
    if (i == text.length - 1) return;
    setTimeout(() => textTypingEffect(intro, e, text, i + 1), 200);
}
function callback() {
    textTypingEffect(intro, name, nameText);

}
setInterval(callback, 9000);