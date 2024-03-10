let buttons = document.querySelectorAll(".button")
let change = document.querySelector(".change")
let previous = document.querySelector(".previous")
let first = document.querySelector('.first')

let datas = [
{"id": "1",
"name": "Lura Senger",
"email": "Xander_Collier@yahoo.com"},
{"id": "2",
"name": "Wilburn Weber",
"email": "Bennett_Kreiger11@yahoo.com"},
{
  "id": "3",
  "name": "Tyrique Hahn",
  "email": "Juston.Altenwerth@yahoo.com"
},
{
  "id": "4",
  "name": "Lenny Bailey",
  "email": "Guiseppe_Hegmann@yahoo.com"
},
{
  "id": "5",
  "name": "Vladimir Keeling",
  "email": "Louisa_Walsh18@hotmail.com"
},
{
  "id": "6",
  "name": "Kellie Crona",
  "email": "Chandler_Abernathy@yahoo.com"
},
{
  "id": "7",
  "name": "Carolina White",
  "email": "Royal50@hotmail.com"
}
]
localStorage.setItem(datas,JSON.stringify(datas))
let data = (JSON.parse(localStorage.getItem(datas))) 

function showdata(i){
     change.innerHTML = `ID: ${data[i-1].id}<br> Name:${data[i-1].name} <br>Email: ${data[i-1].email}`
     previous.addEventListener('click',()=>{
     change.innerHTML = `ID: ${data[i-2].id}<br>
     Name:${data[i-2].name} <br> Email: ${data[i-2].email}`
     })
     }

function start (){
  change.innerHTML = `ID: ${data[0].id}<br> Name:${data[0].name} <br>Email: ${data[0].email}`
}
first.addEventListener('click', start)





