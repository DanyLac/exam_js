fetch("https://api.frankfurter.app/currencies")
.then((res)=>res.json())
.then((data)=>{
    console.log(data);
})