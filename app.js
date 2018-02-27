function showLandingBio() {
  $('.main-content .content-wrap').children().hide();
  $('.landingBio').fadeIn();

}

function showProjects() {
  $('.main-content .content-wrap').children().hide();
  $('.project-wrap').fadeIn();
  ;
}

function showAbout() {
  $('.main-content .content-wrap').children().hide();
  $('.about').fadeIn();
 
}

function createNav() {
  var content = ["Danny Di Giulio", "Projects", "About"];
  content.forEach(function(i) {
    var liItem = $("<li><a id='" + content.indexOf(i) +
      "' class='nav-link'>" + i + "</a></li>");
    $('.nav-list').append(liItem);
    liItem.click(function() {
      navRouter(liItem);
    });
  });
}

function navRouter(i) {
  if (i.text() === "Danny Di Giulio") {
    {
      showLandingBio();
  }
  } else if (i.text() === "Projects") {
    
    showProjects();
    
  } else {
    
    showAbout();
    
  }
}

$(function() {
  
  createNav();
  showLandingBio();
  // navAnimation('#0');
  // showDefine();
  // $('body').fadeIn().css({
  //   'display': 'block'
  // });
});