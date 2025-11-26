self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./component/profile/index.tsx":
/*!*************************************!*\
  !*** ./component/profile/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Profile": function() { return /* binding */ Profile; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./component/profile/contact.tsx");
/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image */ "./component/profile/image.tsx");
/* harmony import */ var _common_Style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Style */ "./component/common/Style.ts");
/* harmony import */ var _common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/PreProcessingComponent */ "./component/common/PreProcessingComponent.tsx");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\\uACBD\uB825\uAD00\uB828\\\uACBD\uB825\uC99D\uBA85\uC0AC\uC774\uD2B8\\component\\profile\\index.tsx";
 // import Alert from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 // import { EmptyRowCol } from '../common';



var Profile = {
  Component: function Component(_ref) {
    var payload = _ref.payload;
    return (0,_common_PreProcessingComponent__WEBPACK_IMPORTED_MODULE_4__.PreProcessingComponent)({
      payload: payload,
      component: _Component
    });
  }
};

function _Component(_ref2) {
  var payload = _ref2.payload;
  var image = payload.image,
      contact = payload.contact,
      name = payload.name; // notice 빠진상태

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "mt-5",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
        md: 3,
        sm: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_image__WEBPACK_IMPORTED_MODULE_2__.default, {
          src: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
        md: 9,
        sm: 12,
        children: [createNameArea(name), createProfileContactMap(contact)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

function createNameArea(name) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      className: "text-center text-md-left",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        style: _common_Style__WEBPACK_IMPORTED_MODULE_3__.Style.blue,
        children: [name.title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("small", {
          children: name.small || ''
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 24
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, this);
}

function createProfileContactMap(contacts) {
  var _this = this;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Row, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(reactstrap__WEBPACK_IMPORTED_MODULE_5__.Col, {
      className: "pt-3",
      children: contacts.map(function (contact, index) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contact__WEBPACK_IMPORTED_MODULE_1__.default, {
          payload: contact
        }, index.toString(), false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}
/* function createNoticeArea(notice: Payload['notice']) {
  return (
    <EmptyRowCol>
      <Alert color="secondary" role="alert" className="mt-3">
        {notice.icon ? <FontAwesomeIcon className="mr-2" icon={notice.icon} /> : ''}
        {notice.title}
      </Alert>
    </EmptyRowCol>
  );
} */

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50L3Byb2ZpbGUvaW5kZXgudHN4Il0sIm5hbWVzIjpbIlByb2ZpbGUiLCJDb21wb25lbnQiLCJwYXlsb2FkIiwiUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCIsImNvbXBvbmVudCIsImltYWdlIiwiY29udGFjdCIsIm5hbWUiLCJjcmVhdGVOYW1lQXJlYSIsImNyZWF0ZVByb2ZpbGVDb250YWN0TWFwIiwiU3R5bGUiLCJ0aXRsZSIsInNtYWxsIiwiY29udGFjdHMiLCJtYXAiLCJpbmRleCIsInRvU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBO0FBQ0E7O0FBRUE7Q0FFQTs7QUFFQTtBQUNBO0FBSU8sSUFBTUEsT0FBTyxHQUFHO0FBQ3JCQyxXQUFTLEVBQUUseUJBQTBEO0FBQUEsUUFBdkRDLE9BQXVELFFBQXZEQSxPQUF1RDtBQUNuRSxXQUFPQyxzRkFBc0IsQ0FBVTtBQUNyQ0QsYUFBTyxFQUFQQSxPQURxQztBQUVyQ0UsZUFBUyxFQUFFSDtBQUYwQixLQUFWLENBQTdCO0FBSUQ7QUFOb0IsQ0FBaEI7O0FBU1AsU0FBU0EsVUFBVCxRQUF5RTtBQUFBLE1BQXBEQyxPQUFvRCxTQUFwREEsT0FBb0Q7QUFBQSxNQUMvREcsS0FEK0QsR0FDdENILE9BRHNDLENBQy9ERyxLQUQrRDtBQUFBLE1BQ3hEQyxPQUR3RCxHQUN0Q0osT0FEc0MsQ0FDeERJLE9BRHdEO0FBQUEsTUFDL0NDLElBRCtDLEdBQ3RDTCxPQURzQyxDQUMvQ0ssSUFEK0MsRUFDN0I7O0FBQzFDLHNCQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQSwyQkFDRSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLDJDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsRUFBaEI7QUFBQSwrQkFDRSw4REFBQywyQ0FBRDtBQUFjLGFBQUcsRUFBRUY7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUlFLDhEQUFDLDJDQUFEO0FBQUssVUFBRSxFQUFFLENBQVQ7QUFBWSxVQUFFLEVBQUUsRUFBaEI7QUFBQSxtQkFDR0csY0FBYyxDQUFDRCxJQUFELENBRGpCLEVBRUdFLHVCQUF1QixDQUFDSCxPQUFELENBRjFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWNEOztBQUVELFNBQVNFLGNBQVQsQ0FBd0JELElBQXhCLEVBQStDO0FBQzdDLHNCQUNFLDhEQUFDLDJDQUFEO0FBQUEsMkJBQ0UsOERBQUMsMkNBQUQ7QUFBSyxlQUFTLEVBQUMsMEJBQWY7QUFBQSw2QkFDRTtBQUFJLGFBQUssRUFBRUcscURBQVg7QUFBQSxtQkFDR0gsSUFBSSxDQUFDSSxLQURSLG9CQUNlO0FBQUEsb0JBQVFKLElBQUksQ0FBQ0ssS0FBTCxJQUFjO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVELFNBQVNILHVCQUFULENBQWlDSSxRQUFqQyxFQUErRDtBQUFBOztBQUM3RCxzQkFDRSw4REFBQywyQ0FBRDtBQUFBLDJCQUNFLDhEQUFDLDJDQUFEO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQSxnQkFDR0EsUUFBUSxDQUFDQyxHQUFULENBQWEsVUFBQ1IsT0FBRCxFQUFVUyxLQUFWO0FBQUEsNEJBQ1osOERBQUMsNkNBQUQ7QUFBdUMsaUJBQU8sRUFBRVQ7QUFBaEQsV0FBcUJTLEtBQUssQ0FBQ0MsUUFBTixFQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURZO0FBQUEsT0FBYjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU4NGE2ZWJhYzg5ODAyNzlmNjA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb3csIENvbCB9IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gaW1wb3J0IEFsZXJ0IGZyb20gJ3JlYWN0c3RyYXAnO1xuLy8gaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFByb3BzV2l0aENoaWxkcmVuIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb2ZpbGVDb250YWN0IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgUHJvZmlsZUltYWdlIGZyb20gJy4vaW1hZ2UnO1xuLy8gaW1wb3J0IHsgRW1wdHlSb3dDb2wgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgSVByb2ZpbGUgfSBmcm9tICcuL0lQcm9maWxlJztcbmltcG9ydCB7IFN0eWxlIH0gZnJvbSAnLi4vY29tbW9uL1N0eWxlJztcbmltcG9ydCB7IFByZVByb2Nlc3NpbmdDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vUHJlUHJvY2Vzc2luZ0NvbXBvbmVudCc7XG5cbnR5cGUgUGF5bG9hZCA9IElQcm9maWxlLlBheWxvYWQ7XG5cbmV4cG9ydCBjb25zdCBQcm9maWxlID0ge1xuICBDb21wb25lbnQ6ICh7IHBheWxvYWQgfTogUHJvcHNXaXRoQ2hpbGRyZW48eyBwYXlsb2FkOiBQYXlsb2FkIH0+KSA9PiB7XG4gICAgcmV0dXJuIFByZVByb2Nlc3NpbmdDb21wb25lbnQ8UGF5bG9hZD4oe1xuICAgICAgcGF5bG9hZCxcbiAgICAgIGNvbXBvbmVudDogQ29tcG9uZW50LFxuICAgIH0pO1xuICB9LFxufTtcblxuZnVuY3Rpb24gQ29tcG9uZW50KHsgcGF5bG9hZCB9OiBQcm9wc1dpdGhDaGlsZHJlbjx7IHBheWxvYWQ6IFBheWxvYWQgfT4pIHtcbiAgY29uc3QgeyBpbWFnZSwgY29udGFjdCwgbmFtZSB9ID0gcGF5bG9hZDsgLy8gbm90aWNlIOu5oOynhOyDge2DnFxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBtZD17M30gc209ezEyfT5cbiAgICAgICAgICA8UHJvZmlsZUltYWdlIHNyYz17aW1hZ2V9IC8+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIG1kPXs5fSBzbT17MTJ9PlxuICAgICAgICAgIHtjcmVhdGVOYW1lQXJlYShuYW1lKX1cbiAgICAgICAgICB7Y3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAoY29udGFjdCl9XG4gICAgICAgICAgey8qIHtjcmVhdGVOb3RpY2VBcmVhKG5vdGljZSl9ICovfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVOYW1lQXJlYShuYW1lOiBQYXlsb2FkWyduYW1lJ10pIHtcbiAgcmV0dXJuIChcbiAgICA8Um93PlxuICAgICAgPENvbCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LW1kLWxlZnRcIj5cbiAgICAgICAgPGgxIHN0eWxlPXtTdHlsZS5ibHVlfT5cbiAgICAgICAgICB7bmFtZS50aXRsZX0gPHNtYWxsPntuYW1lLnNtYWxsIHx8ICcnfTwvc21hbGw+XG4gICAgICAgIDwvaDE+XG4gICAgICA8L0NvbD5cbiAgICA8L1Jvdz5cbiAgKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvZmlsZUNvbnRhY3RNYXAoY29udGFjdHM6IFBheWxvYWRbJ2NvbnRhY3QnXSkge1xuICByZXR1cm4gKFxuICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cInB0LTNcIj5cbiAgICAgICAge2NvbnRhY3RzLm1hcCgoY29udGFjdCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8UHJvZmlsZUNvbnRhY3Qga2V5PXtpbmRleC50b1N0cmluZygpfSBwYXlsb2FkPXtjb250YWN0fSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ29sPlxuICAgIDwvUm93PlxuICApO1xufVxuXG4vKiBmdW5jdGlvbiBjcmVhdGVOb3RpY2VBcmVhKG5vdGljZTogUGF5bG9hZFsnbm90aWNlJ10pIHtcbiAgcmV0dXJuIChcbiAgICA8RW1wdHlSb3dDb2w+XG4gICAgICA8QWxlcnQgY29sb3I9XCJzZWNvbmRhcnlcIiByb2xlPVwiYWxlcnRcIiBjbGFzc05hbWU9XCJtdC0zXCI+XG4gICAgICAgIHtub3RpY2UuaWNvbiA/IDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPVwibXItMlwiIGljb249e25vdGljZS5pY29ufSAvPiA6ICcnfVxuICAgICAgICB7bm90aWNlLnRpdGxlfVxuICAgICAgPC9BbGVydD5cbiAgICA8L0VtcHR5Um93Q29sPlxuICApO1xufSAqL1xuIl0sInNvdXJjZVJvb3QiOiIifQ==