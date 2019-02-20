/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/enemies/blue_knight.js":
/*!************************************!*\
  !*** ./src/enemies/blue_knight.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemies/enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var BLUE_DOWN = [[1, 156, 22, 35], [1, 197, 22, 33], [1, 235, 22, 38], [1, 277, 22, 34]];
var BLUE_UP = [[81, 161, 22, 26], [81, 197, 22, 33], [81, 240, 22, 27], [81, 281, 22, 26]];
var BLUE_LEFT = [[37, 161, 29, 26], [36, 200, 32, 27], [37, 240, 29, 27]];
var BLUE_RIGHT = [[279, 161, 29, 26], [277, 200, 32, 27], [279, 240, 29, 27]];

var BlueKnight =
/*#__PURE__*/
function (_Enemy) {
  _inherits(BlueKnight, _Enemy);

  function BlueKnight(options) {
    var _this;

    _classCallCheck(this, BlueKnight);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BlueKnight).call(this, options));
    _this.frameLen = 4;
    _this.box = [44, 56];
    _this.life = 4;
    _this.delta = 0.75;
    _this.dropChance = 0.3;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BlueKnight, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.life <= 0) this.remove();
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life <= 0) {
        this.drawDeath(ctx);
      } else {
        if (this.walkDir === 'down') {
          this.frameLen = BLUE_DOWN.length;
          ctx.drawImage(this.enemySprite, BLUE_DOWN[this.frameIndex][0], BLUE_DOWN[this.frameIndex][1], BLUE_DOWN[this.frameIndex][2], BLUE_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], BLUE_DOWN[this.frameIndex][2] * this.scale, BLUE_DOWN[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'up') {
          this.frameLen = BLUE_UP.length;
          ctx.drawImage(this.enemySprite, BLUE_UP[this.frameIndex][0], BLUE_UP[this.frameIndex][1], BLUE_UP[this.frameIndex][2], BLUE_UP[this.frameIndex][3], this.pos[0], this.pos[1] - BLUE_UP[this.frameIndex][3] * this.scale + 74, BLUE_UP[this.frameIndex][2] * this.scale, BLUE_UP[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'left') {
          this.frameLen = BLUE_LEFT.length;
          ctx.drawImage(this.enemySprite, BLUE_LEFT[this.frameIndex][0], BLUE_LEFT[this.frameIndex][1], BLUE_LEFT[this.frameIndex][2], BLUE_LEFT[this.frameIndex][3], this.pos[0] - BLUE_LEFT[this.frameIndex][2] * this.scale + 66, this.pos[1], BLUE_LEFT[this.frameIndex][2] * this.scale, BLUE_LEFT[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'right') {
          this.frameLen = BLUE_RIGHT.length;
          ctx.drawImage(this.enemySprite2, BLUE_RIGHT[this.frameIndex][0], BLUE_RIGHT[this.frameIndex][1], BLUE_RIGHT[this.frameIndex][2], BLUE_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], BLUE_RIGHT[this.frameIndex][2] * this.scale, BLUE_RIGHT[this.frameIndex][3] * this.scale);
        }
      }

      this.update();
    }
  }]);

  return BlueKnight;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (BlueKnight);

/***/ }),

/***/ "./src/enemies/enemy.js":
/*!******************************!*\
  !*** ./src/enemies/enemy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../entity */ "./src/entity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var DEATH = [[83, 8, 16, 15], [110, 9, 14, 14], [132, 4, 22, 22], [157, 5, 24, 22]];

var Enemy =
/*#__PURE__*/
function (_Entity) {
  _inherits(Enemy, _Entity);

  function Enemy(options) {
    var _this;

    _classCallCheck(this, Enemy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Enemy).call(this, options));
    _this.link = options.link;
    _this.hitSound = new Audio('./assets/sounds/LTTP_Enemy_Hit.wav');
    _this.deathSound = new Audio('./assets/sounds/LTTP_Enemy_Kill.wav');
    _this.scale = 2;
    _this.frameIndex = 0;
    _this.tickCount = 0;
    _this.ticksPerFrame = 6;
    _this.walkDir = 'down';
    _this.life = 3;
    _this.delta = 1;
    _this.angle1 = true;
    _this.angle2 = true;
    _this.dropChance = 0.2;
    _this.move = _this.move.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleHit = _this.toggleHit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.drawDeath = _this.drawDeath.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Enemy, [{
    key: "vectorTowardsLink",
    value: function vectorTowardsLink(link) {
      var dx = link.x() - this.x();
      var dy = link.y() - this.y();
      var len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
      return [dx / len || 0, dy / len || 0];
    }
  }, {
    key: "findMoveAngle",
    value: function findMoveAngle() {
      var _this2 = this;

      var angleToLink = this.angleToPos(this.link.pos);
      var angleToLink1 = angleToLink;
      var angleToLink2 = angleToLink;
      var dist = this.distanceToObject(this.link);

      if (dist > 150) {
        dist = 150;
      }

      var timeOut;

      while (true) {
        if (this.link.walking) {
          if (timeOut) clearTimeout(timeOut);
          this.angle1 = true;
          this.angle2 = true;
        }

        if (this.angle1 && !this.checkObstacles(angleToLink1, dist)) {
          // if (!this.checkObstacles(angleToLink1, dist)) {
          this.angle2 = false;
          timeOut = setTimeout(function () {
            return _this2.angle2 = true;
          }, 4000);
          return angleToLink1;
        }

        if (this.angle2 && !this.checkObstacles(angleToLink2, dist)) {
          // if (!this.checkObstacles(angleToLink2, dist)) {
          this.angle1 = false;
          timeOut = setTimeout(function () {
            return _this2.angle1 = true;
          }, 4000);
          return angleToLink2;
        }

        if (angleToLink1 > Math.PI + angleToLink) {
          return angleToLink;
        }

        angleToLink1 += 0.1;
        angleToLink2 -= 0.1;
      }
    }
  }, {
    key: "checkObstacles",
    value: function checkObstacles(angle, dist) {
      var obstacles = this.game.obstacles;

      for (var i = 0; i < obstacles.length; i++) {
        var obj = obstacles[i];

        if (this.objectBetweenSelfAndLink(obj, angle, dist)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "objectBetweenSelfAndLink",
    value: function objectBetweenSelfAndLink(obj, angle, dist) {
      var borders = [[obj.x(), obj.y(), obj.x() + obj.width(), obj.y()], [obj.x(), obj.y(), obj.x(), obj.y() + obj.height()], [obj.x() + obj.width(), obj.y() + obj.height(), obj.x() + obj.width(), obj.y()], [obj.x() + obj.width(), obj.y() + obj.height(), obj.x(), obj.y() + obj.height()]];
      var corners = [[this.x(), this.y()], [this.x(), this.y() + this.height()], [this.x() + this.width(), this.y()], [this.x() + this.width(), this.y() + this.height()]];

      for (var i = 0; i < borders.length; i++) {
        for (var j = 0; j < corners.length; j++) {
          var corner = corners[j];
          var pos = borders[i];
          var newPos = this.findNewPoint(corner[0], corner[1], angle, dist);

          if (this.intersects.apply(this, [corner[0], corner[1], newPos.x, newPos.y].concat(_toConsumableArray(pos)))) {
            return true;
          }
        }
      }
    }
  }, {
    key: "intersects",
    value: function intersects(a, b, c, d, p, q, r, s) {
      var det, gamma, lambda;
      det = (c - a) * (s - q) - (r - p) * (d - b);

      if (det === 0) {
        return false;
      } else {
        lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
        gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
        return 0 < lambda && lambda < 1 && 0 < gamma && gamma < 1;
      }
    }
  }, {
    key: "findNewPoint",
    value: function findNewPoint(x, y, angle, distance) {
      var result = {};
      result.x = Math.round(Math.cos(angle) * distance + x);
      result.y = Math.round(Math.sin(angle) * distance + y);
      return result;
    }
  }, {
    key: "move",
    value: function move(timeDelta) {
      this.toggleMoveThrough();
      var vel;

      if (this.life <= 0) {
        vel = [0, 0];
      } else if (!this.hit) {
        var angle = this.findMoveAngle();
        this.vect = [Math.cos(angle), Math.sin(angle)];
        vel = [this.vect[0] * this.delta, this.vect[1] * this.delta];
        this.setWalkDir();
      } else {
        var delta = 4;
        vel = [this.hitVect[0] * delta, this.hitVect[1] * delta];
      }

      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
          offsetX = vel[0] * velocityScale,
          offsetY = vel[1] * velocityScale;
      var newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

      if (this.game.enemyIsOutOfBounds(newPos, this)) {
        var newPosX = [this.pos[0] + offsetX, this.pos[1]];
        var newPosY = [this.pos[0], this.pos[1] + offsetY];

        if (!this.game.enemyIsOutOfBounds(newPosX, this)) {
          this.pos = newPosX;
        }

        if (!this.game.enemyIsOutOfBounds(newPosY, this)) {
          this.pos = newPosY;
        }
      } else {
        this.pos = newPos;
      }
    }
  }, {
    key: "toggleMoveThrough",
    value: function toggleMoveThrough() {
      if (!this.hit && this.moveThrough && !this.game.enemyWillCollideWithEnemy(this.pos, this)) {
        this.moveThrough = false;
      }
    }
  }, {
    key: "setWalkDir",
    value: function setWalkDir() {
      var linkVect = this.vectorTowardsLink(this.link);

      if (linkVect[0] > 0 && linkVect[1] > 0) {
        if (linkVect[0] > linkVect[1]) {
          if (this.walkDir !== 'right') this.frameIndex = 0;
          this.walkDir = 'right';
        } else {
          if (this.walkDir !== 'down') this.frameIndex = 0;
          this.walkDir = 'down';
        }
      } else if (linkVect[0] > 0 && linkVect[1] < 0) {
        if (linkVect[0] > Math.abs(linkVect[1])) {
          if (this.walkDir !== 'right') this.frameIndex = 0;
          this.walkDir = 'right';
        } else {
          if (this.walkDir !== 'up') this.frameIndex = 0;
          this.walkDir = 'up';
        }
      } else if (linkVect[0] < 0 && linkVect[1] > 0) {
        if (Math.abs(linkVect[0]) > linkVect[1]) {
          if (this.walkDir !== 'left') this.frameIndex = 0;
          this.walkDir = 'left';
        } else {
          if (this.walkDir !== 'down') this.frameIndex = 0;
          this.walkDir = 'down';
        }
      } else if (linkVect[0] < 0 && linkVect[1] < 0) {
        if (Math.abs(linkVect[0]) > Math.abs(linkVect[1])) {
          if (this.walkDir !== 'left') this.frameIndex = 0;
          this.walkDir = 'left';
        } else {
          if (this.walkDir !== 'up') this.frameIndex = 0;
          this.walkDir = 'up';
        }
      }
    }
  }, {
    key: "hitByLink",
    value: function hitByLink() {
      var _this3 = this;

      if (!this.hit) {
        this.hitSound.play();
        this.hitVect = [this.vect[0] * -1, this.vect[1] * -1];
        this.hit = true;
        this.moveThrough = true;
        var spin = false;
        if (this.link.spinning) spin = true;
        setTimeout(function () {
          return _this3.toggleHit(spin);
        }, 300);
      }
    }
  }, {
    key: "toggleHit",
    value: function toggleHit(spin) {
      this.hit = !this.hit;

      if (spin) {
        this.life -= 2;
      } else {
        this.life -= 1;
      }

      if (this.life <= 0) {
        this.ticksPerFrame = 2;
        this.frameIndex = 0;
      }
    }
  }, {
    key: "drawDeath",
    value: function drawDeath(ctx) {
      this.deathSound.play();
      ctx.drawImage(this.deathSprite, DEATH[this.frameIndex][0], DEATH[this.frameIndex][1], DEATH[this.frameIndex][2], DEATH[this.frameIndex][3], this.pos[0], this.pos[1], DEATH[this.frameIndex][2] * this.scale, DEATH[this.frameIndex][3] * this.scale);
    }
  }]);

  return Enemy;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
/* harmony default export */ __webpack_exports__["default"] = (Enemy);

/***/ }),

/***/ "./src/enemies/lynel.js":
/*!******************************!*\
  !*** ./src/enemies/lynel.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemies/enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var LYNEL_DOWN = [[241, 321, 22, 26], [241, 361, 22, 26], [241, 401, 22, 26]];
var LYNEL_UP = [[321, 318, 22, 31], [321, 358, 22, 31]];
var LYNEL_LEFT = [[280, 320, 24, 27], [280, 361, 24, 26], [281, 400, 23, 27]];
var LYNEL_RIGHT = [[41, 320, 24, 27], [41, 361, 24, 26], [41, 400, 23, 27]];

var Lynel =
/*#__PURE__*/
function (_Enemy) {
  _inherits(Lynel, _Enemy);

  function Lynel(options) {
    var _this;

    _classCallCheck(this, Lynel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Lynel).call(this, options));
    _this.frameLen = 3;
    _this.box = [44, 52];
    _this.life = 4;
    _this.delta = 1.5;
    _this.dropChance = 1;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Lynel, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.life <= 0) this.remove();
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life <= 0) {
        this.drawDeath(ctx);
      } else {
        if (this.walkDir === 'down') {
          this.frameLen = LYNEL_DOWN.length;
          ctx.drawImage(this.enemySprite, LYNEL_DOWN[this.frameIndex][0], LYNEL_DOWN[this.frameIndex][1], LYNEL_DOWN[this.frameIndex][2], LYNEL_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], LYNEL_DOWN[this.frameIndex][2] * this.scale, LYNEL_DOWN[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'up') {
          this.frameLen = LYNEL_UP.length;
          ctx.drawImage(this.enemySprite, LYNEL_UP[this.frameIndex][0], LYNEL_UP[this.frameIndex][1], LYNEL_UP[this.frameIndex][2], LYNEL_UP[this.frameIndex][3], this.pos[0], this.pos[1] - LYNEL_UP[this.frameIndex][3] * this.scale + 48, LYNEL_UP[this.frameIndex][2] * this.scale, LYNEL_UP[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'left') {
          this.frameLen = LYNEL_LEFT.length;
          ctx.drawImage(this.enemySprite, LYNEL_LEFT[this.frameIndex][0], LYNEL_LEFT[this.frameIndex][1], LYNEL_LEFT[this.frameIndex][2], LYNEL_LEFT[this.frameIndex][3], this.pos[0] - LYNEL_LEFT[this.frameIndex][2] * this.scale + 28, this.pos[1], LYNEL_LEFT[this.frameIndex][2] * this.scale, LYNEL_LEFT[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'right') {
          this.frameLen = LYNEL_RIGHT.length;
          ctx.drawImage(this.enemySprite2, LYNEL_RIGHT[this.frameIndex][0], LYNEL_RIGHT[this.frameIndex][1], LYNEL_RIGHT[this.frameIndex][2], LYNEL_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], LYNEL_RIGHT[this.frameIndex][2] * this.scale, LYNEL_RIGHT[this.frameIndex][3] * this.scale);
        }
      }

      this.update();
    }
  }]);

  return Lynel;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Lynel);

/***/ }),

/***/ "./src/enemies/moblin.js":
/*!*******************************!*\
  !*** ./src/enemies/moblin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemies/enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var MOBLIN_DOWN = [[124, 0, 16, 28], [124, 38, 16, 32], [123, 81, 16, 28], [124, 121, 16, 26]];
var MOBLIN_UP = [[203, 1, 18, 25], [203, 41, 18, 25], [203, 80, 18, 28], [204, 121, 16, 25]];
var MOBLIN_LEFT = [[225, 15, 19, 25], [222, 56, 24, 24], [226, 95, 17, 25], [227, 136, 14, 24]];
var MOBLIN_RIGHT = [[162, 1, 19, 25], [160, 42, 24, 24], [163, 81, 17, 25], [165, 122, 14, 24]];

var Moblin =
/*#__PURE__*/
function (_Enemy) {
  _inherits(Moblin, _Enemy);

  function Moblin(options) {
    var _this;

    _classCallCheck(this, Moblin);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Moblin).call(this, options));
    _this.frameLen = 4;
    _this.box = [28, 48];
    _this.delta = 1;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Moblin, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.life <= 0) this.remove();
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life <= 0) {
        this.drawDeath(ctx);
      } else {
        if (this.walkDir === 'down') {
          ctx.drawImage(this.enemySprite, MOBLIN_DOWN[this.frameIndex][0], MOBLIN_DOWN[this.frameIndex][1], MOBLIN_DOWN[this.frameIndex][2], MOBLIN_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], MOBLIN_DOWN[this.frameIndex][2] * this.scale, MOBLIN_DOWN[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'up') {
          ctx.drawImage(this.enemySprite, MOBLIN_UP[this.frameIndex][0], MOBLIN_UP[this.frameIndex][1], MOBLIN_UP[this.frameIndex][2], MOBLIN_UP[this.frameIndex][3], this.pos[0], this.pos[1] - MOBLIN_UP[this.frameIndex][3] * this.scale + 48, MOBLIN_UP[this.frameIndex][2] * this.scale, MOBLIN_UP[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'left') {
          ctx.drawImage(this.enemySprite, MOBLIN_LEFT[this.frameIndex][0], MOBLIN_LEFT[this.frameIndex][1], MOBLIN_LEFT[this.frameIndex][2], MOBLIN_LEFT[this.frameIndex][3], this.pos[0] - MOBLIN_LEFT[this.frameIndex][2] * this.scale + 28, this.pos[1], MOBLIN_LEFT[this.frameIndex][2] * this.scale, MOBLIN_LEFT[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'right') {
          ctx.drawImage(this.enemySprite, MOBLIN_RIGHT[this.frameIndex][0], MOBLIN_RIGHT[this.frameIndex][1], MOBLIN_RIGHT[this.frameIndex][2], MOBLIN_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], MOBLIN_RIGHT[this.frameIndex][2] * this.scale, MOBLIN_RIGHT[this.frameIndex][3] * this.scale);
        }
      }

      this.update();
    }
  }]);

  return Moblin;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Moblin);

/***/ }),

/***/ "./src/enemies/mummy.js":
/*!******************************!*\
  !*** ./src/enemies/mummy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemies/enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var MUMMY_DOWN = [[124, 681, 16, 26], [124, 721, 16, 25]];
var MUMMY_UP = [[204, 681, 16, 26], [204, 721, 16, 25]];
var MUMMY_LEFT = [[164, 681, 15, 25], [165, 721, 14, 26]];
var MUMMY_RIGHT = [[166, 681, 15, 25], [166, 721, 14, 26]];

var Mummy =
/*#__PURE__*/
function (_Enemy) {
  _inherits(Mummy, _Enemy);

  function Mummy(options) {
    var _this;

    _classCallCheck(this, Mummy);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Mummy).call(this, options));
    _this.frameLen = 2;
    _this.box = [30, 50];
    _this.life = 2;
    _this.delta = 0.6;
    _this.dropChance = 0.1;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Mummy, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.life <= 0) this.remove();
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life <= 0) {
        this.drawDeath(ctx);
      } else {
        if (this.walkDir === 'down') {
          this.frameLen = MUMMY_DOWN.length;
          ctx.drawImage(this.enemySprite, MUMMY_DOWN[this.frameIndex][0], MUMMY_DOWN[this.frameIndex][1], MUMMY_DOWN[this.frameIndex][2], MUMMY_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], MUMMY_DOWN[this.frameIndex][2] * this.scale, MUMMY_DOWN[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'up') {
          this.frameLen = MUMMY_UP.length;
          ctx.drawImage(this.enemySprite, MUMMY_UP[this.frameIndex][0], MUMMY_UP[this.frameIndex][1], MUMMY_UP[this.frameIndex][2], MUMMY_UP[this.frameIndex][3], this.pos[0], this.pos[1], MUMMY_UP[this.frameIndex][2] * this.scale, MUMMY_UP[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'left') {
          this.frameLen = MUMMY_LEFT.length;
          ctx.drawImage(this.enemySprite, MUMMY_LEFT[this.frameIndex][0], MUMMY_LEFT[this.frameIndex][1], MUMMY_LEFT[this.frameIndex][2], MUMMY_LEFT[this.frameIndex][3], this.pos[0], this.pos[1], MUMMY_LEFT[this.frameIndex][2] * this.scale, MUMMY_LEFT[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'right') {
          this.frameLen = MUMMY_RIGHT.length;
          ctx.drawImage(this.enemySprite2, MUMMY_RIGHT[this.frameIndex][0], MUMMY_RIGHT[this.frameIndex][1], MUMMY_RIGHT[this.frameIndex][2], MUMMY_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], MUMMY_RIGHT[this.frameIndex][2] * this.scale, MUMMY_RIGHT[this.frameIndex][3] * this.scale);
        }
      }

      this.update();
    }
  }]);

  return Mummy;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Mummy);

/***/ }),

/***/ "./src/enemies/snake.js":
/*!******************************!*\
  !*** ./src/enemies/snake.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enemy */ "./src/enemies/enemy.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


var SNAKE_DOWN = [[5, 766, 13, 16], [5, 806, 13, 16]];
var SNAKE_UP = [[86, 766, 12, 16], [86, 806, 12, 16]];
var SNAKE_LEFT = [[44, 766, 16, 16], [44, 806, 16, 16]];
var SNAKE_RIGHT = [[285, 766, 16, 16], [285, 806, 16, 16]];

var Snake =
/*#__PURE__*/
function (_Enemy) {
  _inherits(Snake, _Enemy);

  function Snake(options) {
    var _this;

    _classCallCheck(this, Snake);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Snake).call(this, options));
    _this.frameLen = 2;
    _this.box = [24, 32];
    _this.life = 1;
    _this.delta = 3;
    _this.dropChance = 0.2;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Snake, [{
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.life <= 0) this.remove();
          this.frameIndex = 0;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life <= 0) {
        this.drawDeath(ctx);
      } else {
        if (this.walkDir === 'down') {
          this.frameLen = SNAKE_DOWN.length;
          ctx.drawImage(this.enemySprite, SNAKE_DOWN[this.frameIndex][0], SNAKE_DOWN[this.frameIndex][1], SNAKE_DOWN[this.frameIndex][2], SNAKE_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], SNAKE_DOWN[this.frameIndex][2] * this.scale, SNAKE_DOWN[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'up') {
          this.frameLen = SNAKE_UP.length;
          ctx.drawImage(this.enemySprite, SNAKE_UP[this.frameIndex][0], SNAKE_UP[this.frameIndex][1], SNAKE_UP[this.frameIndex][2], SNAKE_UP[this.frameIndex][3], this.pos[0], this.pos[1], SNAKE_UP[this.frameIndex][2] * this.scale, SNAKE_UP[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'left') {
          this.frameLen = SNAKE_LEFT.length;
          ctx.drawImage(this.enemySprite, SNAKE_LEFT[this.frameIndex][0], SNAKE_LEFT[this.frameIndex][1], SNAKE_LEFT[this.frameIndex][2], SNAKE_LEFT[this.frameIndex][3], this.pos[0], this.pos[1], SNAKE_LEFT[this.frameIndex][2] * this.scale, SNAKE_LEFT[this.frameIndex][3] * this.scale);
        } else if (this.walkDir === 'right') {
          this.frameLen = SNAKE_RIGHT.length;
          ctx.drawImage(this.enemySprite2, SNAKE_RIGHT[this.frameIndex][0], SNAKE_RIGHT[this.frameIndex][1], SNAKE_RIGHT[this.frameIndex][2], SNAKE_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], SNAKE_RIGHT[this.frameIndex][2] * this.scale, SNAKE_RIGHT[this.frameIndex][3] * this.scale);
        }
      }

      this.update();
    }
  }]);

  return Snake;
}(_enemy__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Snake);

/***/ }),

/***/ "./src/entity.js":
/*!***********************!*\
  !*** ./src/entity.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Entity =
/*#__PURE__*/
function () {
  function Entity(options) {
    _classCallCheck(this, Entity);

    this.enemySprite = new Image();
    this.enemySprite.src = "./assets/sprites/enemies.png";
    this.enemySprite2 = new Image();
    this.enemySprite2.src = "./assets/sprites/enemies2.png";
    this.deathSprite = new Image();
    this.deathSprite.src = "./assets/sprites/death-effects.png";
    this.itemSprite = new Image();
    this.itemSprite.src = "./assets/sprites/items-objects.gif";
    this.pos = options.pos;
    this.box = options.box;
    this.game = options.game;
  }

  _createClass(Entity, [{
    key: "x",
    value: function x() {
      return this.pos[0];
    }
  }, {
    key: "y",
    value: function y() {
      return this.pos[1];
    }
  }, {
    key: "width",
    value: function width() {
      return this.box[0];
    }
  }, {
    key: "height",
    value: function height() {
      return this.box[1];
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherObject) {
      return this.x() < otherObject.x() + otherObject.width() && this.x() + this.width() > otherObject.x() && this.y() < otherObject.y() + otherObject.height() && this.y() + this.height() > otherObject.y();
    }
  }, {
    key: "willCollideWith",
    value: function willCollideWith(pos, box) {
      return this.x() < pos[0] + box[0] && this.x() + this.width() > pos[0] && this.y() < pos[1] + box[1] && this.y() + this.height() > pos[1];
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.remove(this);
    }
  }, {
    key: "angleToPos",
    value: function angleToPos(pos) {
      var dx = this.x() - pos[0];
      var dy = this.y() - pos[1];

      if (dx > 0) {
        return Math.atan(dy / dx) + Math.PI;
      } else {
        return Math.atan(dy / dx);
      }
    }
  }, {
    key: "distanceToObject",
    value: function distanceToObject(obj) {
      return Math.sqrt(Math.pow(this.x() - obj.x(), 2) + Math.pow(this.y() - obj.y(), 2));
    }
  }, {
    key: "angleRangeToObject",
    value: function angleRangeToObject(obj) {
      var lowerLeft = this.angleToPos([obj.x(), obj.y() + obj.height()]);
      var lowerRight = this.angleToPos([obj.x() + obj.width(), obj.y() + obj.height()]);
      var upperLeft = this.angleToPos([obj.x(), obj.y()]);
      var upperRight = this.angleToPos([obj.x() + obj.width(), obj.y()]);
      var max = Math.max(lowerLeft, lowerRight, upperLeft, upperRight);
      var min = Math.min(lowerLeft, lowerRight, upperLeft, upperRight);
      return [min, max];
    }
  }]);

  return Entity;
}();

/* harmony default export */ __webpack_exports__["default"] = (Entity);

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./link */ "./src/link.js");
/* harmony import */ var _obstacle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./obstacle */ "./src/obstacle.js");
/* harmony import */ var _enemies_moblin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enemies/moblin */ "./src/enemies/moblin.js");
/* harmony import */ var _enemies_lynel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enemies/lynel */ "./src/enemies/lynel.js");
/* harmony import */ var _enemies_blue_knight__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enemies/blue_knight */ "./src/enemies/blue_knight.js");
/* harmony import */ var _heart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./heart */ "./src/heart.js");
/* harmony import */ var _enemies_snake__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enemies/snake */ "./src/enemies/snake.js");
/* harmony import */ var _enemies_mummy__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./enemies/mummy */ "./src/enemies/mummy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }









var SPAWN_POS = [[340, 650], [750, 650], [285, -50], [720, -50]];

var Game =
/*#__PURE__*/
function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.pauseSound = new Audio('./assets/sounds/LTTP_Menu_Cursor.wav');
    this.heartSound = new Audio('./assets/sounds/LTTP_RefillHealth.wav');
    this.overworldMusic = new Audio('./assets/sounds/overworld_theme.mp3');
    this.kakarikoMusic = new Audio('./assets/sounds/kakariko_village.mp3');
    this.selectMusic = new Audio('./assets/sounds/select_screen.mp3');
    this.muteButton = document.getElementById('mute');
    this.soundButton = document.getElementById('sound');
    this.killCount = document.getElementById('kill-count');
    this.link = new _link__WEBPACK_IMPORTED_MODULE_0__["default"]({
      game: this
    });
    this.obstacles = [];
    this.enemies = [];
    this.items = [];
    this.song = this.kakarikoMusic;
    this.muted = options.muted;
    this.spawnEnemies = false;
    this.count = 0;
    this.parseKeyDown = this.parseKeyDown.bind(this);
    this.togglePause = this.togglePause.bind(this);
    this.muteGame = this.muteGame.bind(this);
    this.unmuteGame = this.unmuteGame.bind(this);
    this.stopMusic = this.stopMusic.bind(this);
    this.music = this.music.bind(this);
    this.updateKillCount = this.updateKillCount.bind(this);
    this.muteButton.onclick = this.muteGame;
    this.soundButton.onclick = this.unmuteGame;
    this.addObstacles();
    this.music(this.kakarikoMusic);
    this.updateKillCount();
  }

  _createClass(Game, [{
    key: "parseKeyDown",
    value: function parseKeyDown(e) {
      // e.preventDefault();
      if (e.keyCode === 13) {
        if (!this.spawnEnemies) {
          this.addEnemies();
          var enterEl = document.getElementById('enter');
          enterEl.style.opacity = 0;
          var controlsEl = document.getElementById('controls');
          controlsEl.style.opacity = 0;
          this.spawnEnemies = true;
        }
      } else if (e.keyCode === 80) {
        if (!this.gameover) this.togglePause();
      }
    }
  }, {
    key: "muteGame",
    value: function muteGame() {
      if (!this.muted) {
        this.soundButton.classList.toggle("selected");
        this.muteButton.classList.toggle("selected");
        this.song.pause();
        this.song.currentTime = 0;
        this.muted = true;
      }
    }
  }, {
    key: "unmuteGame",
    value: function unmuteGame() {
      if (this.muted) {
        this.soundButton.classList.toggle("selected");
        this.muteButton.classList.toggle("selected");
        this.muted = false;
        this.song.play();
      }
    }
  }, {
    key: "music",
    value: function music(song) {
      var _this = this;

      this.song.pause();
      this.song.currentTime = 0;
      this.song = song;

      this.song.onended = function () {
        return _this.song.play();
      };

      if (!this.muted) {
        this.song.play();
      }
    }
  }, {
    key: "stopMusic",
    value: function stopMusic() {
      this.song.pause();
    }
  }, {
    key: "togglePause",
    value: function togglePause() {
      var pauseEl = document.getElementById('pause');
      this.paused = !this.paused;

      if (this.paused) {
        this.pauseSound.play();
        pauseEl.style.visibility = 'visible';
      } else {
        pauseEl.style.visibility = 'hidden';
      }
    }
  }, {
    key: "allObjects",
    value: function allObjects() {
      return [this.link].concat(this.enemies).concat(this.items);
    }
  }, {
    key: "allMovingObjects",
    value: function allMovingObjects() {
      return [this.link].concat(this.enemies);
    }
  }, {
    key: "add",
    value: function add(object) {
      if (object instanceof _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        this.obstacles.push(object);
      } else {
        this.enemies.push(object);
      }
    }
  }, {
    key: "addEnemyToRandomSpawn",
    value: function addEnemyToRandomSpawn() {
      var pos = SPAWN_POS[Math.floor(Math.random() * 4)];

      while (this.enemyWillCollideWithEnemy(pos, {
        box: [50, 50]
      })) {
        pos = SPAWN_POS[Math.floor(Math.random() * 4)];
      }

      var enemyIdx = Math.random();
      var enemy;

      if (enemyIdx > 0.8) {
        enemy = new _enemies_lynel__WEBPACK_IMPORTED_MODULE_3__["default"]({
          game: this,
          link: this.link,
          pos: pos
        });
      } else if (enemyIdx > 0.7) {
        enemy = new _enemies_snake__WEBPACK_IMPORTED_MODULE_6__["default"]({
          game: this,
          link: this.link,
          pos: pos
        });
      } else if (enemyIdx > 0.4) {
        enemy = new _enemies_moblin__WEBPACK_IMPORTED_MODULE_2__["default"]({
          game: this,
          link: this.link,
          pos: pos
        });
      } else if (enemyIdx > 0.2) {
        enemy = new _enemies_mummy__WEBPACK_IMPORTED_MODULE_7__["default"]({
          game: this,
          link: this.link,
          pos: pos
        });
      } else {
        enemy = new _enemies_blue_knight__WEBPACK_IMPORTED_MODULE_4__["default"]({
          game: this,
          link: this.link,
          pos: pos
        });
      }

      enemy.delta = enemy.delta + this.count / 30;
      this.add(enemy);
    }
  }, {
    key: "addEnemies",
    value: function addEnemies() {
      var _this2 = this;

      this.music(this.overworldMusic);
      SPAWN_POS.forEach(function (pos) {
        var enemyIdx = Math.random();

        if (enemyIdx > 0.5) {
          _this2.add(new _enemies_moblin__WEBPACK_IMPORTED_MODULE_2__["default"]({
            game: _this2,
            link: _this2.link,
            pos: pos
          }));
        } else {
          _this2.add(new _enemies_blue_knight__WEBPACK_IMPORTED_MODULE_4__["default"]({
            game: _this2,
            link: _this2.link,
            pos: pos
          }));
        }
      });
    }
  }, {
    key: "addHeart",
    value: function addHeart(pos) {
      this.items.push(new _heart__WEBPACK_IMPORTED_MODULE_5__["default"]({
        pos: pos,
        game: this
      }));
    }
  }, {
    key: "remove",
    value: function remove(object) {
      var pos = object.pos;
      if (Math.random() < object.dropChance) this.addHeart(pos);
      this.enemies.splice(this.enemies.indexOf(object), 1);
      this.count += 1;
      this.updateKillCount();
    }
  }, {
    key: "updateKillCount",
    value: function updateKillCount() {
      this.killCount.innerHTML = "".concat(this.count);
    }
  }, {
    key: "removeItem",
    value: function removeItem(object) {
      object.removeTimeouts();
      this.items.splice(this.items.indexOf(object), 1);
    }
  }, {
    key: "isOutOfBounds",
    value: function isOutOfBounds(pos, box) {
      return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X - box[0] || pos[1] > Game.DIM_Y - box[1] || this.willCollideWithObstacle(pos, box);
    }
  }, {
    key: "enemyIsOutOfBounds",
    value: function enemyIsOutOfBounds(pos, enemy) {
      return this.willCollideWithObstacle(pos, enemy.box) || this.enemyWillCollideWithEnemy(pos, enemy) && !enemy.moveThrough;
    }
  }, {
    key: "enemyWillCollideWithEnemy",
    value: function enemyWillCollideWithEnemy(pos, enemy) {
      for (var i = 0; i < this.enemies.length; i++) {
        var otherEnemy = this.enemies[i];
        if (enemy === otherEnemy || otherEnemy.moveThrough) continue;
        if (otherEnemy.willCollideWith(pos, enemy.box)) return true;
      }

      return false;
    }
  }, {
    key: "willCollideWithObstacle",
    value: function willCollideWithObstacle(pos, box) {
      for (var i = 0; i < this.obstacles.length; i++) {
        var obstacle = this.obstacles[i];

        if (obstacle.willCollideWith(pos, box)) {
          return true;
        }
      }

      return false;
    }
  }, {
    key: "linkCollidedWithItem",
    value: function linkCollidedWithItem() {
      for (var i = 0; i < this.items.length; i++) {
        var heart = this.items[i];

        if (heart.isCollidedWith(this.link)) {
          this.heartSound.play();
          if (this.link.life < 3) this.link.life += 1;
          this.removeItem(heart);
        }
      }
    }
  }, {
    key: "checkEnemyCollidedWithLink",
    value: function checkEnemyCollidedWithLink() {
      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];

        if (enemy.isCollidedWith(this.link)) {
          this.link.hitByEnemy(enemy.vect);
        }
      }

      return false;
    }
  }, {
    key: "checkEnemyWillCollideWithSword",
    value: function checkEnemyWillCollideWithSword() {
      for (var i = 0; i < this.enemies.length; i++) {
        var enemy = this.enemies[i];

        if (this.link.hurtBox && enemy.isCollidedWith(this.link.hurtBox())) {
          enemy.hitByLink();
        }
      }

      return false;
    }
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.allMovingObjects().forEach(function (object) {
        object.move(delta);
      });
    }
  }, {
    key: "step",
    value: function step(delta) {
      if (!this.paused) {
        if (this.spawnEnemies && this.enemies.length <= 8 && this.enemies.length < 4 + Math.floor(this.count / 10)) this.addEnemyToRandomSpawn();
        this.moveObjects(delta);
        this.checkEnemyWillCollideWithSword();
        this.checkEnemyCollidedWithLink();
        this.linkCollidedWithItem();
      }
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (!this.paused) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "#489847";
        ctx.fillRect(158, 90, 162, 202);
        ctx.fillRect(158, 367, 162, 202);
        ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 340, 32, 32);
        ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 28, 305, 32, 32);
        ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 340, 32, 32);
        ctx.drawImage(this.link.itemSprite, 174, 500, 16, 16, 1005, 305, 32, 32);
        this.allObjects().forEach(function (object) {
          object.draw(ctx);
        }); // ctx.drawImage(this.link.itemSprite, 188, 550, 14, 22, 333, 340, 28, 44);

        if (this.link.life <= 0) {
          this.gameover = true;
          this.music(this.selectMusic);
        }
      } // this.obstacles.forEach((object) => {
      //   object.draw(ctx);
      // });

    }
  }, {
    key: "addObstacles",
    value: function addObstacles() {
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, -400],
        box: [525, 593]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [125, -400],
        box: [55, 477]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [125, 77],
        box: [15, 40]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [180, -400],
        box: [14, 438]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [436, 214],
        box: [76, 70]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, 537],
        box: [534, 463]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, 487],
        box: [496, 50]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [96, 497],
        box: [18, 40]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [114, 511],
        box: [10, 26]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [415, -400],
        box: [115, 472]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [434, 575],
        box: [153, 425]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [447, 560],
        box: [13, 15]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [566, 560],
        box: [13, 15]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [460, 542],
        box: [106, 33]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [490, 528],
        box: [45, 14]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, 193],
        box: [480, 28]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, 220],
        box: [458, 195]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [-400, 415],
        box: [475, 71]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [688, 391],
        box: [116, 150]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [680, 410],
        box: [8, 92]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [671, 420],
        box: [9, 34]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [803, 420],
        box: [17, 38]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [720, 375],
        box: [52, 16]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [648, 118],
        box: [116, 150]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [640, 136],
        box: [8, 92]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [631, 144],
        box: [9, 34]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [763, 144],
        box: [17, 38]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [680, 102],
        box: [52, 16]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [890, -400],
        box: [160, 470]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [950, 70],
        box: [100, 115]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [927, 70],
        box: [23, 60]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [1005, 185],
        box: [45, 220]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [989, 185],
        box: [16, 51]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [929, 520],
        box: [121, 480]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [989, 404],
        box: [61, 116]
      }));
      this.add(new _obstacle__WEBPACK_IMPORTED_MODULE_1__["default"]({
        pos: [953, 499],
        box: [36, 21]
      }));
    }
  }]);

  return Game;
}();

Game.DIM_X = 1050;
Game.DIM_Y = 600;
Game.FPS = 32;
/* harmony default export */ __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ "./src/game.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var GameView =
/*#__PURE__*/
function () {
  function GameView(game, ctx) {
    _classCallCheck(this, GameView);

    this.ctx = ctx;
    this.game = game;
    this.link = this.game.link;
    this.animate = this.animate.bind(this);
    this.restartSound = new Audio('./assets/sounds/LTTP_Secret.wav');
    this.parseKeyDown = this.parseKeyDown.bind(this);
  }

  _createClass(GameView, [{
    key: "bindKeyHandlers",
    value: function bindKeyHandlers() {
      document.addEventListener('keydown', this.parseKeyDown);
      document.addEventListener('keydown', this.link.parseKeyDown);
      document.addEventListener('keydown', this.game.parseKeyDown);
      document.addEventListener('keyup', this.link.parseKeyUp);
    }
  }, {
    key: "start",
    value: function start() {
      this.bindKeyHandlers();
      this.lastTime = 0;
      requestAnimationFrame(this.animate);
    }
  }, {
    key: "animate",
    value: function animate(time) {
      var _this = this;

      if (!this.game.gameover) {
        var timeDelta = time - this.lastTime;
        this.game.step(timeDelta);
        this.game.draw(this.ctx);
        this.lastTime = time;
        requestAnimationFrame(this.animate);
      } else {
        this.btn = document.createElement("BUTTON");
        var text = document.createTextNode("restart");
        this.gameover = document.getElementById('gameover');
        this.btn.appendChild(text);

        this.btn.onclick = function () {
          return _this.newGame();
        };

        this.gameover.appendChild(this.btn);
        this.gameover.style.visibility = 'visible';
        this.gameover.style.opacity = 1;
      }
    }
  }, {
    key: "newGame",
    value: function newGame() {
      this.restartSound.play();
      this.gameover.removeChild(this.btn);
      this.gameover.style.visibility = 'hidden';
      this.gameover.style.opacity = 0;
      var enterEl = document.getElementById('enter');
      enterEl.style.opacity = 1;
      var controlsEl = document.getElementById('controls');
      controlsEl.style.opacity = 1;
      this.game.stopMusic();
      this.game = new _game__WEBPACK_IMPORTED_MODULE_0__["default"]({
        muted: this.game.muted
      });
      this.link = this.game.link;
      this.start();
    }
  }, {
    key: "parseKeyDown",
    value: function parseKeyDown(e) {
      // e.preventDefault();
      if (e.keyCode === 13) {
        if (this.game.gameover) this.newGame();
      }
    }
  }]);

  return GameView;
}();

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ }),

/***/ "./src/heart.js":
/*!**********************!*\
  !*** ./src/heart.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Heart =
/*#__PURE__*/
function (_Entity) {
  _inherits(Heart, _Entity);

  function Heart(options) {
    var _this;

    _classCallCheck(this, Heart);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Heart).call(this, options));
    _this.box = [14, 13];
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.startFlash = _this.startFlash.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeTimeouts = _this.removeTimeouts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.tickCount = 0;
    _this.ticksPerFrame = 4;
    _this.flashCount = false;
    _this.flashTimeout = setTimeout(_this.startFlash, 10000);
    return _this;
  }

  _createClass(Heart, [{
    key: "startFlash",
    value: function startFlash() {
      var _this2 = this;

      this.flash = true;
      this.removeTimout = setTimeout(function () {
        return _this2.game.removeItem(_this2);
      }, 5000);
    }
  }, {
    key: "removeTimeouts",
    value: function removeTimeouts() {
      clearTimeout(this.flashTimeout);
      clearTimeout(this.removeTimout);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.flash && this.flashCount) {
        this.update();
      } else {
        ctx.drawImage(this.itemSprite, 153, 30, 14, 13, this.pos[0], this.pos[1], 21, 19.5);
        this.update();
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;
        this.flashCount = !this.flashCount;
      }
    }
  }]);

  return Heart;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Heart);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_view */ "./src/game_view.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./src/game.js");


document.addEventListener("DOMContentLoaded", function () {
  var canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = _game__WEBPACK_IMPORTED_MODULE_1__["default"].DIM_X;
  canvasEl.height = _game__WEBPACK_IMPORTED_MODULE_1__["default"].DIM_Y;
  var ctx = canvasEl.getContext("2d");
  var game = new _game__WEBPACK_IMPORTED_MODULE_1__["default"]({
    muted: true
  });
  new _game_view__WEBPACK_IMPORTED_MODULE_0__["default"](game, ctx).start();
});

/***/ }),

/***/ "./src/link.js":
/*!*********************!*\
  !*** ./src/link.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sword__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sword */ "./src/sword.js");
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var WALK_DOWN = [3, 33, 63, 93, 123, 153, 183, 213];
var WALK_UP = [2, 32, 62, 92, 122, 152, 182, 212];
var WALK_SIDE = [241, 272, 301, 331, 361, 392];
var SWORD_UP = [[0, 181, 22, 22], [30, 177, 22, 30], [61, 174, 20, 35], [89, 177, 24, 30], [115, 180, 32, 23]];
var SWORD_DOWN = [[1, 90, 20, 23], [30, 90, 22, 24], [61, 86, 20, 31], [91, 86, 20, 31], [115, 87, 28, 29], [145, 88, 32, 27]];
var SWORD_LEFT = [[242, 90, 18, 23], [268, 90, 26, 24], [295, 91, 31, 21], [327, 91, 28, 21], [359, 86, 23, 31], [393, 91, 16, 22]];
var SWORD_RIGHT = [[242, 180, 18, 23], [268, 180, 26, 24], [295, 181, 31, 21], [327, 181, 28, 21], [359, 176, 23, 31], [393, 181, 16, 22]];
var SPIN_DOWN = [[504, 139, 20, 26, 0, 4], [532, 126, 15, 36, 0, 14], [576, 138, 20, 26, 0, 4], [604, 142, 28, 22, 0, 0], [638, 142, 28, 22, 0, 0], [673, 141, 17, 31, 0, 0], [695, 142, 28, 22, 12, 0], [729, 142, 28, 22, 12, 0], [764, 136, 16, 28, 0, 6], [791, 138, 20, 26, 0, 4], [818, 142, 16, 22, 0, 0]];
var SPIN_UP = [[487, 60, 20, 27, 3, 0], [516, 61, 15, 35, -1, 0], [595, 60, 20, 27, 3, 0], [620, 60, 28, 22, 11, 0], [657, 54, 16, 28, 0, 6], [681, 60, 28, 22, 0, 0], [720, 60, 16, 31, 0, 0], [746, 61, 17, 31, 0, 0], [767, 61, 20, 27, 3, 0], [797, 61, 17, 22, 0, 0]];
var SPIN_LEFT = [[500, 19, 23, 23, 0, 0], [536, 19, 31, 23, 0, 0], [664, 19, 23, 23, 0, 0], [697, 19, 16, 31, 0, 0], [718, 19, 28, 23, 12, 0], [750, 19, 28, 23, 12, 0], [789, 13, 17, 29, 0, 6], [815, 19, 28, 23, 0, 0], [845, 19, 28, 23, 0, 0], [879, 19, 23, 23, 0, 0]];
var SPIN_RIGHT = [[379, 19, 23, 23, 7, 0], [335, 19, 31, 23, 15, 0], [215, 19, 23, 23, 6, 0], [189, 19, 16, 31, 0, 0], [156, 19, 28, 23, 0, 0], [124, 19, 28, 23, 0, 0], [96, 13, 17, 29, 0, 6], [59, 19, 28, 23, 12, 0], [29, 19, 28, 23, 12, 0], [0, 19, 23, 23, 7, 0]];

var Link =
/*#__PURE__*/
function (_Entity) {
  _inherits(Link, _Entity);

  function Link(options) {
    var _this;

    _classCallCheck(this, Link);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Link).call(this, options));
    _this.linkSprite = new Image();
    _this.linkSprite.src = "./assets/sprites/link.png";
    _this.linkSprite2 = new Image();
    _this.linkSprite2.src = "./assets/sprites/link.gif";
    _this.linkSprite3 = new Image();
    _this.linkSprite3.src = "./assets/sprites/link2.gif";
    _this.swordSound = new Audio('./assets/sounds/LTTP_Sword.wav');
    _this.hurtSound = new Audio('./assets/sounds/LTTP_Link_Hurt.wav');
    _this.deathSound = new Audio('./assets/sounds/LTTP_Link_Dying.wav');
    _this.swordChargeSound = new Audio('./assets/sounds/LTTP_Sword_Charge.wav');
    _this.swordSpinSound = new Audio('./assets/sounds/LTTP_Sword_Spin.wav');
    _this.scale = 2;
    _this.frameIndex = 0;
    _this.tickCount = 0;
    _this.ticksPerFrame = 6;
    _this.pos = [473, 310];
    _this.walkDir = 'down';
    _this.frameLen = 7;
    _this.box = [32, 48];
    _this.canSwing = true;
    _this.life = 3;
    _this.draw = _this.draw.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.move = _this.move.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.parseKeyDown = _this.parseKeyDown.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleSword = _this.toggleSword.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.parseKeyUp = _this.parseKeyUp.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.update = _this.update.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleHit = _this.toggleHit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleInvinsible = _this.toggleInvinsible.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.createHurtBox = _this.createHurtBox.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.toggleSpin = _this.toggleSpin.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.clearTimeouts = _this.clearTimeouts.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Link, [{
    key: "clearTimeouts",
    value: function clearTimeouts() {
      clearTimeout(this.soundTimeout);
      clearTimeout(this.spinTimeout);
    }
  }, {
    key: "parseKeyUp",
    value: function parseKeyUp(e) {
      var _this2 = this;

      if (e.keyCode === 32) {
        if (this.spinCharged) {
          this.frameIndex = 2;
          this.ticksPerFrame = 2;
          this.spinning = true;
          this.swordSpinSound.play();
          this.spinCharged = false;

          this.hurtBox = function () {
            return new _sword__WEBPACK_IMPORTED_MODULE_0__["default"]({
              pos: [_this2.x() - 25, _this2.y() - 25],
              box: [85, 85]
            });
          };
        } else {
          this.clearTimeouts();
          this.chargingSpin = false;
          this.swordChargeSound.pause();
          this.swordChargeSound.currentTime = 0;
          this.canSwing = true;
        }
      }

      if (e.keyCode === 87 || e.keyCode === 38) this.up = false;
      if (e.keyCode === 65 || e.keyCode === 37) this.left = false;
      if (e.keyCode === 83 || e.keyCode === 40) this.down = false;
      if (e.keyCode === 68 || e.keyCode === 39) this.right = false;
    }
  }, {
    key: "parseKeyDown",
    value: function parseKeyDown(e) {
      if (e.keyCode === 32) this.swingSword();
      if (e.keyCode === 87 || e.keyCode === 38) this.up = true;
      if (e.keyCode === 65 || e.keyCode === 37) this.left = true;
      if (e.keyCode === 83 || e.keyCode === 40) this.down = true;
      if (e.keyCode === 68 || e.keyCode === 39) this.right = true;
    }
  }, {
    key: "move",
    value: function move(timeDelta) {
      var vel;
      var dx = 0;
      var dy = 0;

      if (this.hit) {
        var delta = 4;
        vel = [this.vect[0] * delta, this.vect[1] * delta];
      } else {
        if (!this.sword) {
          if (this.up) dy += -1;
          if (this.left) dx += -1;
          if (this.down) dy += 1;
          if (this.right) dx += 1;
        }

        var len = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        var vect = [dx / len || 0, dy / len || 0];

        var _delta;

        if (this.chargingSpin || this.spinCharged) {
          _delta = 0.5;
        } else {
          _delta = 2;
        }

        vel = [vect[0] * _delta, vect[1] * _delta];

        if (vel[0] === 0 && vel[1] === 0) {
          this.walking = false;
        } else {
          if (!this.walking) this.frameIndex = 0;
          this.walking = true;
        }
      }

      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
          offsetX = vel[0] * velocityScale,
          offsetY = vel[1] * velocityScale;
      var newPos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

      if (this.game.isOutOfBounds(newPos, this.box)) {
        var newPosX = [this.pos[0] + offsetX, this.pos[1]];
        var newPosY = [this.pos[0], this.pos[1] + offsetY];

        if (!this.game.isOutOfBounds(newPosX, this.box)) {
          this.pos = newPosX;
        }

        if (!this.game.isOutOfBounds(newPosY, this.box)) {
          this.pos = newPosY;
        }
      } else {
        this.pos = newPos;
      }
    }
  }, {
    key: "swingSword",
    value: function swingSword() {
      if (!this.sword && this.canSwing) {
        if (!this.game.gameover) this.swordSound.play();
        this.sword = true;
        this.canSwing = false;
        this.frameIndex = 0;
        this.ticksPerFrame = 2;

        if (this.walkDir === 'down') {
          this.createHurtBox({
            pos: [this.x() - 10, this.y() + 25],
            box: [70, 40]
          });
        } else if (this.walkDir === 'up') {
          this.createHurtBox({
            pos: [this.x() - 25, this.y() - 25],
            box: [70, 45]
          });
        } else if (this.walkDir === 'left') {
          this.createHurtBox({
            pos: [this.x() - 30, this.y()],
            box: [40, 60]
          });
        } else if (this.walkDir === 'right') {
          this.createHurtBox({
            pos: [this.x() + 25, this.y()],
            box: [40, 60]
          });
        }
      }
    }
  }, {
    key: "createHurtBox",
    value: function createHurtBox(options) {
      this.hurtBox = function () {
        return new _sword__WEBPACK_IMPORTED_MODULE_0__["default"](options);
      };
    }
  }, {
    key: "toggleSword",
    value: function toggleSword() {
      if (this.canSwing) {
        this.frameLen = WALK_SIDE.length;
      } else {
        this.chargingSpin = true;
        this.clearTimeouts();
        this.soundTimeout = window.setTimeout(this.playChargeSound.bind(this), 250);
        this.spinTimeout = window.setTimeout(this.finishChargeing.bind(this), 500);
      }

      this.ticksPerFrame = 6;
      this.sword = !this.sword;
      this.hurtBox = null;
    }
  }, {
    key: "toggleSpin",
    value: function toggleSpin() {
      this.spinning = false;
      this.ticksPerFrame = 6;
      this.hurtBox = null;
      this.canSwing = true;
    }
  }, {
    key: "playChargeSound",
    value: function playChargeSound() {
      this.swordChargeSound.play();
    }
  }, {
    key: "finishChargeing",
    value: function finishChargeing() {
      this.spinCharged = true;
      this.chargingSpin = false;
    }
  }, {
    key: "hitByEnemy",
    value: function hitByEnemy(vect) {
      if (!this.invisible && !this.spinning) {
        this.hurtSound.play();
        this.vect = vect;
        this.hit = true;
        this.invisible = true;
        this.invisibleFrameCount = 1;
        this.life -= 1;
        setTimeout(this.toggleHit, 300);
        setTimeout(this.toggleInvinsible, 2000);
      }
    }
  }, {
    key: "toggleHit",
    value: function toggleHit() {
      this.hit = !this.hit;
    }
  }, {
    key: "toggleInvinsible",
    value: function toggleInvinsible() {
      this.invisible = !this.invisible;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      if (this.life === 0) {
        this.deathSound.play();
        ctx.drawImage(this.linkSprite, 89, 214, 24, 15, this.pos[0], this.pos[1], 48, 30);
      } else {
        if (!(this.invisible && this.invisibleFrameCount % 2 === 0)) {
          if (this.sword) {
            this.drawSwingSword(ctx);
          } else if (this.chargingSpin) {
            this.drawSpinCharging(ctx);
          } else if (this.spinCharged) {
            this.drawSpinCharged(ctx);
          } else if (this.spinning) {
            this.drawSpin(ctx);
          } else {
            this.setWalkDir();

            if (this.walking) {
              this.drawLinkWalking(ctx);
            } else {
              this.drawLinkStanding(ctx);
            }
          }
        }
      } // if (this.hurtBox) this.hurtBox().draw(ctx);


      this.drawLife(ctx);
      this.update();
    }
  }, {
    key: "drawLinkWalking",
    value: function drawLinkWalking(ctx) {
      if (this.walkDir === 'down') {
        this.frameLen = WALK_DOWN.length;
        ctx.drawImage(this.linkSprite, WALK_DOWN[this.frameIndex], 30, 16, 24, this.pos[0], this.pos[1], 32, 48);
      } else if (this.walkDir === 'up') {
        this.frameLen = WALK_UP.length;
        ctx.drawImage(this.linkSprite, WALK_UP[this.frameIndex], 120, 17, 24, this.pos[0], this.pos[1], 34, 48);
      } else if (this.walkDir === 'right') {
        this.frameLen = WALK_SIDE.length;
        ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 120, 19, 24, this.pos[0], this.pos[1], 38, 48);
      } else if (this.walkDir === 'left') {
        this.frameLen = WALK_SIDE.length;
        ctx.drawImage(this.linkSprite, WALK_SIDE[this.frameIndex], 30, 19, 24, this.pos[0], this.pos[1], 38, 48);
      }
    }
  }, {
    key: "drawLinkStanding",
    value: function drawLinkStanding(ctx) {
      if (this.walkDir === 'down') {
        ctx.drawImage(this.linkSprite, 33, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
      } else if (this.walkDir === 'up') {
        ctx.drawImage(this.linkSprite, 63, 1, 16, 22, this.pos[0], this.pos[1], 32, 44);
      } else if (this.walkDir === 'right') {
        ctx.drawImage(this.linkSprite, 331, 120, 19, 23, this.pos[0], this.pos[1], 38, 46);
      } else if (this.walkDir === 'left') {
        ctx.drawImage(this.linkSprite, 151, 0, 19, 23, this.pos[0], this.pos[1], 38, 46);
      }
    }
  }, {
    key: "drawSwingSword",
    value: function drawSwingSword(ctx) {
      if (this.walkDir === 'down') {
        this.frameLen = SWORD_DOWN.length;
        ctx.drawImage(this.linkSprite, SWORD_DOWN[this.frameIndex][0], SWORD_DOWN[this.frameIndex][1], SWORD_DOWN[this.frameIndex][2], SWORD_DOWN[this.frameIndex][3], this.pos[0], this.pos[1], SWORD_DOWN[this.frameIndex][2] * this.scale, SWORD_DOWN[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'up') {
        this.frameLen = SWORD_UP.length;
        ctx.drawImage(this.linkSprite, SWORD_UP[this.frameIndex][0], SWORD_UP[this.frameIndex][1], SWORD_UP[this.frameIndex][2], SWORD_UP[this.frameIndex][3], this.pos[0] - SWORD_UP[this.frameIndex][2] * this.scale + 40, this.pos[1] - SWORD_UP[this.frameIndex][3] * this.scale + 42, SWORD_UP[this.frameIndex][2] * this.scale, SWORD_UP[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'left') {
        this.frameLen = SWORD_LEFT.length;
        ctx.drawImage(this.linkSprite, SWORD_LEFT[this.frameIndex][0], SWORD_LEFT[this.frameIndex][1], SWORD_LEFT[this.frameIndex][2], SWORD_LEFT[this.frameIndex][3], this.pos[0] - SWORD_LEFT[this.frameIndex][2] * this.scale + 32, this.pos[1], SWORD_LEFT[this.frameIndex][2] * this.scale, SWORD_LEFT[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'right') {
        this.frameLen = SWORD_RIGHT.length;
        ctx.drawImage(this.linkSprite, SWORD_RIGHT[this.frameIndex][0], SWORD_RIGHT[this.frameIndex][1], SWORD_RIGHT[this.frameIndex][2], SWORD_RIGHT[this.frameIndex][3], this.pos[0], this.pos[1], SWORD_RIGHT[this.frameIndex][2] * this.scale, SWORD_RIGHT[this.frameIndex][3] * this.scale);
      }
    }
  }, {
    key: "drawSpinCharging",
    value: function drawSpinCharging(ctx) {
      if (this.walkDir === 'down') {
        ctx.drawImage(this.linkSprite2, SPIN_DOWN[0][0], SPIN_DOWN[0][1], SPIN_DOWN[0][2], SPIN_DOWN[0][3], this.pos[0] - SPIN_DOWN[0][4] * this.scale, this.pos[1] - SPIN_DOWN[0][5] * this.scale, SPIN_DOWN[0][2] * this.scale, SPIN_DOWN[0][3] * this.scale);
      } else if (this.walkDir === 'up') {
        ctx.drawImage(this.linkSprite2, SPIN_UP[0][0], SPIN_UP[0][1], SPIN_UP[0][2], SPIN_UP[0][3], this.pos[0] - SPIN_UP[0][4] * this.scale, this.pos[1] - SPIN_UP[0][5] * this.scale, SPIN_UP[0][2] * this.scale, SPIN_UP[0][3] * this.scale);
      } else if (this.walkDir === 'left') {
        ctx.drawImage(this.linkSprite2, SPIN_LEFT[0][0], SPIN_LEFT[0][1], SPIN_LEFT[0][2], SPIN_LEFT[0][3], this.pos[0] - SPIN_LEFT[0][4] * this.scale, this.pos[1] - SPIN_LEFT[0][5] * this.scale, SPIN_LEFT[0][2] * this.scale, SPIN_LEFT[0][3] * this.scale);
      } else if (this.walkDir === 'right') {
        ctx.drawImage(this.linkSprite3, SPIN_RIGHT[0][0], SPIN_RIGHT[0][1], SPIN_RIGHT[0][2], SPIN_RIGHT[0][3], this.pos[0] - SPIN_RIGHT[0][4] * this.scale, this.pos[1] - SPIN_RIGHT[0][5] * this.scale, SPIN_RIGHT[0][2] * this.scale, SPIN_RIGHT[0][3] * this.scale);
      }
    }
  }, {
    key: "drawSpinCharged",
    value: function drawSpinCharged(ctx) {
      if (this.walkDir === 'down') {
        ctx.drawImage(this.linkSprite2, SPIN_DOWN[1][0], SPIN_DOWN[1][1], SPIN_DOWN[1][2], SPIN_DOWN[1][3], this.pos[0] - SPIN_DOWN[1][4] * this.scale, this.pos[1] - SPIN_DOWN[1][5] * this.scale, SPIN_DOWN[1][2] * this.scale, SPIN_DOWN[1][3] * this.scale);
      } else if (this.walkDir === 'up') {
        ctx.drawImage(this.linkSprite2, SPIN_UP[1][0], SPIN_UP[1][1], SPIN_UP[1][2], SPIN_UP[1][3], this.pos[0] - SPIN_UP[1][4] * this.scale, this.pos[1] - SPIN_UP[1][5] * this.scale, SPIN_UP[1][2] * this.scale, SPIN_UP[1][3] * this.scale);
      } else if (this.walkDir === 'left') {
        ctx.drawImage(this.linkSprite2, SPIN_LEFT[1][0], SPIN_LEFT[1][1], SPIN_LEFT[1][2], SPIN_LEFT[1][3], this.pos[0] - SPIN_LEFT[1][4] * this.scale, this.pos[1] - SPIN_LEFT[1][5] * this.scale, SPIN_LEFT[1][2] * this.scale, SPIN_LEFT[1][3] * this.scale);
      } else if (this.walkDir === 'right') {
        ctx.drawImage(this.linkSprite3, SPIN_RIGHT[1][0], SPIN_RIGHT[1][1], SPIN_RIGHT[1][2], SPIN_RIGHT[1][3], this.pos[0] - SPIN_RIGHT[1][4] * this.scale, this.pos[1] - SPIN_RIGHT[1][5] * this.scale, SPIN_RIGHT[1][2] * this.scale, SPIN_RIGHT[1][3] * this.scale);
      }
    }
  }, {
    key: "drawSpin",
    value: function drawSpin(ctx) {
      if (this.walkDir === 'down') {
        this.frameLen = SPIN_DOWN.length;
        ctx.drawImage(this.linkSprite2, SPIN_DOWN[this.frameIndex][0], SPIN_DOWN[this.frameIndex][1], SPIN_DOWN[this.frameIndex][2], SPIN_DOWN[this.frameIndex][3], this.pos[0] - SPIN_DOWN[this.frameIndex][4] * this.scale, this.pos[1] - SPIN_DOWN[this.frameIndex][5] * this.scale, SPIN_DOWN[this.frameIndex][2] * this.scale, SPIN_DOWN[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'up') {
        this.frameLen = SPIN_UP.length;
        ctx.drawImage(this.linkSprite2, SPIN_UP[this.frameIndex][0], SPIN_UP[this.frameIndex][1], SPIN_UP[this.frameIndex][2], SPIN_UP[this.frameIndex][3], this.pos[0] - SPIN_UP[this.frameIndex][4] * this.scale, this.pos[1] - SPIN_UP[this.frameIndex][5] * this.scale, SPIN_UP[this.frameIndex][2] * this.scale, SPIN_UP[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'left') {
        this.frameLen = SPIN_LEFT.length;
        ctx.drawImage(this.linkSprite2, SPIN_LEFT[this.frameIndex][0], SPIN_LEFT[this.frameIndex][1], SPIN_LEFT[this.frameIndex][2], SPIN_LEFT[this.frameIndex][3], this.pos[0] - SPIN_LEFT[this.frameIndex][4] * this.scale, this.pos[1] - SPIN_LEFT[this.frameIndex][5] * this.scale, SPIN_LEFT[this.frameIndex][2] * this.scale, SPIN_LEFT[this.frameIndex][3] * this.scale);
      } else if (this.walkDir === 'right') {
        this.frameLen = SPIN_RIGHT.length;
        ctx.drawImage(this.linkSprite3, SPIN_RIGHT[this.frameIndex][0], SPIN_RIGHT[this.frameIndex][1], SPIN_RIGHT[this.frameIndex][2], SPIN_RIGHT[this.frameIndex][3], this.pos[0] - SPIN_RIGHT[this.frameIndex][4] * this.scale, this.pos[1] - SPIN_RIGHT[this.frameIndex][5] * this.scale, SPIN_RIGHT[this.frameIndex][2] * this.scale, SPIN_RIGHT[this.frameIndex][3] * this.scale);
      }
    }
  }, {
    key: "drawLife",
    value: function drawLife(ctx) {
      var spriteX;

      for (var i = 1; i <= 3; i++) {
        if (i > this.life) {
          spriteX = 456;
        } else {
          spriteX = 440;
        }

        ctx.drawImage(this.linkSprite2, spriteX, 147, 7, 7, 900 + i * 35, 10, 28, 28);
      }
    }
  }, {
    key: "setWalkDir",
    value: function setWalkDir() {
      if (this.down && !this.left && !this.right && !this.RIGHT) {
        if (this.walkDir !== 'down') this.frameIndex = 0;
        this.walkDir = 'down';
      } else if (!this.down && this.left && !this.right && !this.up) {
        if (this.walkDir !== 'left') this.frameIndex = 0;
        this.walkDir = 'left';
      } else if (!this.down && !this.left && this.right && !this.up) {
        if (this.walkDir !== 'right') this.frameIndex = 0;
        this.walkDir = 'right';
      } else if (!this.down && !this.left && !this.right && this.up) {
        if (this.walkDir !== 'up') this.frameIndex = 0;
        this.walkDir = 'up';
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.tickCount += 1;

      if (this.tickCount > this.ticksPerFrame) {
        this.tickCount = 0;
        if (this.invisible) this.invisibleFrameCount += 1;

        if (this.frameIndex < this.frameLen - 1) {
          this.frameIndex += 1;
        } else {
          if (this.sword) this.toggleSword();
          if (this.spinning) this.toggleSpin();
          this.frameIndex = 0;
        }
      }
    }
  }]);

  return Link;
}(_entity__WEBPACK_IMPORTED_MODULE_1__["default"]);

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/obstacle.js":
/*!*************************!*\
  !*** ./src/obstacle.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Obstacle =
/*#__PURE__*/
function (_Entity) {
  _inherits(Obstacle, _Entity);

  function Obstacle() {
    _classCallCheck(this, Obstacle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Obstacle).apply(this, arguments));
  }

  return Obstacle;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Obstacle);

/***/ }),

/***/ "./src/sword.js":
/*!**********************!*\
  !*** ./src/sword.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity */ "./src/entity.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Sword =
/*#__PURE__*/
function (_Entity) {
  _inherits(Sword, _Entity);

  function Sword() {
    _classCallCheck(this, Sword);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sword).apply(this, arguments));
  }

  return Sword;
}(_entity__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (Sword);

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map