var userName = prompt("Ismingizni kiriting:");
var userScore = prompt("Imtihonda to'plagan balingizni kiriting:")

if(userScore.length != 0){
  if(userScore != " "){
    userScore = Number(userScore);
    if(!isNaN(userScore)){
      if(userScore < 80){
        alert("Talabalikka tavsiya etilmadingiz")
      }
      else if(userScore >= 80 && userScore < 100){
        alert("Talabalikka super-kontrakt asosida tavsiya qilindingiz");
        var money = prompt("Qancha mablag'ingiz bor? ($)");
        if(money.length != 0){
          if(money != " "){
            money = Number(money);
            if(!isNaN(money)){
              if(money >= 3000){
                alert("Talabalikka super-kontrakt asosida qabul qilindingiz")
              }
              else if(money < 3000){
                alert("Talabalikka qabul qilinmadingiz, Sababi kontrakt to'lash uchun pulingiz kam")
              }
            }
            else{
              alert("Iltimos, noto'g'ri qiymat kiritmang, pulingiz miqdorini raqamlarda ifodalang")
            }
          }
          else{
            alert("Bizni aldashga urinmang, probel qo'ymasdan, to'plagan balingizni kiriting")
          }
        }
        else{
          alert("Iltimos, sizda mavjud mablag'ingizni kiriting!")
        }
      }
      else if(userScore >= 100 && userScore < 150){
        alert("Talabalikka kontrakt to'lov asosida tavsiya qilindingiz!")
        var moneyKontrakt = prompt("Qancha mablag'ingiz bor? ($)")
        if(moneyKontrakt.length != 0){
          if(moneyKontrakt != " "){
            moneyKontrakt = Number(moneyKontrakt);
            if(!isNaN(moneyKontrakt)){
              if(moneyKontrakt >= 2000){
                alert("Talabalikka kontrakt asosida qabul qilindingiz!")
              }
              else{
                alert("Talabalikka qabul qilinmadingiz, Sababi kontrakt to'lash uchun pulingiz kam")
              }
            }
            else{
              alert("Iltimos, noto'g'ri qiymat kiritmang, pulingiz miqdorini raqamlarda ifodalang")
            }
          }
          else{
            alert("Bizni aldashga urinmang, probel qo'ymasdan, to'plagan balingizni kiriting")
          }
        }
        else{
          alert("Iltimos, sizda mavjud mablag'ingizni kiriting!")
        }
      }
      else if(userScore >= 150 && userScore <= 180){
        alert("Tabriklaymiz, talabalikka grant asosida qabul qilindingiz")
      }
      else{
        alert(userScore)
      }
    }
    else{
      alert("Kiritilishi kerak bo'lgan ballar raqamda kiritiladi. Siz xato qiymat kiritdingiz")
    }
  }
  else{
    alert("Bizni aldashga urinmang, probel qo'ymasdan, to'plagan balingizni kiriting")
  }
}
else{
  alert("Iltimos, imtihondan to'plagan balingizni kiriting!")
}