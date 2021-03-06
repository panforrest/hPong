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
var Register = (function (Component) {
  function Register(props, context) {
    _classCallCheck(this, Register);

    _get(Object.getPrototypeOf(Register.prototype), "constructor", this).call(this, props, context);
    this.updateProfile = this.updateProfile.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      profile: {
        userName: "",
        password: ""
      } };
  }

  _inherits(Register, Component);

  _prototypeProperties(Register, null, {
    updateProfile: {
      value: function updateProfile(event) {
        console.log("updateProfile: " + event.target.id + " == " + event.target.value);
        var updatedProfile = Object.assign({}, this.state.profile);
        updatedProfile[event.target.id] = event.target.value;
        this.setState({
          profile: updatedProfile
        });
      },
      writable: true,
      configurable: true
    },
    componentDidMount: {
      value: function componentDidMount() {
        // console.log('componentDidMount: ')
        APIManager.handleGet("/api/profile", null, function (err, response) {
          if (err) {
            alert(err.message);
            return;
          }

          //console.log('componentDidMount: '+JSON.stringify(response.results))
          //store.dispatch(actions.profilesReceived(response.results))
        });
      },
      writable: true,
      configurable: true
    },
    submit: {
      value: function submit(event) {
        // console.log('submit: '+JSON.stringify(this.state.profile))
        APIManager.handlePost("/api/profile", this.state.profile, function (err, response) {
          if (err) {
            alert(err.message);
            return;
          }

          console.log("Profile Registered: " + JSON.stringify(response.result));
          //store.dispatch(actions.profileCreated(response.result))
          window.location.href = "/account";
        });
      },
      writable: true,
      configurable: true
    },
    render: {
      value: function render() {
        var profileList = this.props.profiles.map(function (profile, i) {
          return React.createElement(
            "li",
            { key: profile.id },
            profile.userName,
            " ",
            profile.password
          );
        });

        return React.createElement(
          "div",
          null,
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
          profileList
        );
      },
      writable: true,
      configurable: true
    }
  });

  return Register;
})(Component);

var stateToProps = function (state) {
  console.log("STATE TO PROPS: " + JSON.stringify(state));
  return {
    profiles: state.profileReducer.profilesArray
  };
};

module.exports = connect(stateToProps)(Register);
// profiles: {

// }