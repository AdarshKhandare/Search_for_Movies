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

        let container = document.getElementById("slideshow");

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

        }, 2000);

 // slideshow ends here