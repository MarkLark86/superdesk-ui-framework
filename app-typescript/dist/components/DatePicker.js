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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var addDays_1 = require("date-fns/addDays");
var format_1 = require("date-fns/format");
var calendar_1 = require("primereact/calendar");
var lodash_1 = require("lodash");
var currentLocale = {
    firstDayOfWeek: 1,
    dayNames: [
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, { weekday: 'long' }).format(new Date('2000-01-07')),
    ],
    dayNamesShort: [
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-07')),
    ],
    dayNamesMin: [
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-02')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-03')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-04')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-05')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-06')),
        new Intl.DateTimeFormat(undefined, { weekday: 'short' }).format(new Date('2000-01-07')),
    ],
    monthNames: [
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-02-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-03-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-04-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-05-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-06-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-07-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-08-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-09-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-10-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-11-01')),
        new Intl.DateTimeFormat(undefined, { month: 'long' }).format(new Date('2000-12-01')),
    ],
    monthNamesShort: [
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-01-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-02-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-03-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-04-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-05-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-06-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-07-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-08-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-09-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-10-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-11-01')),
        new Intl.DateTimeFormat(undefined, { month: 'short' }).format(new Date('2000-12-01')),
    ],
    today: 'today',
    clear: 'clear',
};
// get date format from current locale
var dateFormat = new Date('2000-11-22').toLocaleDateString()
    .replace('22', 'dd')
    .replace('11', 'mm')
    .replace('2000', 'yy');
var internalPrimereactClassnames = {
    overlayVisible: 'p-input-overlay-visible',
};
// tries to parse primereact/calendar value format to IDatePicker['value']
function parseFromPrimeReactCalendarFormat(value) {
    if (Array.isArray(value)) {
        return 'failed-to-parse'; // arrays aren't supported
    }
    else if (value instanceof Date) {
        return value;
    }
    else if (value === '') {
        return null;
    }
    else {
        // at this point value is a free input string that can't be parsed to a Date inside primereact/calendar
        return 'failed-to-parse';
    }
}
function parseToPrimeReactCalendarFormat(value) {
    return value === null ? undefined : value;
}
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            value: parseToPrimeReactCalendarFormat(_this.props.value),
            valid: true,
        };
        _this.hidePopupOnScroll = lodash_1.throttle(function () {
            if (_this.instance != null
                && _this.instance.panel != null
                && _this.instance.hideOverlay != null
                && _this.instance.panel.classList.contains(internalPrimereactClassnames.overlayVisible)) {
                _this.instance.hideOverlay();
            }
        }, 300);
        return _this;
    }
    DatePicker.prototype.componentDidMount = function () {
        document.addEventListener('scroll', this.hidePopupOnScroll, true);
    };
    DatePicker.prototype.componentWillUnmount = function () {
        document.removeEventListener('scroll', this.hidePopupOnScroll);
    };
    DatePicker.prototype.componentDidUpdate = function (prevProps) {
        // sync internal state with props
        // the check is more complex than a === b, because value equality is checked rather than reference equality
        // which prevents infinite loops that may happen otherwise
        if (this.props.value === null || prevProps.value === null) {
            // at least one of the values is null so strict comparison can be used
            if (this.props.value !== prevProps.value) {
                this.setState({ value: parseToPrimeReactCalendarFormat(this.props.value), valid: true });
            }
        }
        else if (this.props.value.getTime() !== prevProps.value.getTime()) { // comparing by value
            this.setState({ value: parseToPrimeReactCalendarFormat(this.props.value), valid: true });
        }
    };
    DatePicker.prototype.render = function () {
        var _this = this;
        return (
        // a patch for primereact/calendar is used for fixing https://github.com/primefaces/primereact/issues/1086
        React.createElement(calendar_1.Calendar, { ref: function (ref) {
                _this.instance = ref;
            }, value: this.state.value === null ? undefined : this.state.value, onChange: function (event) {
                var result = parseFromPrimeReactCalendarFormat(event.value);
                if (result !== 'failed-to-parse') {
                    _this.setState({ value: event.value, valid: true });
                    _this.props.onChange(result);
                }
                else {
                    // updating internal state so a user can continue typing and enter a valid value
                    _this.setState({ value: event.value, valid: false });
                }
            }, locale: currentLocale, dateFormat: dateFormat, showIcon: true, icon: "icon-calendar", headerTemplate: function () { return _this.props.shortcuts == null ? null : (React.createElement("div", { style: { display: 'flex', justifyContent: 'space-between', marginBottom: 10 } }, _this.props.shortcuts.map(function (_a, i) {
                var label = _a.label, days = _a.days;
                return (React.createElement("button", { key: i, className: "btn btn--hollow btn--small", onClick: function () {
                        _this.props.onChange(addDays_1.default(new Date(), days));
                        if (_this.instance != null && typeof _this.instance.hideOverlay === 'function') {
                            _this.instance.hideOverlay();
                        }
                    } }, label));
            }))); }, appendTo: document.body, disabled: this.props.disabled, onBlur: function () {
                if (_this.state.valid === false) {
                    // restoring internal state to current props value
                    _this.setState({ valid: true, value: parseToPrimeReactCalendarFormat(_this.props.value) });
                }
            } }));
    };
    return DatePicker;
}(React.PureComponent));
exports.DatePicker = DatePicker;
var DatePickerISO = /** @class */ (function (_super) {
    __extends(DatePickerISO, _super);
    function DatePickerISO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DatePickerISO.prototype.render = function () {
        var _this = this;
        return (React.createElement(DatePicker, { value: new Date(this.props.value), onChange: function (value) {
                if (value === null) {
                    _this.props.onChange('');
                }
                else {
                    _this.props.onChange(format_1.default(value, 'yyyy-MM-dd'));
                }
            }, disabled: this.props.disabled, shortcuts: this.props.shortcuts }));
    };
    return DatePickerISO;
}(React.PureComponent));
exports.DatePickerISO = DatePickerISO;
