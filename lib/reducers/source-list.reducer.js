"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var source = require("../actions/source.action");
var ɵ0 = [];
exports.ɵ0 = ɵ0;
var initialState = {
    data: ɵ0
};
function Reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case source.SourceActionTypes.SOURCE_SUBMIT:
            return __assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_SUCCEED:
            return __assign({}, state);
        case source.SourceActionTypes.SOURCE_SUBMIT_FAILED:
            return __assign({}, state);
        default:
            return state;
    }
}
exports.Reducer = Reducer;
exports.getSourceListData = function (state) { return state.data; };
//# sourceMappingURL=source-list.reducer.js.map