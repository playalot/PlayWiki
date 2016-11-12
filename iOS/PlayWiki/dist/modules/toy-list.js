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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(8)
	var __weex_style__ = __webpack_require__(9)
	var __weex_script__ = __webpack_require__(10)

	__weex_define__('@weex-component/02705a1b9cfb3d4ccb08221d0654e755', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/02705a1b9cfb3d4ccb08221d0654e755',undefined,undefined)

/***/ },
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	/**
	 * Created by Tbxark on 12/11/2016.
	 */



	exports.searchToysByName = function (name, callback) {
	    var json = {"code":1,"data":{"toys":[{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359},{"id":"569757c101000001002933cd","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"黏土人 鹿目圆香 舞妓Ver. （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/569757c101000001002933cd_w_670_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":null,"release":"2013/7","money":"3,290日元","counts":{"hits":16,"wish":1,"owns":1,"scores":0,"updates":0,"comments":0},"created":1452758977229},{"id":"56978ef601000001002943c2","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 初音未来 浴衣Ver. 夏椿 （海外イベント、GSCOnlineショップ限定）","cover":"http://img.playalot.cn/toy/cover/56978ef601000001002943c2_w_718_h_800.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2013/7","money":"3,290日元","counts":{"hits":26,"wish":4,"owns":2,"scores":1,"updates":1,"comments":0},"created":1452773110814},{"id":"57013c860100000100714a50","brand":{"id":"56b38d5401000001002f5b8c","name":"良笑社","image":"http://img.playalot.cn/tag/cover/56b38d5401000001002f5b8c.2506373811?imageView2/2/w/420/q/90","type":"tag","description":"黏土人"},"name":"黏土人 VOCALOID 初音未来 GSC ver. ","cover":"http://img.playalot.cn/toy/cover/57013c860100000100714a50_w_256_h_195.jpeg?imageView2/2/w/420/q/90","company":"良笑社","series":"黏土人","release":"2009/2","money":null,"counts":{"hits":15,"wish":1,"owns":0,"scores":0,"updates":2,"comments":0},"created":1459698822526},{"id":"57fe54390100000100f634ca","brand":{"id":"5677f02f5d32257b02c53590","name":"3A TOYS","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c53590.png?imageView2/2/w/420/q/90","type":"tag","description":null},"name":"JEA GSC CAESAR","cover":"http://img.playalot.cn/toy/cover/57fe54390100000100f634ca_w_600_h_1054.jpg?imageView2/2/w/420/q/90","company":"3A TOYS","series":null,"release":null,"money":null,"counts":{"hits":1,"wish":0,"owns":0,"scores":0,"updates":1,"comments":0},"created":1476285497359}],"info":{"id":null,"name":"gsc","image":null,"type":null,"description":null}}};
	    callback(json);
	};


	exports.getToyDetailById = function (id, callback) {
	    var json = {"code":1,"data":{"id":"58246319170000ad02bb6f54","name":"Hdge technical statueNO.15 杀戮都市 GANTZ:O 丽香（下平 玲花） X霰弹枪ver.","nameRaw":"Hdge technical statue No.15 GANTZ：O レイカ Xショットガンver.","cover":"http://img.playalot.cn/toy/cover/58246319170000ad02bb6f541478779804847_w_800_h_800.jpg?imageView2/2/w/720/q/90","images":["http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155440_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155473_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155462_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155474_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155461_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155475_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155486_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155487_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155488_w_800_h_800.jpg?imageView2/2/w/720/q/90","http://img.playalot.cn/toy/img/58246319170000ad02bb6f54_14787798155489_w_800_h_800.jpg?imageView2/2/w/720/q/90"],"info":[{"key":"名称","value":"Hdge technical statueNO.15 杀戮都市 GANTZ:O 丽香（下平 玲花） X霰弹枪ver."},{"key":"价格","value":"17,064日元"},{"key":"发售日","value":"2017/3"},{"key":"厂商","value":"千值练"},{"key":"人物","value":"丽香"},{"key":"原型师","value":"\t石崎紗央里"},{"key":"详情","value":"映画「GANTZ：O」から【レイカ】が登場！！凛々しく、セクシーなポーズで立体化。\n「Xショットガン」はあの≪千値練≫が製作協力！！"}],"brand":{"id":"5677f02f5d32257b02c5320e","name":"千值练","image":"http://img.playalot.cn/tag/cover/5677f02f5d32257b02c5320e.png?imageView2/2/w/420/q/90","type":"tag","description":"发售日 2017/3"},"infos":{"detail":"映画「GANTZ：O」から【レイカ】が登場！！凛々しく、セクシーなポーズで立体化。 「Xショットガン」はあの≪千値練≫が製作協力！！","character":"丽香","artist":"\t石崎紗央里","origin":"杀戮都市"},"company":"千值练","release":"2017/3","money":"JPY￥17,064","exchange":"约1109.2RMB, 汇率0.065","isOwn":false,"isWish":false,"isScore":false,"posts":[],"counts":{"hits":88,"wish":2,"owns":0,"scores":0,"updates":91,"comments":0},"score":[{"value":0,"key":"pts1","text":"外观"},{"value":0,"key":"pts2","text":"细节"},{"value":0,"key":"pts3","text":"涂装"},{"value":0,"key":"pts4","text":"性价比"},{"value":0,"key":"pts5","text":"把玩性"}],"avgScore":0,"shareLink":"http://www.playalot.cn/home/#/toy/58246319170000ad02bb6f54","comments":[],"totalComments":0,"totalPosts":0,"stocks":[]}};
	    callback(json);
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "list",
	      "children": [
	        {
	          "type": "cell",
	          "append": "tree",
	          "repeat": function () {return this.toys},
	          "children": [
	            {
	              "type": "div",
	              "classList": [
	                "toy-container"
	              ],
	              "attr": {
	                "toyid": function () {return this.id}
	              },
	              "events": {
	                "click": "onToyItemClick"
	              },
	              "children": [
	                {
	                  "type": "image",
	                  "classList": [
	                    "toy-cover"
	                  ],
	                  "attr": {
	                    "resize": "cover",
	                    "src": function () {return this.cover}
	                  }
	                },
	                {
	                  "type": "div",
	                  "classList": [
	                    "toy-info"
	                  ],
	                  "children": [
	                    {
	                      "type": "text",
	                      "style": {
	                        "height": 70,
	                        "width": 520,
	                        "marginBottom": 20,
	                        "fontSize": 30,
	                        "color": "#666666"
	                      },
	                      "attr": {
	                        "value": function () {return this.name}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "toy-common-info-text"
	                      ],
	                      "attr": {
	                        "value": function () {return '厂商: ' + (this.company)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "toy-common-info-text"
	                      ],
	                      "attr": {
	                        "value": function () {return '发售: ' + (this.release)}
	                      }
	                    },
	                    {
	                      "type": "text",
	                      "classList": [
	                        "toy-common-info-text"
	                      ],
	                      "attr": {
	                        "value": function () {return '价格: ' + (this.money)}
	                      }
	                    }
	                  ]
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
	        }
	      ]
	    }
	  ]
	}

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = {
	  "toy-container": {
	    "width": 750,
	    "height": 200,
	    "margin": 10,
	    "flexDirection": "row"
	  },
	  "toy-cover": {
	    "height": 200,
	    "width": 200,
	    "borderRadius": 10
	  },
	  "toy-info": {
	    "marginLeft": 10,
	    "marginRight": 10,
	    "flexDirection": "column"
	  },
	  "toy-common-info-text": {
	    "height": 35,
	    "fontSize": 25,
	    "color": "#999999",
	    "paddingBottom": 0
	  },
	  "toy-sp-line": {
	    "marginLeft": 20,
	    "backgroundColor": "#EEEEEE",
	    "height": 2
	  }
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	var apis = __webpack_require__(4);
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	    data: function () {return {
	        toys: [],
	        baseURL: ''
	    }},
	    methods: {
	        onToyItemClick: function onToyItemClick(e) {
	            var self = this;
	            var itemid = e.target.attr.toyId;
	            var params = {
	                'url': this.baseURL + '/toy-detail.js?id=' + itemid,
	                'animated': 'true'
	            };
	            console.log(itemid);
	            navigator.push(params, function (e) {});
	        }

	    },
	    created: function created() {
	        var self = this;

	        var bundleUrl = this.$getConfig().bundleUrl;
	        this.baseURL = apis.getBaseUrl(bundleUrl, true);
	        apis.searchToysByName("gsc", function (json) {
	            self.toys = json.data.toys;
	        });
	    }
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);