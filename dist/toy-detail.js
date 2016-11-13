/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(91)
	var __weex_style__ = __webpack_require__(92)
	var __weex_script__ = __webpack_require__(93)

	__weex_define__('@weex-component/e4c2a2678e28746287f69c00b604ad3a', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/e4c2a2678e28746287f69c00b604ad3a',undefined,undefined)

/***/ },

/***/ 90:
/***/ function(module, exports) {

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


/***/ },

/***/ 91:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "scroller",
	      "children": [
	        {
	          "type": "image",
	          "attr": {
	            "src": function () {return 'http://img.playalot.cn/' + (this.toy.cover)},
	            "resize": "cover"
	          },
	          "style": {
	            "width": 750,
	            "height": 750,
	            "backgroundColor": "#BBBBBB"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-label"
	          ],
	          "attr": {
	            "value": function () {return this.toy.name}
	          }
	        },
	        {
	          "type": "container",
	          "repeat": {
	            "expression": function () {return this.infos},
	            "value": "i"
	          },
	          "children": [
	            {
	              "type": "div",
	              "children": [
	                {
	                  "type": "text",
	                  "classList": [
	                    "toy-info-label"
	                  ],
	                  "attr": {
	                    "value": function () {return (this.i.key) + ' : ' + (this.i.value)}
	                  }
	                }
	              ]
	            },
	            {
	              "type": "div",
	              "classList": [
	                "toy-sp-line"
	              ]
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title-label"
	          ],
	          "style": {
	            "marginTop": 40
	          },
	          "attr": {
	            "value": "官方图片"
	          }
	        },
	        {
	          "type": "container",
	          "repeat": {
	            "expression": function () {return this.images},
	            "value": "i"
	          },
	          "children": [
	            {
	              "type": "div",
	              "style": {
	                "width": 750,
	                "height": 375,
	                "flexDirection": "row"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return 'http://img.playalot.cn/' + (this.i.left)},
	                    "resize": "cover"
	                  },
	                  "classList": [
	                    "toy-image-list-item"
	                  ]
	                },
	                {
	                  "type": "image",
	                  "attr": {
	                    "src": function () {return 'http://img.playalot.cn/' + (this.i.right)},
	                    "resize": "cover"
	                  },
	                  "classList": [
	                    "toy-image-list-item"
	                  ]
	                }
	              ]
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = {
	  "title-label": {
	    "width": 722,
	    "color": "#555555",
	    "fontSize": 40,
	    "margin": 14
	  },
	  "toy-info-label": {
	    "width": 722,
	    "color": "#555555",
	    "fontSize": 30,
	    "margin": 14
	  },
	  "toy-sp-line": {
	    "marginLeft": 20,
	    "backgroundColor": "#EEEEEE",
	    "height": 2
	  },
	  "toy-image-list-item": {
	    "width": 375,
	    "height": 375,
	    "backgroundColor": "#BBBBBB"
	  }
	}

/***/ },

/***/ 93:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var apis = __webpack_require__(90);
	module.exports = {
	    data: function () {return {
	        toy: {},
	        images: [],
	        infos: [],
	        id: '569757c101000001002933cd'
	    }},
	    created: function created() {
	        var self = this;
	        var bundleUrl = this.$getConfig().bundleUrl;
	        var getParameterByName = function getParameterByName(name, url) {
	            name = name.replace(/[\[\]]/g, '\\$&');
	            var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
	                results = regex.exec(url);
	            if (!results) return null;
	            if (!results[2]) return '';
	            return decodeURIComponent(results[2].replace(/\+/g, ' '));
	        };
	        self.id = getParameterByName('id', bundleUrl);
	        apis.getToyDetailById(self.id, function (json) {
	            self.toy = json.data;
	            var info = json.data.info;
	            var imgs = json.data.images;
	            var count = Math.ceil(imgs.length / 2);
	            var temp = [];
	            for (var i = 0; i < count; i++) {
	                temp[i] = { left: imgs[i * 2], right: imgs[i * 2 + 1] };
	            }
	            self.images = temp;
	            var infoTemp = [];
	            var data = json.data;
	            if (data != null && data != undefined) {
	                var pushObj = function pushObj(array, k, v) {
	                    if (v != null && v != undefined) {
	                        array.push({ key: k, value: v });
	                    }
	                };
	                pushObj(infoTemp, '原名', data.nameRaw);
	                pushObj(infoTemp, '发售日', data.release);
	                var info = data.info;
	                if (info != null && info != undefined) {
	                    pushObj(infoTemp, '价格', info.money);
	                    pushObj(infoTemp, '公司', info.company);
	                    pushObj(infoTemp, '比例', info.scale);
	                    pushObj(infoTemp, '系列', info.series);
	                    pushObj(infoTemp, '角色', info.character);
	                    pushObj(infoTemp, '原著', info.origin);
	                    pushObj(infoTemp, '原型师', info.artist);
	                }
	                pushObj(infoTemp, '详细描述', data.detail);
	                self.infos = infoTemp;
	            }
	        });
	    },
	    ready: function ready() {},
	    method: {}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });