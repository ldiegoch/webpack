webpackJsonp([2],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _cats = __webpack_require__(298);

	var _cats2 = _interopRequireDefault(_cats);

	var _jquery = __webpack_require__(299);

	var _jquery2 = _interopRequireDefault(_jquery);

	var _clinicalIssues = __webpack_require__(302);

	var _clinicalIssues2 = _interopRequireDefault(_clinicalIssues);

	var _specialties = __webpack_require__(303);

	var _specialties2 = _interopRequireDefault(_specialties);

	var _patients = __webpack_require__(304);

	var _patients2 = _interopRequireDefault(_patients);

	var _users = __webpack_require__(305);

	var _users2 = _interopRequireDefault(_users);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)('<h1>Referrals</h1>').appendTo('body');

	(0, _jquery2.default)('<h2>Patients</h2>').appendTo('body');
	var ulPatients = (0, _jquery2.default)('<ul></ul>').appendTo('body');
	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
	    for (var _iterator = _patients2.default[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	        var patient = _step.value;

	        (0, _jquery2.default)('<li></li>').text(patient).appendTo(ulPatients);
	    }
	} catch (err) {
	    _didIteratorError = true;
	    _iteratorError = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	        }
	    } finally {
	        if (_didIteratorError) {
	            throw _iteratorError;
	        }
	    }
	}

	(0, _jquery2.default)('<h2>Specialties</h2>').appendTo('body');
	var ulSpecialties = (0, _jquery2.default)('<ul></ul>').appendTo('body');
	var _iteratorNormalCompletion2 = true;
	var _didIteratorError2 = false;
	var _iteratorError2 = undefined;

	try {
	    for (var _iterator2 = _specialties2.default[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	        var specialty = _step2.value;

	        (0, _jquery2.default)('<li></li>').text(specialty).appendTo(ulSpecialties);
	    }
	} catch (err) {
	    _didIteratorError2 = true;
	    _iteratorError2 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion2 && _iterator2.return) {
	            _iterator2.return();
	        }
	    } finally {
	        if (_didIteratorError2) {
	            throw _iteratorError2;
	        }
	    }
	}

	(0, _jquery2.default)('<h2>Issues</h2>').appendTo('body');
	var ulIssues = (0, _jquery2.default)('<ul></ul>').appendTo('body');
	var _iteratorNormalCompletion3 = true;
	var _didIteratorError3 = false;
	var _iteratorError3 = undefined;

	try {
	    for (var _iterator3 = _clinicalIssues2.default[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
	        var issue = _step3.value;

	        (0, _jquery2.default)('<li></li>').text(issue).appendTo(ulIssues);
	    }
	} catch (err) {
	    _didIteratorError3 = true;
	    _iteratorError3 = err;
	} finally {
	    try {
	        if (!_iteratorNormalCompletion3 && _iterator3.return) {
	            _iterator3.return();
	        }
	    } finally {
	        if (_didIteratorError3) {
	            throw _iteratorError3;
	        }
	    }
	}

/***/ },

/***/ 302:
/***/ function(module, exports) {

	'use strict';

	var issues = ['Issue1', 'Issue2', 'Issue3'];
	module.exports = issues;

/***/ },

/***/ 303:
/***/ function(module, exports) {

	'use strict';

	var specialties = ['Specialties1', 'Specialties2', 'Specialties3'];
	module.exports = specialties;

/***/ },

/***/ 304:
/***/ function(module, exports) {

	'use strict';

	var patients = ['Patient1', 'Patient2', 'Patient3'];
	module.exports = patients;

/***/ },

/***/ 305:
/***/ function(module, exports) {

	'use strict';

	var users = ['user1', 'user2', 'user3'];
	module.exports = users;

/***/ }

});