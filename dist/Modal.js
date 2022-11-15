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
    message = _ref.message,
    title = _ref.title,
    modalStyle = _ref.modalStyle,
    modalHeaderStyle = _ref.modalHeaderStyle,
    modalBodyStyle = _ref.modalBodyStyle,
    modalFooterStyle = _ref.modalFooterStyle,
    xButtonStyle = _ref.xButtonStyle,
    footerButton1Style = _ref.footerButton1Style,
    footerButton2Style = _ref.footerButton2Style,
    buttonText1 = _ref.buttonText1,
    buttonText2 = _ref.buttonText2;
  return showModal && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal",
    style: modalStyle
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header",
    style: modalHeaderStyle
  }, /*#__PURE__*/_react.default.createElement("h3", null, title), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    style: xButtonStyle,
    className: "modal-close-button",
    onClick: hideModal
  }, "X")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body",
    style: modalBodyStyle
  }, message), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer",
    style: modalFooterStyle
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button-footer",
    style: footerButton1Style,
    onClick: hideModal
  }, buttonText1), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button-footer",
    style: footerButton2Style,
    onClick: hideModal
  }, buttonText2))))));
};
exports.Modal = Modal;
Modal.propTypes = {
  showModal: _propTypes.default.bool.isRequired,
  hideModal: _propTypes.default.func.isRequired
};