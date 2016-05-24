//$('.navbar-right li').on('click', function () {
//    $('.navbar-right li.navActive').removeClass('navActive');
//    $(this).addClass('navActive');
//});

function toggleChevron(e) {
    $(e.target)
        .prev('.panel-heading')
        .find("i.indicator")
        .toggleClass('glyphicon-chevron-down glyphicon-chevron-up');
}
$('#accordion').on('hidden.bs.collapse', toggleChevron);
$('#accordion').on('shown.bs.collapse', toggleChevron);


$('#accordion2').on('hidden.bs.collapse', toggleChevron);
$('#accordion2').on('shown.bs.collapse', toggleChevron);


$('#accordion3').on('hidden.bs.collapse', toggleChevron);
$('#accordion3').on('shown.bs.collapse', toggleChevron);


$('#accordion4').on('hidden.bs.collapse', toggleChevron);
$('#accordion4').on('shown.bs.collapse', toggleChevron);


$('#reviewAccordion').on('hidden.bs.collapse', toggleChevron);
$('#reviewAccordion').on('shown.bs.collapse', toggleChevron);


$('#verbalAccordion').on('hidden.bs.collapse', toggleChevron);
$('#verbalAccordion').on('shown.bs.collapse', toggleChevron);

$('#interviewAccordion').on('hidden.bs.collapse', toggleChevron);
$('#interviewAccordion').on('shown.bs.collapse', toggleChevron);


$('#feedbackAccordion').on('hidden.bs.collapse', toggleChevron);
$('#feedbackAccordion').on('shown.bs.collapse', toggleChevron);


$('#offerAccordion').on('hidden.bs.collapse', toggleChevron);
$('#offerAccordion').on('shown.bs.collapse', toggleChevron);


$('#conditionalAccordion').on('hidden.bs.collapse', toggleChevron);
$('#conditionalAccordion').on('shown.bs.collapse', toggleChevron);


$('#initiateAccordion').on('hidden.bs.collapse', toggleChevron);
$('#initiateAccordion').on('shown.bs.collapse', toggleChevron);


$('#declineAccordion').on('hidden.bs.collapse', toggleChevron);
$('#declineAccordion').on('shown.bs.collapse', toggleChevron);


$('#onboardingAccordion').on('hidden.bs.collapse', toggleChevron);
$('#onboardingAccordion').on('shown.bs.collapse', toggleChevron);


$('.viewChanger a').on('click', function () {
    $('.viewChanger a.active').removeClass('active');
    $(this).addClass('active');
});

$('#reviewAccordion h4 a').on('click', function (e) {
    e.preventDefault();
    if ($('.reviewContent').css('display') == 'none') {
        $('.reviewContent').css('display', 'block');
    } else {
        $('.reviewContent').css('display', 'none');
    }
});

$('#verbalAccordion h4 a').on('click', function () {
    if ($('.verbalContent').css('display') == 'none') {
        $('.verbalContent').css('display', 'block');
    } else {
        $('.verbalContent').css('display', 'none');
    }
});

$('#interviewAccordion h4 a').on('click', function () {
    if ($('.interviewContent').css('display') == 'none') {
        $('.interviewContent').css('display', 'block');
    } else {
        $('.interviewContent').css('display', 'none');
    }
});

$(window).scroll(function () {
    var profile = $('.profile'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) profile.addClass('fixed');
    else profile.removeClass('fixed');

    var userDetails = $('.userDetails'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) userDetails.addClass('fixed2');
    else userDetails.removeClass('fixed2');
    
     var filterTag = $('.tags-view'),
        scroll = $(window).scrollTop();

    if (scroll >= 60) filterTag.addClass('fixed3');
    else filterTag.removeClass('fixed3');
    
    var filterBtn = $('.toggleMenu'),
        scroll = $(window).scrollTop();

    if (scroll >= 60) filterBtn.addClass('fixed4');
    else filterBtn.removeClass('fixed4');
  
});


$("#menu-toggle").click(function (e) {
    e.preventDefault();
    $(".sidebar").toggleClass("toggled");
    
    var pos = $('.sidebar').position(); 
     if (pos.left == 0) {
        $('.toggleMenu').css('left', '240px');
    }
    else {
        $('.toggleMenu').css('left', '0px');
    }
});