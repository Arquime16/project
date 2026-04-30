$(document).ready(function(){

    alert('Sucess');

});

function checkBrowserSize() {
    windowWidth = window.outerWidth;
    var contentWidth = $('body').width();
    var sizeDiff = windowWidth - contentWidth;
    actualSize = windowWidth - sizeDiff;

    if (actualSize > 1025) { 
        newWindowSize = 'large';
    }
    if(actualSize <= 1025 && actualSize > 600) { 
        newWindowSize = 'medium';
    }
    if(actualSize <= 400) {
        newWindowSize = 'small';
    }
}
 
