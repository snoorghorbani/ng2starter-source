"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var store_1 = require("@ngrx/store");
var sourceList = require("./source-list.reducer");
exports.SourceReducers = {
    sources: sourceList.Reducer
};
//#region selectors
exports.selectSourceState = store_1.createFeatureSelector("source");
//#endregion
exports.getSourceList = store_1.createSelector(exports.selectSourceState, function (state) { return state.list; });
//export const getSourceListData = createSelector(
//        getSourceList,
//        sourceList.getSourceListData
//);
//# sourceMappingURL=index.js.map