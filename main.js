const srcLine = document.querySelector("#srcLine");
const srcBtn = document.querySelector("#srcBtn");
const card = document.querySelector("#card")




srcLine.addEventListener("keypress", event =>{
    if(event.key === "Enter"){
        event.preventDefault();
        srcBtn.click()
    }
})

// const myPromise = fetch(`https://www.omdbapi.com/?apikey=a407a7b3&s=${movieTitle}`);
// myPromise.then(res =>{
    //     const promise = res.json();
    
    //     return promise
// }).then(rederItem).catch(err=>{
    //     console.log(err);
// }).finally(()=>{
//     console.log("The End");

srcBtn.addEventListener("click", function(){
    const title = srcLine.value;
    // console.log(movieTitle);

    myPromise(title)
});

async function myPromise(movieTitle){
    
    try{
        let url = `https://www.omdbapi.com/?apikey=a407a7b3&s=${movieTitle}`;
        const response = await fetch(url);
        const data = await response.json();
        rederItem(data);
    }catch(err){
        console.log(err);
    }
}


function rederItem(data){
    const movie = data.Search
    console.log(movie);
    card.innerHTML = movie.map(item => `<div class="card " style="width: 18rem;">
    <img src="${item.Poster}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${item.Title}</h5>
    <p class="card-text">${item.Year}</p>
    <p class="card-text">${item.Type}</p>
    <a href="#" class="btn btn-primary">${item.imdbID}</a>
    </div>
    </div>`)
  

    srcLine.value = "";
}


