const select=document.querySelectorAll('select')
fetch("https://api.frankfurter.app/currencies")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
    // Convertir les données récupérées en un tableau de valeurs
const entries = Object.entries(data);

// Remplir les listes déroulantes
for (let i = 0; i < entries.length; i++) {
  select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
}
})
