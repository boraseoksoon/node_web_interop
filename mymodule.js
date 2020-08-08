(function (exports) {
	exports.test = function () {
		return 'hello exports'
	};

})(typeof exports === 'undefined' ? this['module_name'] = {} : exports)