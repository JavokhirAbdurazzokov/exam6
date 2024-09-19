let input = document.querySelector(".input")
let wrapper = document.querySelector(".wrapper")



fetch('https://raw.githubusercontent.com/diyor011/apibest/master/api.json')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        
        data.map((tovar) => {
            let card = document.createElement("div")
            card.classList.add("card")
            let img = document.createElement("img")   
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            let p3 = document.createElement("p")
            let p4 = document.createElement("p")
            img.src = tovar.pic
            p1.innerHTML = tovar.name
            p2.innerHTML = tovar.price
            p3.innerHTML = tovar.fulldesc
            p4.innerHTML = tovar.desc1
            
            card.append(img, p1, p2, p3, p4)
            wrapper.appendChild(card)
        })

        input.addEventListener("change", function(){
            wrapper.innerHTML=""
        let new_arr =data.filter(tovar => tovar.name.toLowerCase().includes(input.value))
        console.log(new_arr);
        new_arr.map((tovar) => {
            let card = document.createElement("div")
            card.classList.add("card")
            let img = document.createElement("img")   
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            let p3 = document.createElement("p")
            let p4 = document.createElement("p")
            img.src = tovar.pic
            p1.innerHTML = tovar.name
            p2.innerHTML = tovar.price
            p3.innerHTML = tovar.fulldesc
            p4.innerHTML = tovar.desc1
            
            card.append(img, p1, p2, p3, p4)
            wrapper.appendChild(card)
        
        })



    });

    })

     
