var imgList = Array.from(document.getElementsByClassName('img-item'));
var lightBox = document.querySelector('.light-Box ');
var lightItem = document.querySelector('.light-item');
var nextRight = document.getElementById('next');
var prevLift = document.getElementById('prev');
var close = document.getElementById('close');
var enterImage = 0;

for (var i=0;i<imgList.length;i++)
{
       
        imgList[i].addEventListener('click' , function (e) {
        enterImage = imgList.indexOf(e.target);
        var imgSrc = e.target.getAttribute('src');
        lightBox.classList.replace('d-none', 'd-flex')
        lightItem.style.backgroundImage = `url(${imgSrc})`
    })
}


function nextSlider() {
    enterImage++;

    if (enterImage == imgList.length) {
        enterImage = 0;
    }

    var imgSrc = imgList[enterImage].getAttribute('src');
    lightItem.style.backgroundImage = `url(${imgSrc})`

    
}

function prevSlider() {
    enterImage--;

    if (enterImage == -1) {
        enterImage = imgList.length -1;
    }

    var imgSrc = imgList[enterImage].getAttribute('src');
    lightItem.style.backgroundImage = `url(${imgSrc})`

    
}

function closeSlider() {
    lightBox.classList.replace('d-flex', 'd-none')
    
}

nextRight.addEventListener('click' ,nextSlider)
prevLift.addEventListener('click' ,prevSlider)

close.addEventListener('click', closeSlider)

document.addEventListener('keydown' , function (e) {
    console.log(e);
    if (e.key == 'ArrowRight') {
        nextSlider(1);
        
    }else if (e.key == 'ArrowLeft') {
        prevSlider(-1);
        
    }else if (e.key == 'Escape') {
        closeSlider();
        
    }
    
})


//////////////////////////////////////////////////////////////////////////////////////


    let DomOffSet = $("#Dom").offset().top;
    $(window).scroll(function () {
        let wScroll = $(window).scrollTop();
        if (wScroll > DomOffSet -50 ){
           $('#Nav-Scroll').fadeOut(500);
           $('#btnup').fadeIn(500)
        }else{
            $('#Nav-Scroll').fadeIn(500);
            $('#btnup').fadeOut(500)
        }
    })
    

  $("#btnup").click(function () {
      $("body,html").anmiate({scrollTop:0}, 3000)
      
  })


  

$("a[href^='#']").click (function (e) {
    let aHref = e.target.getAttribute('href');
    let sectionOffset= $(aHref).offset().top;
    $("body").anmiate({scrollTop:sectionOffset},5000)  
});