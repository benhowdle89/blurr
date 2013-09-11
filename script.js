var slider = document.querySelector('#opacity');
var vendor = function() {
    var tmp = document.createElement("div"),
        prefixes = 'webkit Moz O ms'.split(' '),
        i;
    for (i in prefixes) {
        if (typeof tmp.style[prefixes[i] + 'Filter'] != 'undefined') {
            return prefixes[i];
        }
    }
}
var prefix = vendor();

function applyFilter(el, amount) {
    el.style[prefix + 'Filter'] = 'blur(' + (30 - amount) + 'px)';
}

function makeImage(url) {
    url = url || "http://i0.kym-cdn.com/photos/images/original/000/131/399/fry.PNG?1307468855";
    var img = new Image();
    img.src = url;
    img.id = 'dasImage';
    var imgHolder = document.querySelector('#imgHolder');
    imgHolder.innerHTML = '';
    imgHolder.appendChild(img);
    applyFilter(img, slider.value);
}

makeImage();

slider.addEventListener('change', function() {
    applyFilter(document.querySelector('#dasImage'), this.value);
});

document.querySelector('#submitNewUrl').addEventListener('click', function(e) {
    e.preventDefault();
    var val = document.querySelector('#newUrl').value;
    if (val) {
        makeImage();
    }
});