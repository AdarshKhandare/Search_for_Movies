// slideshow start here
let imgObj =[{img:"https://d2kektcjb0ajja.cloudfront.net/images/posts/feature_images/000/000/072/large-1466557422-feature.jpg?1466557422"},
{img:"https://cdn.wallpapersafari.com/29/24/CTAz5x.jpg"},
{img:"https://i.pinimg.com/originals/be/d6/3e/bed63e4fa1a1be8cea48b3c630218778.jpg"},
{img:"https://i.pinimg.com/originals/18/31/a4/1831a4908cd8e20788bf90e5945d83f4.jpg"},
{img:"https://webneel.net/file/images/11-16/8-xmen-movie-poster-design.jpg"},
{img:"https://film-book.com/wp-content/uploads/2012/05/batman-bane-the-dark-knight-rises-movie-banner-01-2366x1088.jpg"},
{img:"https://i1.wp.com/2.bp.blogspot.com/-XmACHofjfTc/VCQGLtltVQI/AAAAAAAAAC8/FHhoheFlWZ0/s1600/interstellar%2Bnew%2Bbanner.jpg"},
{img:"https://www.joblo.com/wp-content/uploads/2010/06/inception-uk-banner3-1.jpg"},
{img:"https://i0.wp.com/teaser-trailer.com/wp-content/uploads/Triple-Frontier-Banner-Poster.jpg?ssl=1"},
{img:"https://alexparsonsunit18.files.wordpress.com/2014/09/the_avengers_poster-banner.jpg"},
{img:"https://www.brightmediapakistan.com/wp-content/uploads/2021/03/Mortal-Kombat-Movie-scaled-1200x675.jpg"},
{img:"https://wallpaper.dog/large/20357335.jpg"},
{img:"https://cdn.thearthunters.com/wp-content/uploads/2017/09/blade_runner_twenty_forty_nine_ver19_xlg-960x441.jpg"},
{img:"https://www.palomar.edu/kksm/wp-content/uploads/sites/145/2019/11/midway_-_facebook.jpg"},
{img:"https://wallpapercave.com/wp/wp8525582.jpg"},
{img:"https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/jbrwphmatgjzzlqa_1623139854.jpeg"}]

localStorage.setItem("Mimages", JSON.stringify(imgObj));

let images = JSON.parse(localStorage.getItem("Mimages")) || [];

let id;
let i = 0;

console.log(images);


        // slideshow.innerHTML = null;

        // let i = 1;

         let img = document.createElement('img');

         img.src = images[0].img; // to start slideshow right a way

         slideshow.append(img);

        id = setInterval(function () { // for use in globle to stop slideshow

            if (i === images.length) {

                i = 0;
            }

            let image = images[i].img //url come here

            slideshow.innerHTML = null;

            let img = document.createElement('img');
            img.src = image;

            slideshow.append(img);

            i++;

        }, 3000);

 // slideshow ends here


//Movie Search Start here




//  movie Object start here

 let movieDataBase = [
{moviename: "The Batman", releasedate: "5/2/2022", poster: "https://images.cinemaexpress.com/uploads/user/ckeditor_images/article/2022/1/26/WhatsApp_Image_2022-01-26_at_2.55_.29_PM_.jpeg?w=640&dpr=1.3", imdbrating: 8.5},
{moviename: "Uncharted", releasedate: "26/1/2022", poster: "https://knox.villagesoup.com/uploads/sites/4/2022/02/Movie-Review_Uncharted.jpg", imdbrating: 6.7},
{moviename: "Morbius", releasedate: "1/4/2022", poster: "https://i0.wp.com/bloody-disgusting.com/wp-content/uploads/2022/02/morbbb.png?ssl=1", imdbrating: 7.2},
{moviename: "Fantastic Beasts: The Secrets of Dumbledore", releasedate: "15/4/22", poster: "https://m.media-amazon.com/images/M/MV5BOTNjNWRjZDUtYjU1OC00NGFmLWE2ZDktMzhhYmIwOTU4YjVmXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg", imdbrating: 8},
{moviename: "Doctor Strange in the Multiverse of Madness", releasedate: "6/5/2022", poster: "https://m.media-amazon.com/images/M/MV5BZDg5ZDg2MWQtM2ExNi00ZjEzLTgzMDQtZmJlYWEwYmM4ODUxXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", imdbrating: 9.5},
{moviename: "The Adam Project", releasedate: "11/2/2022", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/The_Adam_Project_poster.png", imdbrating: "4.8"},
{moviename: "Dog", releasedate: "18/2/2022", poster: "https://m.media-amazon.com/images/M/MV5BZDRiNDFmMGYtOWY3Ni00ZjUxLTkzZGYtODZiNmIxZGRiZTM4XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg", imdbrating: 6.7},
{moviename: "Gangubai Kathiawadi", releasedate: "25/2/2022", poster: "https://images.hindustantimes.com/img/2022/02/02/1600x900/Gangubai_1643785236716_1643785261330.jpeg", imdbrating: 7.0},
{moviename: "Blacklight", releasedate: "11/2/2022", poster: "https://www.thefilmik.com/wp-content/uploads/2022/02/BlackLight-Movie-.webp", imdbrating: 4.8},
]

let container = document.querySelector("#container")
localStorage.setItem("movies",JSON.stringify(movieDataBase))

let Moviedata = JSON.parse(localStorage.getItem("movies")) || [];
console.log(Moviedata)
movieshow()
function movieshow(){

       container.innerHTML = null;

        Moviedata.map(function(ele){

        var divM = document.createElement("div");
        divM.setAttribute("id", "divM")

        var image = document.createElement("img");
        image.src = ele.poster;
        image.setAttribute("id", "moviePoster")
        
        var name = document.createElement("h4");
        name.innerText = ele.moviename;

        var rating = document.createElement("h4")
        rating.innerText = "🌟" + " " +ele.imdbrating;

        var rdate = document.createElement("p")
        rdate.setAttribute("id", "date")
        rdate.innerHTML = ele.releasedate;


        var divI = document.createElement("div");
        divI.setAttribute("id", "divI")

        var divN = document.createElement("div");
        var divc = document.createElement("div");
        divc.setAttribute("id", "divc")
            
        divI.append(rating,rdate);
        divN.append(name)
        divc.append(divN,divI);

        divM.append(image,divc);
        // divM.append(divI,divN)

        document.querySelector("#container").append(divM);
    })

}

 async function showMovies(){
    
    try
    {
        let search = document.querySelector("#search").value;
        let res = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=b13cc049`)

        let data = await res.json();
        
        console.log(data)
        appendProducts(data)
        
        
    }
    catch(error)
    {
        console.log("Movie not found!")

    }
   
}

function appendProducts(data) { 

    container.innerHTML = null;
    for(let i = 0; i < data.Search.length; i++)
    {

            let div = document.createElement("div");
            div.setAttribute("id","divdata")

            let div1 = document.createElement("div");
            div1.setAttribute("id","div1")

            let div2 = document.createElement("div");

            let img = document.createElement("img");
            img.src = data.Search[i].Poster

            let title = document.createElement("h1");
            title.textContent = data.Search[i].Title

            let Released = document.createElement("p");
            Released.innerText = "ReleaseYear:-"+" "+data.Search[i].Year

            let imdbID = document.createElement("p")
            imdbID.innerText = "imdbID:-"+" "+data.Search[i].imdbID

            let Type = document.createElement("p");
            Type.innerText = "Type:-"+" "+data.Search[i].Type

            div2.append(img)

            div1.append(title,Released,imdbID,Type);

            div.append(div2,div1);

           document.querySelector("#container").append(div);

    }
  
}

//Movie search End Here

// movie search in searchbar start Here
let movies = document.querySelector("#movie")

let timerID;
async function searchMovie()
{ // Async alaways gives promise 
   
    try{
        let input = document.querySelector("#search").value
        // console.log(input) to check seach printing or not

        let res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=b13cc049`);
        let data = await res.json()
        // console.log(data)
        // appendMovie(data.Search) /// find key of data 
        return data.Search;

    }
    catch(error){
        console.log("Movie Not Found!")
    }
    
}

function appendMovie(data)
{

    movies.innerHTML = null;

    if(data === undefined){ // get rid of undefined

        return false;
    }

    data.forEach(function(ele){

        let p = document.createElement("p")
        p.innerText = ele.Title

        let p2 = document.createElement("p")
        p2.innerText = ele.Year

        let img = document.createElement("img")
        img.src = ele.Poster

        let divR = document.createElement("div")
        let divL = document.createElement("div")

        divL.append(img)
        divR.append(p,p2)

        movies.append(divL,divR)

    })
}

async function main()
{

    try
    {
        let data = await searchMovie();

        if (data === undefined) { // get rid of undefined

            return false;
        }
        console.log(data)

        appendMovie(data)
    }

    catch(error)
    {
        console.log("Movie is Not Found!")
    }

}

function debounce(func,delay) 
{

    // timerID = 2 so first pahele ki gandagi khatam karo then 
    // same as innerHTML = null 

    if(timerID)
    {
        clearTimeout(timerID)
    }


    timerID = setTimeout(function()
    {
        console.log(timerID)

            func()// still the main() function
    }, delay);

    // "a"=> debounce() => main() => seachMovies() => appendMovie()
    //"av" =>

}



async function showSearchMovies(){

   container.innerHTML = null;
       try{
            // console.log(input) to check seach printing or not
            let input = document.querySelector("#search").value
            let res = await fetch(`https://www.omdbapi.com/?s=${input}&apikey=b13cc049`);
            let data = await res.json()
            console.log(data)
            // appendMovie(data.Search) /// find key of data 
           showsearchMovies(data.Search)

        }
        catch(error)
        {
            console.log("Movie Not Found!")
        }
    
}



function showsearchMovies(data){

     document.querySelector("#container").innerHTML = null;

            if(data === undefined){ // get rid of undefined

                return false;
            }
        // document.querySelector("#movie").addEventListener("click", function(){

        data.reduce(function(ele)
            {
            let p = document.createElement("p")
            p.innerText = ele.Title

            let p2 = document.createElement("p")
            p2.innerText = ele.Year

            let img = document.createElement("img")
            img.src = ele.Poster

            let divR = document.createElement("div")
            let divL = document.createElement("div")

            divL.append(img)
            divR.append(p,p2)

            document.querySelector("#container").append(divL,divR)
        })
        // })

    
          

}         
