// For menu
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
// adding the current date to the page
var todaydate = new Date().toISOString().slice(0, 10);
document.getElementById('date').innerHTML += "" + todaydate;