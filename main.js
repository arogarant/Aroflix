const Dir = ['movies/m1.jpg','movies/m2.jfif','movies/m3.jpg','movies/m4.jfif','movies/m5.jpg','movies/m6.jpg','movies/m7.jpg','movies/m8.jpg','movies/m9.jpg','movies/m10.jpg']
let root = document.getElementById('popular');
let trending = document.getElementById('trending');
let random = Math.round(Math.random()*11);
console.log(random)
let corousel = document.getElementById('corousel');
corousel.src = Dir[random];
for( iy=0 ;iy<Dir.length;iy++){

    function video(bar) {
        
        
    let album = document.createElement('div');
    album.classList.add('album');
    bar.appendChild(album);
    
    let poster = document.createElement('img');
    poster.classList.add('poster');
    album.appendChild(poster)
    poster.src= Dir[iy];
}
video(root);
video(trending);
}
