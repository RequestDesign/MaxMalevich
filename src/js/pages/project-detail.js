import $ from "jquery";

let boxHeight
let starSize
if($('.project-detail-about__infos--text').length) {
  boxHeight = $('.project-detail-about__infos--text').outerHeight()
  starSize = $('.project-detail-about__infos--list').offset().top - $('.project-detail-about__infos--text').offset().top 
  $(".project-detail-about__infos--text").css('height', starSize)
}

$(".project-detail-about__infos--link").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().prev(".project-detail-about__infos--text");
    var linkText = $this.find('span').text();

    if (linkText === "Читать подробнее") {
      linkText = "Скрыть";
      $content.removeClass('hideContent')
      $content.addClass('showContent')
      $content.css('height', boxHeight + 20)
    //   $content.switchClass("hideContent", "showContent", 400);
    } else {
      linkText = "Читать подробнее";
      $content.removeClass('showContent')
      $content.addClass('hideContent')
      $content.css('height', starSize)
    //   $content.switchClass("showContent", "hideContent", 400);
    };
  
    $this.find('span').text(linkText);
});