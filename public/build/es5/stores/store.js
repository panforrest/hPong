"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _redux = require("redux");

var applyMiddleware = _redux.applyMiddleware;
var createStore = _redux.createStore;
var combineReducers = _redux.combineReducers;
var thunk = _interopRequire(require("redux-thunk"));

var inviteReducer = _interopRequire(require("../reducers/inviteReducer"));

var reducers = combineReducers({
	inviteReducer: inviteReducer
});

var store = createStore(reducers, applyMiddleware(thunk));

module.exports = store;