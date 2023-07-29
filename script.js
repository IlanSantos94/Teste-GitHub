function generatNumber() {

        const min = Math.ceil(document.querySelector(".raffle-number").value)
        const max = Math.floor(document.querySelector(".drawn-number").value)


        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        

        document.getElementById("number-sorted").innerHTML=result
       
}

