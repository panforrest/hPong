"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

var initialState = {
	invites: {},
	invitesArray: []
};

module.exports = function (_x, action) {
	var state = arguments[0] === undefined ? initialState : arguments[0];
	switch (action.type) {
		case constants.INVITES_RECEIVED:
			console.log("INVITES RECEIVED: " + JSON.stringify(action.invites));
			var newState = Object.assign({}, state);
			var result = [];
			for (var i = 0; i < action.invites.length; i++) {
				var invite = action.invites[i];
				result.push(invite);
			}
			newState.invitesArray = result;
			return newState;

		case constants.INVITE_CREATED:
			var newState = Object.assign({}, state);
			var result = Object.assign([], newState.invitesArray);
			result.push(action.invite);
			newState.invitesArray = result;
			return newState;

		default:
			return state;
	}
};