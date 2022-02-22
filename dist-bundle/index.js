require('./sourcemap-register.js');module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 283:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const fs = __importStar(__nccwpck_require__(747));
const Path = __importStar(__nccwpck_require__(622));
const util_1 = __nccwpck_require__(669);
const Filename = {
    lockfile: 'yarn.lock'
};
/**
 * Lifted from yarnpkg/berry
 * https://github.com/yarnpkg/berry/blob/10ff0a97b78fcd5ca787658409fea92f4bc0fc84/packages/yarnpkg-core/sources/scriptUtils.ts#L41-L62
 */
function detectPackageManager(location) {
    return __awaiter(this, void 0, void 0, function* () {
        let yarnLock = null;
        try {
            yarnLock = yield util_1.promisify(fs.readFile)(Path.join(location, Filename.lockfile), `utf8`);
        }
        catch (_a) { }
        if (yarnLock !== null) {
            if (yarnLock.match(/^__metadata:$/m)) {
                return 0 /* Yarn2 */;
            }
            else {
                return 1 /* Yarn1 */;
            }
        }
        if (fs.existsSync(Path.join(location, `package-lock.json`)))
            return 2 /* Npm */;
        if (fs.existsSync(Path.join(location, `pnpm-lock.yaml`)))
            return 3 /* Pnpm */;
        return null;
    });
}
function installDepsIfNecessary() {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        If typedoc and/or already installed locally, use that
        Check for both!  typedoc and typescript
    
        Check for `node_modules/typedoc` and `node_modules/typescript`
        `yarn why typedoc --json`?
    
        npm install typedoc@$version
        yarn add typedoc@$version
        pnpm install typedoc@$version
        */
    });
}
function runTypedoc() {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        Either (depending on package manager):
        ./node_modules/.bin/typedoc $args
        or:
        yarn exec typedoc $args
        */
    });
}
function publishToGithubPages() {
    return __awaiter(this, void 0, void 0, function* () {
        /*
        create temp clone dir
    
        git clone --reference-if-able $cwd --shared --branch $publishBranch $tempCloneDir
        git -C $tempCloneDir rm --force $publishDir
        cp -R $renderDir $tempCloneDir/$publishDir
        git add $tempCloneDir/$publishDir
        GIT_AUTHOR=$gitAuthor git -C $tempCloneDir commit -m 'Publish typedoc'
        git -C $tempCloneDir push origin $publishBranch:$publishBranch
         */
    });
}


/***/ }),

/***/ 747:
/***/ ((module) => {

module.exports = require("fs");;

/***/ }),

/***/ 622:
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ 669:
/***/ ((module) => {

module.exports = require("util");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	__nccwpck_require__.ab = __dirname + "/";/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __nccwpck_require__(283);
/******/ })()
;
//# sourceMappingURL=index.js.map