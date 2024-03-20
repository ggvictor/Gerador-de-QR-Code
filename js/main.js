const container = document.querySelector(".container")
const qrcodeBtn = document.querySelector("#qr-form button")

const qrcodeInput = document.querySelector("#qr-form input")
const qrcodeImg = document.querySelector("#qr-code img")
// Eventos
function generateQrCode(){
    const qrcodeInputValue = qrcodeInput.value;
    if(!qrcodeInputValue) return;

    qrcodeBtn.innerHTML="gerando código...";

    qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrcodeInputValue}`;

    qrcodeImg.addEventListener("load",()=>{
        container.classList.add("active");
        qrcodeBtn.innerHTML="código criado";
    })
}

qrcodeBtn.addEventListener("click",()=>{
    generateQrCode()
})
qrcodeInput.addEventListener("keydown",(e)=>{
    if(e.code === "Enter"){
        generateQrCode()
    }
})
// limpar area do qr code
qrcodeInput.addEventListener("keyup",()=>{
    if(!qrcodeInput.value){
        container.classList.remove("active");
        qrcodeBtn.innerHTML="Gerar QR Code";
    }
})