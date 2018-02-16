"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
var SourceModuleContainerComponent = /** @class */ (function () {
    function SourceModuleContainerComponent(service) {
        this.service = service;
    }
    SourceModuleContainerComponent.prototype.ngOnInit = function () {
    };
    SourceModuleContainerComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'source-module-container',
                    template: "<div fxLayoutAlign=\"\" fxflex=\"100\" fxLayout=\"column\">     <router-outlet></router-outlet> </div>"
                },] },
    ];
    /** @nocollapse */
    SourceModuleContainerComponent.ctorParameters = function () { return [
        { type: services_1.SourceService, },
    ]; };
    return SourceModuleContainerComponent;
}());
exports.SourceModuleContainerComponent = SourceModuleContainerComponent;
//# sourceMappingURL=source-module-container.component.js.map