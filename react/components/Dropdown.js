"use strict";
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
exports.Dropdown = void 0;
var React = __importStar(require("react"));
var ReactDOM = __importStar(require("react-dom"));
var core_1 = require("@popperjs/core");
var react_id_generator_1 = require("react-id-generator");
exports.Dropdown = function (_a) {
    var items = _a.items, header = _a.header, footer = _a.footer, children = _a.children, append = _a.append, align = _a.align;
    var _b = React.useState(false), open = _b[0], setOpen = _b[1];
    var _c = React.useState(false), change = _c[0], setChange = _c[1];
    var menuID = react_id_generator_1.useId()[0];
    var DROPDOWN_ID = "react-placeholder";
    var ref = React.useRef(null);
    var refSubMenu = React.useRef(null);
    var buttonRef = React.useRef(null);
    var refButtonSubMenu = React.useRef(null);
    var headerElements = header === null || header === void 0 ? void 0 : header.map(function (el, index) {
        return each(el, index);
    });
    var dropdownElements = items.map(function (el, index) {
        return each(el, index);
    });
    var footerElements = footer === null || footer === void 0 ? void 0 : footer.map(function (el, index) {
        return each(el, index);
    });
    React.useEffect(function () {
        var existingElement = document.getElementById(DROPDOWN_ID);
        if (!existingElement) {
            var el = document.createElement("div");
            el.id = DROPDOWN_ID;
            // style placeholder
            el.style.position = 'absolute';
            el.style.top = '0';
            el.style.left = '0';
            el.style.width = '1px';
            el.style.height = '1px';
            document.body.appendChild(el);
        }
    }, [change]);
    React.useLayoutEffect(function () {
        if (append && change) {
            addInPlaceholder();
        }
        setChange(true);
    }, [open]);
    // structure for append menu
    function createAppendMenu() {
        if (header && footer) {
            return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', id: menuID, ref: ref },
                React.createElement("ul", { className: 'dropdown__menu-header' }, headerElements),
                React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements),
                React.createElement("ul", { className: 'dropdown__menu-footer dropdown__menu-footer--has-list ' }, footerElements)));
        }
        else if (header) {
            return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', id: menuID, ref: ref },
                React.createElement("ul", { className: 'dropdown__menu-header' }, headerElements),
                React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements)));
        }
        else if (footer) {
            return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', id: menuID, ref: ref },
                React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements),
                React.createElement("ul", { className: 'dropdown__menu-footer dropdown__menu-footer--has-list ' }, footerElements)));
        }
        else {
            return (React.createElement("ul", { className: 'dropdown__menu ', id: menuID, ref: ref }, dropdownElements));
        }
    }
    // toggle menu
    function toggleDisplay() {
        if (!open) {
            setOpen(true);
            if (!append) {
                var menuRef = ref.current;
                var toggleRef = buttonRef.current;
                if (toggleRef && menuRef) {
                    core_1.createPopper(toggleRef, menuRef, {
                        placement: checkAlign() ? 'bottom-end' : 'bottom-start',
                    });
                }
            }
            else {
                setTimeout(function () {
                    var menuRef = ref.current;
                    var toggleRef = buttonRef.current;
                    if (toggleRef && menuRef) {
                        core_1.createPopper(toggleRef, menuRef, {
                            placement: checkAlign() ? 'bottom-end' : 'bottom-start',
                            strategy: 'fixed',
                        });
                        menuRef.style.display = 'block';
                    }
                }, 0);
            }
            document.addEventListener('click', closeMenu);
        }
        else {
            setOpen(false);
        }
    }
    function closeMenu() {
        document.removeEventListener('click', closeMenu);
        setOpen(false);
    }
    function checkAlign() {
        if (align === 'right') {
            return true;
        }
        else {
            return false;
        }
    }
    function addInPlaceholder() {
        var placeholder = document.getElementById(DROPDOWN_ID);
        var menu = createAppendMenu();
        if (open) {
            return ReactDOM.render(menu, placeholder);
        }
        else {
            var menuDOM = document.getElementById(menuID);
            if (menuDOM) {
                menuDOM.style.display = 'none';
            }
        }
    }
    function each(item, index) {
        if (item['type'] === 'submenu') {
            var submenuItems_1 = [];
            item['items'].forEach(function (el, key) {
                submenuItems_1.push(each(el, key));
            });
            return (React.createElement("li", { key: index },
                React.createElement("div", { className: 'dropdown' },
                    React.createElement("button", { ref: refButtonSubMenu, className: 'dropdown__toggle dropdown-toggle', onMouseOver: function () {
                            var subMenuRef = refSubMenu.current;
                            var subToggleRef = refButtonSubMenu.current;
                            if (subMenuRef && subToggleRef) {
                                core_1.createPopper(subToggleRef, subMenuRef, {
                                    placement: 'right-start',
                                });
                            }
                        }, onClick: item['onSelect'] },
                        item['icon'] ? React.createElement("i", { className: 'icon-' + item['icon'] }) : null,
                        item['label']),
                    React.createElement("ul", { ref: refSubMenu, className: 'dropdown__menu' }, submenuItems_1))));
        }
        else if (item['type'] === 'group') {
            var groupItems_1 = [];
            item['items'].forEach(function (el, key) {
                groupItems_1.push(each(el, key));
            });
            return (React.createElement(React.Fragment, { key: index },
                React.createElement("li", null,
                    React.createElement("div", { className: "dropdown__menu-label" }, item['label'])),
                groupItems_1));
        }
        else if (item === 'divider') {
            return (React.createElement("li", { className: "dropdown__menu-divider", key: index }));
        }
        else {
            return (React.createElement(DropdownItem, { key: index, label: item['label'], icon: item['icon'], onSelect: item['onSelect'] }));
        }
    }
    return (React.createElement("div", { className: 'dropdown ' + (open ? 'open' : '') },
        typeof children === 'object' ?
            (React.isValidElement(children) ?
                React.createElement("div", { ref: buttonRef, style: { display: 'content' } }, React.cloneElement(children, {
                    className: children.props.className ? (children.props.className + ' dropdown__toggle dropdown-toggle') : 'dropdown__toggle dropdown-toggle',
                    onClick: toggleDisplay,
                    ref: buttonRef,
                })) : null)
            :
                React.createElement("button", { ref: buttonRef, className: ' dropdown__toggle dropdown-toggle', onClick: toggleDisplay },
                    children,
                    React.createElement("span", { className: "dropdown__caret" })),
        append ?
            null : (function () {
            if (header && footer) {
                return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', ref: ref },
                    React.createElement("ul", { className: 'dropdown__menu-header' }, headerElements),
                    React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements),
                    React.createElement("ul", { className: 'dropdown__menu-footer dropdown__menu-footer--has-list ' }, footerElements)));
            }
            else if (header) {
                return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', ref: ref },
                    React.createElement("ul", { className: 'dropdown__menu-header' }, headerElements),
                    React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements)));
            }
            else if (footer) {
                return (React.createElement("div", { className: 'dropdown__menu dropdown__menu--has-head-foot', ref: ref },
                    React.createElement("ul", { className: 'dropdown__menu-body' }, dropdownElements),
                    React.createElement("ul", { className: 'dropdown__menu-footer dropdown__menu-footer--has-list ' }, footerElements)));
            }
            else {
                return (React.createElement("ul", { className: 'dropdown__menu', ref: ref }, dropdownElements));
            }
        })()));
};
var DropdownItem = function (_a) {
    var label = _a.label, icon = _a.icon, onSelect = _a.onSelect;
    return (React.createElement("li", null,
        React.createElement("button", { onClick: onSelect },
            React.createElement("i", { className: icon ? ('icon-' + icon) : '' }),
            label)));
};
