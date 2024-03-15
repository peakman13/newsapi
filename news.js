const apikey = "YOUR APIKEY";

const guncel = document.querySelector("#guncel");
const isdunyasi = document.querySelector("#isdunyasi");
const teknoloji = document.querySelector("#teknoloji");
const spor = document.querySelector("#spor");
const saglik = document.querySelector("#saglik");
const newsPut = document.getElementById("newsPut");
const search = document.getElementById("search");
const newsCategory = document.getElementById("newsCategory");
const newsDetails = document.getElementById("newsDetails");

var newsDataArr= [];

const genelNews ="https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR APIKEY";
const guncelNews ="https://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=YOUR APIKEY";
const isNews = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=YOUR APIKEY";
const sportsNews = "https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=YOUR APIKEY";
const tekhnolojiNews = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=YOUR APIKEY";
const saglikNews = "https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=YOUR APIKEY";
const searchNews = "https://newsapi.org/v2/everyting?q=";

window.onload =function(){
    newsCategory.innerHTML="<h4>Genel Bülten</h4>"
    fetchGenelNews();
}

search.addEventListener("click",function(){
    newsCategory.innerHTML="<h4>"+newsPut.value+"</h4>";
    fetchSearchNews();
});

guncel.addEventListener("click",()=>{
    newsCategory.innerHTML="<h4>Güncel Bülten</h4>"
fetchGuncelNews();
});

isdunyasi.addEventListener("click",()=>{
    newsCategory.innerHTML="<h4>İş Dünyası</h4>"
    fetchIsNews();
});

teknoloji.addEventListener("click",()=>{

  newsCategory.innerHTML="<h4>Teknoloji</h4>"
    fechtekhnolojiNews();
});

saglik.addEventListener("click",()=>{
    newsCategory.innerHTML="<h4>Sağlık</h4>"
    fetchSaglikNews();
});

spor.addEventListener("click",()=>{
    newsCategory.innerHTML="<h4>Spor</h4>"
    fetchSporNews();
});


const fetchGenelNews = async () => {
    const response = await fetch(genelNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}


const fetchGuncelNews = async () => {
    const response = await fetch(guncelNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}

const fetchIsNews = async () => {
    const response = await fetch(isNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}

const fechtekhnolojiNews = async () => {
    const response = await fetch(tekhnolojiNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}

const fetchSaglikNews = async () => {
    const response = await fetch(saglikNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}

const fetchSporNews = async () => {
    const response = await fetch(sportsNews);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        const myJson = await response.json();
        newsDataArr = myJson.articles;
        console.log(myJson);
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsDetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }
    displayNews();
 
}

//search input
const fetchSearchNews = async ()=> {
    if(newsPut.value==null)
        return;

    const response = await fetch(`https://newsapi.org/v2/everything?q=${newsPut.value}&apiKey=YOUR APIKEY`);
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
            const myJson = await response.json();
            console.log(myJson);
            newsDataArr = myJson.articles;
    } else {
            //error handle
            console.log(response.status, response.statusText);
            newsDetails.innerHTML = "<h5>No data found.</h5>"
            return;
           }
    
        displayNews();
}

function displayNews(){
    newsDetails.innerHTML="";

    newsDataArr.forEach(news => {
        var date = news.publishedAt.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";

        var card = document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparent");
        image.setAttribute("width","100%");
        image.src=news.urlToImage;

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-primary";
        dateHeading.innerHTML = date[0];

        var discription = document.createElement('p');
        discription.className="text-muted";
        discription.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-danger";
        link.setAttribute("target", "_blank");
        link.href = news.url;
        link.innerHTML="Read more";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(link);

        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsDetails.appendChild(col);
    });
}
