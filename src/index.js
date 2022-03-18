console.clear()
console.log("Its connected")

$ = document

subBtn = document.getElementById("submit")
agreeCheckBok = document.getElementById("agree")

console.log(submit, agreeCheckBok)

agreeCheckBok.onclick = (() => {
    subBtn.disabled = !subBtn.disabled;
    alert("submit button is " + !subBtn.disabled);
});

btn = $.getElementById("btn");

console.log(btn)

btn.ondblclick = (() => {
    btn.innerHTML = "ONI CHAN";
})
