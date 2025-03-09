var $grid = $('.highlights').masonry({
    // options...
  });
   //layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });

  