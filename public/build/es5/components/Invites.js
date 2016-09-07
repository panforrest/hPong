"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var APIManager = _interopRequire(require("../utils/APIManager"));

var actions = _interopRequire(require("../actions/actions"));

var store = _interopRequire(require("../stores/store"));

var connect = require("react-redux").connect;
var Nav = _interopRequire(require("./Nav"));

var Invites = (function (Component) {
	function Invites(props, context) {
		_classCallCheck(this, Invites);

		_get(Object.getPrototypeOf(Invites.prototype), "constructor", this).call(this, props, context);
		this.updateInvite = this.updateInvite.bind(this);
		this.submit = this.submit.bind(this);
		this.state = {
			invite: {
				startTime: "",
				endTime: "",
				location: ""
			}
		};
	}

	_inherits(Invites, Component);

	_prototypeProperties(Invites, null, {
		componentDidMount: {
			value: function componentDidMount() {
				// console.log('componentDidMount: ')
				APIManager.handleGet("/api/invite", null, function (err, response) {
					if (err) {
						alert(err);
						return;
					}
					store.dispatch(actions.invitesReceived(response.results));
				});
			},
			writable: true,
			configurable: true
		},
		updateInvite: {
			value: function updateInvite(event) {
				console.log("updateInvite: " + event.target.id + " -- " + event.target.value);
				var updatedInvite = Object.assign({}, this.state.invite);
				updatedInvite[event.target.id] = event.target.value;
				this.setState({
					invite: updatedInvite
				});
			},
			writable: true,
			configurable: true
		},
		submit: {
			value: function submit() {
				//console.log('submit: '+JSON.stringify(this.state.invite))
				APIManager.handlePost("/api/invite", this.state.invite, function (err, response) {
					if (err) {
						alert(err);
						return;
					}

					// console.log('Invite Created: '+JSON.stringify(response.result))
					store.dispatch(actions.inviteCreated(response.result));
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				var invitesList = this.props.invites.map(function (invite, i) {
					return React.createElement(
						"li",
						{ key: invite.id },
						invite.location
					);
				});

				return React.createElement(
					"div",
					{ className: "container clearfix" },
					React.createElement(Nav, null),
					React.createElement(
						"div",
						{ className: "col_three_fifth bothsidebar nobottommargin" },
						React.createElement(
							"div",
							{ className: "fancy-title title-border" },
							React.createElement(
								"h3",
								null,
								"Invites"
							)
						),
						React.createElement(
							"div",
							{ id: "posts", className: "events small-thumb" },
							invitesList
						)
					),
					React.createElement(
						"h3",
						null,
						"Sign up"
					),
					React.createElement(
						"div",
						{ className: "col_one_third nobottommargin" },
						React.createElement(
							"div",
							{ className: "well well-lg nobottommargin" },
							React.createElement(
								"form",
								{ id: "login-form", name: "login-form", className: "nobottommargin", action: "#", method: "post" },
								React.createElement(
									"h3",
									null,
									"Login to your Account"
								),
								React.createElement(
									"div",
									{ className: "col_full" },
									React.createElement(
										"label",
										{ "for": "login-form-username" },
										"Username:"
									),
									React.createElement("input", { type: "text", id: "login-form-username", name: "login-form-username", value: "", className: "required form-control input-block-level" })
								),
								React.createElement(
									"div",
									{ className: "col_full" },
									React.createElement(
										"label",
										{ "for": "login-form-password" },
										"Password:"
									),
									React.createElement("input", { type: "password", id: "login-form-password", name: "login-form-password", value: "", className: "required form-control input-block-level" })
								),
								React.createElement(
									"div",
									{ className: "col_full nobottommargin" },
									React.createElement(
										"button",
										{ className: "button button-3d nomargin", id: "login-form-submit", name: "login-form-submit", value: "login" },
										"Login"
									),
									React.createElement(
										"a",
										{ href: "#", className: "fright" },
										"Forgot Password?"
									)
								)
							)
						)
					),
					React.createElement("input", { onChange: this.updateInvite, id: "startTime", name: "startTime", placeholder: "Start time", type: "text" }),
					React.createElement("br", null),
					React.createElement("input", { onChange: this.updateInvite, id: "endTime", name: "endTime", placeholder: "End time", type: "text" }),
					React.createElement("br", null),
					React.createElement("input", { onChange: this.updateInvite, id: "location", name: "location", placeholder: "Location", type: "text" }),
					React.createElement("br", null),
					React.createElement(
						"button",
						{ onClick: this.submit },
						"Submit"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Invites;
})(Component);

var stateToProps = function (state) {
	return {
		invites: state.inviteReducer.invitesArray
	};
};

module.exports = connect(stateToProps)(Invites);
// console.log('componentDidMount: '+JSON.stringify(response.results))