"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var UpsertSourceApiModel;
(function (UpsertSourceApiModel) {
    var Request = /** @class */ (function () {
        function Request(initValue) {
            if (initValue === void 0) { initValue = {}; }
            var _this = this;
            Object.keys(initValue).forEach(function (key) { return (_this[key] = initValue[key]); });
        }
        Request.prototype.getRequestBody = function () {
            return {
                _id: this._id,
                Endpoint: this.Endpoint,
                Interval: this.Interval,
                IsActive: this.IsActive,
                Thresholds: this.Thresholds
            };
        };
        Object.defineProperty(Request, "formGroup", {
            get: function () {
                return new forms_1.FormGroup({
                    _id: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Endpoint: new forms_1.FormControl("", [forms_1.Validators.required]),
                    Interval: new forms_1.FormControl("", [forms_1.Validators.required]),
                    IsActive: new forms_1.FormControl("false", [forms_1.Validators.required]),
                    Thresholds: new forms_1.FormArray([])
                });
            },
            enumerable: true,
            configurable: true
        });
        return Request;
    }());
    UpsertSourceApiModel.Request = Request;
    var Response = /** @class */ (function () {
        function Response() {
        }
        return Response;
    }());
    UpsertSourceApiModel.Response = Response;
})(UpsertSourceApiModel = exports.UpsertSourceApiModel || (exports.UpsertSourceApiModel = {}));
//# sourceMappingURL=upsert-source-api.model.js.map