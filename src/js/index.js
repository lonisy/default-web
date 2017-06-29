/**
 * Created by lilei on 2017/6/29.
 */
$(function () {
    function randomImage() {
        var width = Math.round(Math.random() * 100, 2) * 10;
        var height = Math.round(Math.random() * 100, 2) * 10;
        if (width < 100) {
            width = 250;
        }
        if (height < 100) {
            height = 250;
        }
        var img = new Image();
        img.setAttribute('data-original', "https://unsplash.it/" + width + "/" + height + "/?random");
        img.width = width;
        img.height = height;
        $(img).lazyload();
        return img;
    }

    function initImage() {
        var i = 0;
        var max = 50;
        var row = $('#mosaic');
        while (i < max) {
            row.append(randomImage());
            i++;
        }
        row.Mosaic({
            innerGap: 10
        });
    }

    initImage();

    function initICPinfo() {
        //document.title
        var ipc = $('#icpinfo');
        if (document.domain == 'www.baofenginfo.com') {
            ipc.html('豫ICP备15032266号-3');
        } else if (document.domain == 'www.hwjiao.com') {
            ipc.html('豫ICP备15032266号-1');
        } else {
            ipc.html('豫ICP备15032266号');
        }
    }
    initICPinfo();
});