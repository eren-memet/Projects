let userName = prompt("Adiniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${userName}`

let myClock = document.querySelector("#myClock") 

function tarihSaat() {

    const weekday = ["Pazar","", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];

    const gun = new Date();
     let day = weekday[gun.getDay()] ;  // Burada gün tanımlamamızı yaptık

     var date = new Date().toLocaleTimeString('tr-TR');

     myClock.innerHTML = `${date + day}`

}


setInterval(tarihSaat,1000);
