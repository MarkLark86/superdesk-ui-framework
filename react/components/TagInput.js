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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagInput = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var core_1 = require("@popperjs/core");
var lodash_1 = require("lodash");
exports.TagInput = function (_a) {
    var items = _a.items, label = _a.label, freetype = _a.freetype;
    var _b = React.useState([]), tags = _b[0], setTags = _b[1];
    var _c = React.useState(false), openSuggestion = _c[0], setOpenSuggestion = _c[1];
    var inputRef = React.useRef(null);
    var refTagInput = React.useRef(null);
    var refSuggestions = React.useRef(null);
    // number for select
    var _d = React.useState(-1), selectNumber = _d[0], setSelectNumber = _d[1];
    // autocomplete
    var _e = React.useState([]), suggestions = _e[0], setSuggestions = _e[1];
    // focused
    var _f = React.useState(false), focus = _f[0], setFocus = _f[1];
    // invalid-tag
    var _g = React.useState(false), invalid = _g[0], setInvalid = _g[1];
    React.useEffect(function () {
        var menuRef = refSuggestions.current;
        var toggleRef = refTagInput.current;
        if (toggleRef && menuRef) {
            core_1.createPopper(toggleRef, menuRef, {
                placement: 'bottom-start',
            });
        }
    }, [suggestions]);
    function inputKeyDown(e) {
        var val = e.target.value;
        if (val.length > 1) {
            setInvalid(false);
        }
        if (e.key === 'Enter' && val) {
            if (val.length > 2 && freetype) {
                setInvalid(false);
                if (checkTag(val) === 0) {
                    setTags(function (tag) { return tag.concat(val); });
                    var inputRefVariable = inputRef.current;
                    if (inputRefVariable) {
                        inputRefVariable.value = null;
                    }
                }
            }
            else {
                setInvalid(true);
            }
        }
        else if (e.key === 'Backspace' && !val) {
            setSelectNumber(tags.length - 1);
            if (selectNumber !== -1) {
                removeTag(selectNumber);
                setSelectNumber(-1);
            }
        }
        else if (e.key === 'ArrowLeft' && !val) {
            if (selectNumber > 0) {
                setSelectNumber(selectNumber - 1);
            }
            else {
                setSelectNumber(tags.length - 1);
            }
        }
        else if (e.key === 'ArrowRight' && !val) {
            if (selectNumber !== -1 && selectNumber < tags.length - 1) {
                setSelectNumber(selectNumber + 1);
            }
            else {
                setSelectNumber(0);
            }
        }
    }
    function checkTag(newTag) {
        var count = 0;
        tags.forEach(function (tag) {
            if (tag === newTag) {
                count = 1;
            }
        });
        return count;
    }
    function removeTag(i) {
        var newTags = lodash_1.clone(tags);
        newTags.splice(i, 1);
        setTags(newTags);
    }
    function onTextChanged(e) {
        if (items) {
            var value = e.target.value;
            var newSuggestions = [];
            if (value.length > 1) {
                var regex_1 = new RegExp("^" + value, 'i');
                newSuggestions = items.sort().filter(function (v) { return regex_1.test(v); });
            }
            setSuggestions(newSuggestions);
        }
    }
    function addTag(item) {
        if (checkTag(item) === 0) {
            setTags(function (tag) { return tag.concat(item); });
            var inputRefVariable = inputRef.current;
            if (inputRefVariable) {
                inputRefVariable.value = null;
            }
        }
        setSuggestions([]);
    }
    function toggleSuggestions() {
        if (!openSuggestion) {
            setOpenSuggestion(true);
            document.addEventListener('click', closeSuggestions);
        }
        else {
            setOpenSuggestion(false);
        }
    }
    function closeSuggestions() {
        document.removeEventListener('click', closeSuggestions);
        setOpenSuggestion(false);
    }
    function toggleFocus() {
        if (!focus) {
            setFocus(true);
            document.addEventListener('click', removeFocus);
        }
        else {
            setFocus(false);
        }
    }
    function removeFocus() {
        document.removeEventListener('click', removeFocus);
        setFocus(false);
    }
    function renderSuggestions() {
        if (openSuggestion) {
            return (React.createElement("div", { className: 'autocomplete', ref: refSuggestions },
                React.createElement("ul", { className: 'suggestion-list' }, suggestions.length !== 0 ? (suggestions.map(function (item, index) {
                    return React.createElement("li", { className: 'suggestion-item', onClick: function () { return addTag(item); }, key: index }, item);
                })) : (items === null || items === void 0 ? void 0 : items.map(function (item, index) {
                    return React.createElement("li", { className: 'suggestion-item', onClick: function () { return addTag(item); }, key: index }, item);
                })))));
        }
        else if (suggestions.length === 0) {
            return null;
        }
        else {
            return (React.createElement("div", { className: 'autocomplete', ref: refSuggestions },
                React.createElement("ul", { className: 'suggestion-list' }, suggestions.map(function (item, index) {
                    return React.createElement("li", { className: 'suggestion-item', onClick: function () { return addTag(item); }, key: index }, item);
                }))));
        }
    }
    var classes = classnames_1.default('tags-input__tags', {
        'focused': focus,
        'tag-input__invalid-tag': invalid,
    });
    return (React.createElement("div", { className: 'sd-tag-input', "data-label": label },
        React.createElement("label", { className: 'tags-input__label' }, label),
        React.createElement("div", { className: 'tags-input', ref: refTagInput },
            React.createElement("div", { className: classes },
                items ?
                    React.createElement("button", { className: "tags-input__add-button", onClick: toggleSuggestions },
                        React.createElement("i", { className: "icon-plus-large" })) : null,
                React.createElement("ul", { className: 'tags-input__tag-list' },
                    tags.map(function (tag, i) {
                        return (React.createElement("li", { className: 'tags-input__tag-item' + (selectNumber === i ? ' selected' : ''), key: i },
                            tag,
                            React.createElement("a", { type: 'button', className: 'tags-input__remove-button', onClick: function () { return removeTag(i); } },
                                React.createElement("i", { className: 'icon-close-small' }))));
                    }),
                    React.createElement("li", { className: 'input-tag__tags__input' },
                        React.createElement("input", { type: 'text', className: 'tags-input__input' + (invalid ? ' invalid-tag' : ''), onChange: onTextChanged, ref: inputRef, onKeyDown: inputKeyDown, onClick: toggleFocus })))),
            items ? renderSuggestions() : null)));
};
