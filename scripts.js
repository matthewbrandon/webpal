$(document).ready(function(){
    container= $(".container");
    ind=1;
    container.append("<div class='tab-border'></div>")
    container.find("h3").each(function(){
      $(this).remove();
      $(".tab-border").append("<div class='tab'>"+$(this).text()+"</div>");
    });
    $(".tab").click(function(){
      $(this).toggleClass("selected");
      ind=$(this).index(".tab");
      $(".tab").each(function(){
          ind2= $(this).index(".tab");
         if($(this).hasClass("selected") && ind2!==ind){
             $(this).removeClass("selected");
             $(".container > .content:nth-child("+(ind2+1)+")").toggle();
         } 
      });
      $(".container > .content:nth-child("+(ind+1)+")").toggle();
    });
  });
  