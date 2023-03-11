$(document).ready(function(){
    $('.counter').counterUp({
        delay:10,
        time:1200
    })
    $('.grid').isotope({
        itemSelector: '.grid-item',
        filter: '.mehedi'
    });
    $('.filter-button-group').on('click', 'li', function () {
        var filterValue = $(this).attr('data-filter');
        $('.grid').isotope({ filter: filterValue  });
        $('.filter-button-group li').removeClass('active');
        $(this).addClass('active');
    });
})