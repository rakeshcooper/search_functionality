let aArray = []
let arrayName = document.querySelector(".name")
let search = document.querySelector(".search-bar")
aArray = ["Rakesh","Cooper","Stephen","Hawking","Raghav","Cooper"]
arrayName.innerHTML = aArray

search.addEventListener("input",()=>{
    let findArray = aArray.map((data) => {
       let dat = data.toLowerCase()
       let txtValue = dat.slice(0)
       if (txtValue.indexOf(search.value) > -1 || data.indexOf(search.value) > -1){
            console.log(dat);
            return dat[0].toUpperCase()+dat.slice(1)  
       }
    })

    let filteredArray = findArray.filter((data) => {
        return data !== undefined
    })
    console.log(findArray);
    if(filteredArray.length > 0){
        arrayName.innerHTML = filteredArray
    } else{
        arrayName.innerHTML = "Not Found"
    }
    
})

