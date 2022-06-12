(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.singleSpa = {}));
	console.log('globalThis: ', globalThis); // Window
	console.log('global: ', global); // undefined
	console.log('self: ', self); // Window
})(this, (function (exports) { 'use strict';
console.log('this: ', this);
console.log('exports: ', exports);

	// export const a = 1;
	var a = 1;

	exports.a = a;

	Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=single-spa.js.map

// 最终得到 window.singleSpa 为下方的一个对象
// {a: 1, __esModule: true}