const instance = axios.create({
    baseURL: 'https://679a13fe747b09cdcccd963a.mockapi.io'
});

instance.get("/product").then(res => getData(res.data));

let box = document.querySelector(".box");

function getData(arr) {
    arr.forEach(element => {
        box.insertAdjacentHTML("beforeend", `
            <div class="card">
                <img src="${element.image}" alt="">
                <p>${element.description}</p>
                <p><del>${element.delPrice}</del></p>
                <p>${element.price}</p>
            </div>    
        `) 
    });
}