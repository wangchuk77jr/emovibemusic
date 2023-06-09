    // Get the height of the content column
    const contentHeight = document.getElementById("about-content").offsetHeight;
  
    // Set the height of the carousel to match the content column
    const carousel = document.getElementById("carouselExampleSlidesOnly");
    carousel.style.height = `${contentHeight}px`;
    carousel.querySelector(".carousel-inner").style.height = `${contentHeight}px`;
    carousel.querySelectorAll(".carousel-item img").forEach(img => {
      img.style.height = `${contentHeight}px`;
      img.style.objectFit = "cover";
    });

    
    $(document).ready(function(){
    // Add event listener to the "next" button
    $('.carousel-button.next').click(function(){
        // Get the currently active carousel item
        var activeItem = $('.carousel-item.active');
        // Get the next carousel item
        var nextItem = activeItem.next();
        // If there is no next item, go back to the first item
        if (nextItem.length == 0) {
        nextItem = $('.carousel-item').first();
        }
        // Slide the carousel to the next item
        activeItem.removeClass('active');
        nextItem.addClass('active');
        
        // Get the currently active carousel indicator
        var activeIndicator = $('.carousel-indicators li.active');
        // Get the next carousel indicator
        var nextIndicator = activeIndicator.next();
        // If there is no next indicator, go back to the first indicator
        if (nextIndicator.length == 0) {
        nextIndicator = $('.carousel-indicators li').first();
        }
        // Change the active indicator to the next indicator
        activeIndicator.removeClass('active');
        nextIndicator.addClass('active');
    });
    });