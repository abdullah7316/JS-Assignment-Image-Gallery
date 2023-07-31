
//     This is just JS file. If someone wants to see all files. 
//     Please visit GitHub Repository. 
//     I have uploaded all files on https://github.com/abdullah7316/JS-Assignment-Image-Gallery.git

//    Click On Below Link to See Final Live Image Gallery
//    https://abdullah7316.github.io/JS-Assignment-Image-Gallery/


let container = document.getElementById('thumbnail');

const xhr1 = new XMLHttpRequest();

xhr1.open('GET', 'thumbnail.html', true);
xhr1.onprogress = showLoading();
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === XMLHttpRequest.DONE) {
        if (xhr1.status === 200) {
            let html = xhr1.responseText;
            container.innerHTML = html;
        }
    }
}
xhr1.send();

//Function to show loading.gif while http request is on progress
function showLoading() {
    container.innerHTML = `<img src="images/loading.gif" alt="Loading Please Wait" style="margin: 0 auto;">`;
}

//Function to show images
function showImages(path) {
    console.log('Clicked on card : ' + path)
    $('.card').slideUp('slow');
    let showImgDiv = document.getElementById('show-full-images')
    let showImg = document.getElementById('showImg')
    let x=1;
    let previousBtn = document.getElementById('previous-btn')
    let nextBtn = document.getElementById('next-btn')
    let crossBtn = document.getElementById('cross-icon')
    
    showImgDiv.style.display = 'flex';
    showImg.setAttribute('src',`${path+x}.jpg`)

    previousBtn.addEventListener('click',function(){
        $(showImg).fadeOut(1)
        if(x === 1){
            x = 3;
        }else{
            --x;
        }
        $(showImg).fadeIn(250)
        showImg.setAttribute('src',`${path+x}.jpg`)
    })
    nextBtn.addEventListener('click',function(){
        $(showImg).fadeOut(1)
        if(x === 3){
            x = 1;
        }else{
            ++x;
        }
        $(showImg).fadeIn(250)
        showImg.setAttribute('src',`${path+x}.jpg`)
    })
    crossBtn.addEventListener('click',function(){
        showImgDiv.style.display = 'none';
        $('.card').slideDown('slow');
    })
}



