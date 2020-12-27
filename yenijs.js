function isOdd(number){
    var remainder = number % 2;
    if (remainder == 0){
      return false;
    }else{
      return true;
    }
  }  

var elaqeHisse = document.getElementById('elaqeNavbar')
var contactExpand = document.getElementsByClassName('expand')
var expandClickCounter = 0;
elaqeHisse.addEventListener("click", openExpand)
function openExpand(event){
    if (contactExpand[0].style.height != "250px"){
      contactExpand[0].style.height = "250px"
      elaqeHisse.style.background = "rgb(43,43,43)"
      elaqeHisse.style.borderBottomLeftRadius = "0"
      elaqeHisse.style.borderBottomRightRadius = "0"
    }else{
        contactExpand[0].style.height = "0"
        elaqeHisse.style.background = "rgba(0,0,0,0.3)"
        elaqeHisse.style.backdropFilter = "saturate(180%) blur(20px)"
        elaqeHisse.style.borderBottomLeftRadius = "5px"
        elaqeHisse.style.borderBottomRightRadius = "5px"
    }
}



$(document).ready(function(){
      
      let contactPosMarginLeft = $('#elaqeNavbar').css('marginLeft').replace("px", "")
      let contactPos = $('#elaqeNavbar').offset().left - contactPosMarginLeft
      $('.expand').css({
        left: contactPos + 'px'
      })

      $(document).on('click', function (event) {
      if (!$(event.target).closest('.contact').length && !$(event.target).closest('#elaqeNavbar').length){
        expandClickCounter +=1
        $(".expand").css({
          height: "0",
          padding: "0",
        })
        elaqeHisse.style.borderBottomLeftRadius = "5px"
        elaqeHisse.style.borderBottomRightRadius = "5px"
        elaqeHisse.style.background = "rgba(0,0,0,0.3)"
        elaqeHisse.style.backdropFilter = "saturate(180%) blur(20px)"
        $(".expand-container").css({
          overflow: "hidden"
        })
      }
  })

  $('.btn-link').on('mouseenter', function(){
    $(this).css({
      background: 'rgba(43,43,43)'
    })
  })
  $('.btn-link').on('mouseleave', function(){
    $(this).css({
      background: 'rgba(0,0,0)'
    })
  })

  



  //PARTNERLER LOGOLAR
  $('.brandLogo img').addClass('filtered')
  $('.brandLogo img').on('mouseenter', function(){
    $(this).removeClass('filtered')
  })
    $('.brandLogo img').on('mouseleave', function(){
    $(this).addClass('filtered')
  })
})