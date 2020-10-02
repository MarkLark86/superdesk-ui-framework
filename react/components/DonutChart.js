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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DonutChart = void 0;
var react_1 = __importDefault(require("react"));
var chart_1 = require("primereact/chart");
var DonutChart = /** @class */ (function (_super) {
    __extends(DonutChart, _super);
    function DonutChart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DonutChart.prototype.render = function () {
        return react_1.default.createElement(chart_1.Chart, { type: "doughnut", width: this.props.width, height: this.props.height, data: this.props.data, options: this.props.options });
    };
    return DonutChart;
}(react_1.default.Component));
exports.DonutChart = DonutChart;
