function changeImage(imageId, src1, src2) {
    var image = document.getElementById(imageId);
    if (image.src.endsWith(src1)) {
        image.src = src2;
    } else {
        image.src = src1;
    }
}
