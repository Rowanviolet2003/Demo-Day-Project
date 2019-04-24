
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instance = M.Carousel.init(elems);
    var instance = M.Carousel.init({
        fullWidth: true,
        indicators: true
      });
    

    instance.next(1);
    instance.prev(1);
});





  

