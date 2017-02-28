function addThumbClickHandler(thumb){
    'use strict';
    thumb.addEventListener('click',function (event) {
        event.preventDefault();
    });
}


function getThumbnailsArray(){
    'use strict';
    var thumbnails = document.getElementsByTagName('a');
    var thumbnailArray = [].slice.call(thumbnails);
    return thumbnailArray;
}

function initializeEvents() {
    'use strict';
    var thumbnails = getThumbnailsArray();
    thumbnails.forEach(addThumbClickHandler);
}

initializeEvents();
