"use strict";

var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var _react = require("react");

var React = _interopRequire(_react);

var Component = _react.Component;
var APIManager = _interopRequire(require("../../utils/APIManager"));

var store = _interopRequire(require("../../stores/store"));

var actions = _interopRequire(require("../../actions/actions"));

var connect = require("react-redux").connect;
var accountReducer = _interopRequire(require("../../reducers/accountReducer"));

var Nav = _interopRequire(require("../../components/Nav"));

var Account = (function (Component) {
	function Account(props, context) {
		_classCallCheck(this, Account);

		_get(Object.getPrototypeOf(Account.prototype), "constructor", this).call(this, props, context);
		this.logout = this.logout.bind(this);
		this.state = {
			currentUser: {
				userName: "",
				password: ""
			}
		};

	}

	_inherits(Account, Component);

	_prototypeProperties(Account, null, {
		componentDidMount: {
			value: function componentDidMount() {
				// var _this = this
				APIManager.handleGet("/account/currentuser", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					console.log(JSON.stringify(response));
					// var user = response.user
					// _this.setState({
					// 	currentUser: user

					// })
					store.dispatch(actions.currentUserReceived(response.user));
					return;
				});
			},
			writable: true,
			configurable: true
		},
		logout: {
			value: function logout(event) {
				console.log("Logout: ");
				APIManager.handleGet("/account/logout", null, function (err, response) {
					if (err) {
						alert(err.message);
						return;
					}

					window.location.href = "/";
				});
			},
			writable: true,
			configurable: true
		},
		render: {
			value: function render() {
				return React.createElement(
					"div",
					null,
					React.createElement(Nav, null),
					React.createElement(
						"h1",
						null,
						"Hi, ",
						this.props.currentUser.userName
					),
					React.createElement(
						"button",
						{ onClick: this.logout },
						"Logout"
					)
				);
			},
			writable: true,
			configurable: true
		}
	});

	return Account;
})(Component);

var stateToProps = function (state) {
	console.log("STATE TO PROPS: " + JSON.stringify(state));
	return {
		currentUser: state.accountReducer.currentUser
	};
};

module.exports = connect(stateToProps)(Account);