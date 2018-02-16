"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GetSourcesApiModel;
(function (GetSourcesApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {};
        };
        return Request;
    }());
    GetSourcesApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    GetSourcesApiModel.Response = Response;
})(GetSourcesApiModel = exports.GetSourcesApiModel || (exports.GetSourcesApiModel = {}));
//# sourceMappingURL=get-sources-api.model.js.map