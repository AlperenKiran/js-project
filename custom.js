const sendButton = document.querySelector("#send")
const clearButton = document.querySelector("#clear")
const container = document.querySelector(".container")


const colors = ["red","green","yellow","blue","tomoto","violet","grey"]

const message =[
    "Instagram Bildirim",
    "Twitter Bildirim",
    "Linkedln Bildirim",
    "Youtube Bildirim",
    "Github Bildirim",
    "Gmail Bildirim"
]


sendButton.addEventListener("click" , send)


function send () {

    const div = document.createElement("div")
    div.classList.add("mesaj")
    container.appendChild(div)

    div.innerText=message[Math.floor(Math.random()*message.length)]

// 0-255 arasında rastgele sayılar oluştur
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
// RGB değerlerini hexadecimal biçime dönüştür
    var hexR = r.toString(16).padStart(2, '0');
    var hexG = g.toString(16).padStart(2, '0');
    var hexB = b.toString(16).padStart(2, '0');
// Hexadecimal kodunu birleştir    
    var hexCode = '#' + hexR + hexG + hexB;     
   
    div.style.backgroundColor=hexCode
   

   
   clearButton.addEventListener("click",()=> {
    div.remove()
  } )
    
} 





