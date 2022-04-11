/**
 * Created by lilei on 2017/6/29.
 */
$(function () {
    function randomImage() {
        var width = Math.round(Math.random() * 100, 2) * 10;
        var height = Math.round(Math.random() * 100, 2) * 10;
        // var placeholderUrl = 'http://lorempixel.com/';
        // var placeholderUrl = 'http://placeimg.com/'; // 必须 http://placeimg.com/width/height
        var placeholderUrl = 'https://picsum.photos/seed/'; // 必须 http://placeimg.com/width/height
        placeholderUrl = placeholderUrl + Math.round(Math.random() * 100, 2) * 100 + '/'
        // var placeholderUrl = 'https://unsplash.it/';
        // var placeholderUrl = '/show-picture/';
        if (width < 100) {
            width = 250;
        }
        if (height < 100) {
            height = 250;
        }
        var img = new Image();
        // img.setAttribute('data-original', placeholderUrl + width + "/" + height + "/?random");
        img.setAttribute('data-original', placeholderUrl + width + "/" + height);
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
        var ipc = $('#icpinfo');
        if (document.domain == 'www.baofenginfo.com') {
            ipc.html('豫ICP备15032266号-3');
        } else if (document.domain == 'www.hwjiao.com') {
            ipc.html('豫ICP备15032266号-1');
        } else if (document.domain == 'www.ai-shanghai.com') {
            ipc.html('豫ICP备15032266号-2');
        }  else {
            ipc.html('豫ICP备15032266号-2');
        }
    }
    initICPinfo();
});