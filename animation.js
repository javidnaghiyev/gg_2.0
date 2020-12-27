gsap.registerPlugin(gsap, ScrollMagic);
AOS.init();

function isOdd(number){
  var remainder = number % 2;
  if (remainder == 0){
    return false;
    console.log("teahah")
  }else{
    return true;
    console.log("shdvbhj")
  }
}
$(document).ready(function(){

  var hamburgerClickCounter = 0;
  $('.hamburger-button').on('click', function(){
    hamburgerClickCounter +=1;
    if (isOdd(hamburgerClickCounter) == true){
      $('#sidemenu').css({
        width: '200px'
      })
      $('body').css({
        marginLeft: '200px'
      })
    }else{
      $('#sidemenu').css({
        width: '0'
      })
      $('body').css({
        marginLeft: '0'
      })
    }
  })
  $('#sidemenu-close').on('click', function(){
    $('#sidemenu').css({
      width: '0'
    })
    $('body').css({
      marginLeft: '0'
    })
  })


  // var contactClickCounter = 0;
  // $('#elaqeNavbar').on("click", function(){
  //   contactClickCounter += 1;
  //   if (isOdd(contactClickCounter) === true){
  //     $(".expand").css({
  //       height: "210px",
  //       padding: "10px 0"
  //     })
  //     $(".expand-container").css({
  //       overflow: "visible"
  //     })
  //   }else{
  //     $(".expand").css({
  //       height: "0",
  //       padding: "0"
  //     })
  //     $("#contact-us > div").removeClass("triangle")
  //     $(".expand-container").css({
  //       overflow: "hidden"
  //     })
  //   }
  // })

  var isLoginOpen = false;
  $('.login-container').on("click", function() { 
    event.stopPropagation()
    $(".login-container").css({
            borderLeft: "1px solid grey",
            borderTop: "1px solid grey",
            borderRight: "1px solid grey",
            borderRadius: "4px",
            borderBottomLeftRadius: "0",
            borderBottomRightRadius: "0",
            background: "white"
          })
          $("#login-text").css({
            color: "black"
          })
          $(".question-form-container").css({
            display: "flex",
            position: "fixed",
            borderRadius: "4px"
          })
})
  // $(document).on('click', function (event) {
  //     if (!$(event.target).closest('.contact').length && !$(event.target).closest('#contact-us').length){
  //       contactClickCounter += 1;
  //       $(".expand").css({
  //         height: "0",
  //         padding: "0"
  //       })
  //       $("#contact-us > div").removeClass("triangle")
  //       $(".expand-container").css({
  //         overflow: "hidden"
  //       })
  //     }
  // })

  $(window).scroll(function (event){
    var scroll = $(window).scrollTop();
    if (scroll <= 5){
      $(".logo").css({
        zIndex: "-1"
      })
    }else{
      $(".logo").css({
        zIndex: "1"
      })
    }
  });



  // $(document).on('click', function (event) {
  //     if (!$(event.target).closest('.question-form-container').length){
  //       $(".login-container").css({
  //               border: "none",
  //               background: "black"
  //             })
  //             $("#login-text").css({
  //               color: "white"
  //             })
  //             $(".question-form-container").css({
  //               display: "none",
  //             })
  //     }
  // })


  //ANIMATION
  const height = $(window).height();
  const scrollTop = $(window).scrollTop();
  const navLinksPosition = $('.nav-links').position()
  const logoPosition = $('.logo').position()

  var tl = gsap.timeline();
  let mql = window.matchMedia('(max-width: 600px)');
  

  tl.to(".logo", {y: -295, scale: 0.14, duration: 0.1, position: 'fixed'})
  .to('.slogan', {y: -10, opacity: 0});

  const controller = new ScrollMagic.Controller();
  const logo = new ScrollMagic.Scene({
    triggerElement: '',
    duration: 25
  })
  
  .setTween(tl)
  .setPin('.logo')
  .addTo(controller)

})
