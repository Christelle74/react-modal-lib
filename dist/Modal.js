"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
require("./modale.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modal = function Modal(_ref) {
  var showModal = _ref.showModal,
    hideModal = _ref.hideModal,
    message = _ref.message;
  return showModal && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: hideModal
  }, /*#__PURE__*/_react.default.createElement("span", null, "X"))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button-footer",
    onClick: hideModal
  }, "OK"))))));
};
exports.Modal = Modal;
Modal.propTypes = {
  showModal: _propTypes.default.bool.isRequired,
  hideModal: _propTypes.default.func.isRequired
};