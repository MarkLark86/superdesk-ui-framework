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
exports.PropsList = exports.Prop = void 0;
var React = __importStar(require("react"));
var Prop = /** @class */ (function (_super) {
    __extends(Prop, _super);
    function Prop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Prop.prototype.render = function () {
        return (React.createElement(React.Fragment, null,
            React.createElement("tr", null,
                React.createElement("td", null, this.props.name),
                React.createElement("td", null, this.props.isRequered ? 'yes' : 'no'),
                React.createElement("td", null, this.props.type),
                React.createElement("td", null, this.props.default),
                React.createElement("td", null, this.props.description))));
    };
    return Prop;
}(React.PureComponent));
exports.Prop = Prop;
var PropsList = /** @class */ (function (_super) {
    __extends(PropsList, _super);
    function PropsList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PropsList.prototype.render = function () {
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null,
                    React.createElement("th", null, "Name"),
                    React.createElement("th", null, "Required"),
                    React.createElement("th", null, "Type"),
                    React.createElement("th", null, "Default Value"),
                    React.createElement("th", null, "Description"))),
            React.createElement("tbody", null, this.props.children)));
    };
    return PropsList;
}(React.PureComponent));
exports.PropsList = PropsList;
