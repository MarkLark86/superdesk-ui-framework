"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimePicker = void 0;
var React = __importStar(require("react"));
var TimePicker = /** @class */ (function (_super) {
    __extends(TimePicker, _super);
    function TimePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimePicker.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "sd-line-input sd-line-input--no-margin sd-line-input--no-label", style: { display: 'inline-block' } },
            React.createElement("input", { type: "time", className: "sd-line-input__input", value: this.props.value, required: this.props.required, disabled: this.props.disabled, onChange: function (event) {
                    _this.props.onChange(event.target.value);
                } })));
    };
    return TimePicker;
}(React.PureComponent));
exports.TimePicker = TimePicker;
