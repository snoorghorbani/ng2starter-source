"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Rx_1 = require("rxjs/Rx");
var models_1 = require("../models");
var SourceService = /** @class */ (function () {
    function SourceService(http) {
        this.http = http;
    }
    SourceService.prototype.getSources = function () {
        return this.http
            .get("http://localhost:3000/api/source")
            .map(function (response) {
            return response;
        })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    SourceService.prototype.getSourceById = function (id) {
        return this.http
            .get("http://localhost:3000/api/source/" + id)
            .map(function (response) { return response.Result; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    SourceService.prototype.upsertSource = function (body) {
        var model = new models_1.UpsertSourceApiModel.Request(body);
        return this.http
            .put("http://localhost:3000/api/source", model.getRequestBody(), { withCredentials: false })
            .map(function (response) { return response; })
            .catch(function (err) {
            return Rx_1.Observable.throw(err);
        });
    };
    SourceService.prototype.getData = function (source, time) {
        if (time === void 0) { time = 0; }
        return this.http
            .get("http://localhost:3000/api/data", {
            params: {
                sourceId: source._id,
                time: null
            }
        })
            .map(function (res) { return res.Result; });
    };
    SourceService.decorators = [
        { type: core_1.Injectable },
    ];
    /** @nocollapse */
    SourceService.ctorParameters = function () { return [
        { type: http_1.HttpClient, },
    ]; };
    return SourceService;
}());
exports.SourceService = SourceService;
//# sourceMappingURL=source.service.js.map