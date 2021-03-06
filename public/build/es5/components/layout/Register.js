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

var Nav = _interopRequire(require("../../components/Nav"));

var Register = (function (Component) {
    function Register(props, context) {
        _classCallCheck(this, Register);

        _get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this, props, context);
        this.updateProfile = this.updateProfile.bind(this);
        this.submit = this.submit.bind(this);
        this.login = this.login.bind(this);
        this.updateCredentials = this.updateCredentials.bind(this);
        this.state = {
            user: {
                userName: "",
                password: ""
            },
            credentials: {
                userName: "",
                password: ""
            }

        };
    }

    _inherits(Register, Component);

    _prototypeProperties(Register, null, {
        updateProfile: {
            value: function updateProfile(event) {
                console.log("updateProfile: " + event.target.id + " == " + event.target.value);
                var updatedProfile = Object.assign({}, this.state.user);
                updatedProfile[event.target.id] = event.target.value;
                this.setState({
                    user: updatedProfile
                });
            },
            writable: true,
            configurable: true
        },
        submit: {
            value: function submit(event) {
                event.preventDefault();
                console.log("submit: " + JSON.stringify(this.state.user));
                APIManager.handlePost("/api/profile", this.state.user, function (err, response) {
                    if (err) {
                        alert(err.message);
                        return;
                    }

                    console.log("Profile Registered: " + JSON.stringify(response));
                    window.location.href = "/account";
                });
            },
            writable: true,
            configurable: true
        },
        updateCredentials: {
            value: function updateCredentials(event) {
                console.log("updateCredentials: " + event.target.id + " -- " + event.target.value);
                var updatedCredentials = Object.assign({}, this.state.credentials);
                updatedCredentials[event.target.id] = event.target.value;
                this.setState({
                    credentials: updatedCredentials
                });
            },
            writable: true,
            configurable: true
        },
        login: {
            value: function login(event) {
                event.preventDefault();
                console.log("LOGIN: " + JSON.stringify(this.state.credentials));

                APIManager.handlePost("/account/login", this.state.credentials, function (err, response) {
                    if (err != null) {
                        alert(err.message);
                        return;
                    }

                    console.log("LOGGED IN: " + JSON.stringify(response));
                    window.location.href = "/account";
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
                        "h3",
                        null,
                        "Register page"
                    ),
                    React.createElement("input", { onChange: this.updateProfile, type: "text", id: "userName", placeholder: "User Name" }),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateProfile, type: "text", id: "password", placeholder: "Password" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: this.submit },
                        "Submit"
                    ),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateCredentials, type: "text", id: "userName", placeholder: "User Name" }),
                    React.createElement("br", null),
                    React.createElement("input", { onChange: this.updateCredentials, type: "text", id: "password", placeholder: "Password" }),
                    React.createElement("br", null),
                    React.createElement(
                        "button",
                        { onClick: this.login },
                        "Login"
                    )
                );
            },
            writable: true,
            configurable: true
        }
    });

    return Register;
})(Component);

module.exports = Register;