/**
 * Created by Tbxark on 12/11/2016.
 */

 var stream
 __weex_define__('@weex-temp/api', function (__weex_require__) {
     stream = __weex_require__('@weex-module/stream')
 });


 var apiURL = {
     baseurl: 'http://www.playalot.cn/',
     toySearch: function(s) {
       return this.baseurl + 'query/toys?q=' + s;
     },
     toyDetail: function(s) {
       return this.baseurl + 'query/toy/' + s;
     }
 };

function getData(url, callback) {
     stream.sendHttp({
         method: 'GET',
         url: url
     }, function (ret) {
         var retdata = JSON.parse(ret);
         callback(retdata);
     });
 }

exports.searchToysByName = function (name, callback) {
    getData(apiURL.toySearch(name), callback);
};


exports.getToyDetailById = function (id, callback) {
    getData(apiURL.toyDetail(id), callback);
};





exports.getBaseUrl = function (bundleUrl, isnav) {
    bundleUrl = new String(bundleUrl);
    var nativeBase;
    var isAndroidAssets = bundleUrl.indexOf('file://assets/') >= 0;

    var isiOSAssets = bundleUrl.indexOf('file:///') >= 0 && bundleUrl.indexOf('PlayWiki.app') > 0;
    if (isAndroidAssets) {
        nativeBase = 'file://assets/dist/';
    }
    else if (isiOSAssets) {
        nativeBase = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    }
    else {
        var host = 'localhost:12580';
        var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
        if (matches && matches.length >= 2) {
            host = matches[1];
        }

        //此处需注意一下,tabbar 用的直接是jsbundle 的路径,但是navigator是直接跳转到新页面上的.
        if (typeof window === 'object') {
            nativeBase = isnav ? 'http://' + host + '/index.html?page=./dist/' : '/dist/';
        } else {
            nativeBase = 'http://' + host + '/dist/';
        }
    }

    return nativeBase;
};
