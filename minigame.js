// Initializes a variable called start with the current time in milliseconds
var start = new Date().getTime();

function getRandomColor() {
    //declaring a variable named letters containing a string of all the hex digits
    var letters = "0123456789ABCDEF";
    // declaring variable color and initializing it with the string "#", which is the beginning of a hex color code.
    var color = "#";
    // loop which will iterate 6 times (number of characters in hte hex color number)
    for (var i = 0; i < 6; i++) {
         // generating random number, multiplying by 16 (Because we have 16 characters in "0123456789ABCDEF". Adding "#" to a generated code  as all //HEX starts from "#""
        color += letters[Math.floor(Math.random() * 16)];
    }
    // function returning the color string
    return color;
}

function shapeAppear() {
    // setting minimum size of a shape in pixels
    var minSize = 50;
    // setting maximum size of a shape in pixels. Should be less then container size
    var maxSize = 200;
    // random size between minSize and maxSize
    var size = Math.random() * (maxSize - minSize) + minSize;

    // getting the dimensions of the container
    var container = document.getElementById("shapeContainer");
    // getting the total width of the container element
    var containerWidth = container.offsetWidth;
    // getting the total height of the container element
    var containerHeight = container.offsetHeight;

    // calculating the maximum top position for the shape to ensure it remains within the container
    var maxTop = containerHeight - size;
    var maxLeft = containerWidth - size;

    // calculating random positions within the container
    var top = Math.random() * maxTop;
    var left = Math.random() * maxLeft;

    //setting the size, position, and display properties for the shape element
    var shape = document.getElementById("shape");
    shape.style.width = size + "px";
    shape.style.height = size + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.display = "block";

    // deciding randomly whether the shape is a circle or a square by setting borderRadius
    if (Math.random() > 0.5) {
        shape.style.borderRadius = "50%"; // Circle
    } else {
        shape.style.borderRadius = "0"; // Square
    }

    shape.style.backgroundColor = getRandomColor();
    // reseting the start variable with the new current time, to measure the reaction time for the next shape.
    start = new Date().getTime();
}

// setting a delay before the shapeAppear function is called using setTimeout, with a delay of up to 500 milliseconds
function shapeAppearDelay() {
    setTimeout(shapeAppear, Math.random() * 500);
}

// calling to start the game
shapeAppearDelay();
// finding the element with the id "shape" and attaching a click event handler to it
document.getElementById("shape").onclick = function() {
    //hiding the element from view on the page
    document.getElementById("shape").style.display = "none";
    //creating a new Date object and calls the getTime() method on it, which returns the current time
    var end = new Date().getTime();
    // calculating the time  and deviding by 1000 to transform  to seconds
    var time = (end - start) / 1000;
    document.getElementById("time").innerHTML = time + "s";
// calling function again to set a timeout after which a new shape will appear
    shapeAppearDelay();
}

