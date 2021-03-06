"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var constants = _interopRequire(require("../constants/constants"));

module.exports = {
	invitesReceived: function (invites) {
		return {
			type: constants.INVITES_RECEIVED,
			invites: invites
		};
	},

	inviteCreated: function (invite) {
		return {
			type: constants.INVITE_CREATED,
			invite: invite
		};
	},

	profilesReceived: function (profiles) {
		return {
			type: constants.PROFILES_RECEIVED,
			profiles: profiles
		};
	},

	profileCreated: function (profile) {
		return {
			type: constants.PROFILE_CREATED,
			profile: profile
		};
	},

	currentUserReceived: function (user) {
		return {
			type: constants.CURRENT_USER_RECEIVED,
			user: user
		};
	}
};