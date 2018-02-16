"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SourceActionTypes;
(function (SourceActionTypes) {
    SourceActionTypes["SOURCE_SUBMIT"] = "[SOURCE] source submit";
    SourceActionTypes["SOURCE_SUBMIT_SUCCEED"] = "[SOURCE] source submit succeed";
    SourceActionTypes["SOURCE_SUBMIT_FAILED"] = "[SOURCE] source submit failed";
})(SourceActionTypes = exports.SourceActionTypes || (exports.SourceActionTypes = {}));
var SourceSubmit = /** @class */ (function () {
    function SourceSubmit(payload) {
        this.payload = payload;
        this.type = SourceActionTypes.SOURCE_SUBMIT;
    }
    return SourceSubmit;
}());
exports.SourceSubmit = SourceSubmit;
var SourceSubmitSucceed = /** @class */ (function () {
    function SourceSubmitSucceed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_SUCCEED;
    }
    return SourceSubmitSucceed;
}());
exports.SourceSubmitSucceed = SourceSubmitSucceed;
var SourceSubmitFailed = /** @class */ (function () {
    function SourceSubmitFailed() {
        this.type = SourceActionTypes.SOURCE_SUBMIT_FAILED;
    }
    return SourceSubmitFailed;
}());
exports.SourceSubmitFailed = SourceSubmitFailed;
//# sourceMappingURL=source.action.js.map