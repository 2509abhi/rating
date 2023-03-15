var num = 0;
for (let index = 0; index < 5; index++) {
    document.querySelectorAll(".o")[index].addEventListener("click", function(){
        num = document.querySelectorAll(".o")[index].innerText;
        document.querySelectorAll(".o")[index].classList.add("o1");
        console.log(num);
    });
}
document.querySelector("#sub").addEventListener("click", function(){
    document.querySelector("#body").style.display = "none";
    document.querySelector("#thank").style.display = "block";
    document.querySelector(".rate").innerText = "You selected "+num+" out of 5";
});

