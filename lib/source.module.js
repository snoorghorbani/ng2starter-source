"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var flex_layout_1 = require("@angular/flex-layout");
var material_1 = require("@angular/material");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
var services_1 = require("./services");
var smart_components_1 = require("./smart-components");
var source_routing_module_1 = require("./source.routing-module");
var effects_2 = require("./effects");
// import { DiagramModule } from "app/diagram";
//import { ConfigLoaded } from 'app/config/actions';
var SourceModule = /** @class */ (function () {
    function SourceModule() {
    }
    SourceModule.decorators = [
        { type: core_1.NgModule, args: [{
                    imports: [
                        common_1.CommonModule,
                        router_1.RouterModule,
                        forms_1.FormsModule,
                        forms_1.ReactiveFormsModule,
                        http_1.HttpClientModule,
                        flex_layout_1.FlexLayoutModule,
                        material_1.MatIconModule,
                        material_1.MatButtonModule,
                        material_1.MatCardModule,
                        material_1.MatSnackBarModule,
                        material_1.MatSidenavModule,
                        material_1.MatExpansionModule,
                        material_1.MatSelectModule,
                        material_1.MatFormFieldModule,
                        material_1.MatListModule,
                        material_1.MatMenuModule,
                        material_1.MatCheckboxModule,
                        material_1.MatRadioModule,
                        material_1.MatInputModule,
                        material_1.MatToolbarModule,
                        material_1.MatDatepickerModule,
                        material_1.MatProgressBarModule,
                        platform_browser_1.BrowserModule,
                        // StoreModule.forFeature('source', SourceReducers),
                        animations_1.BrowserAnimationsModule,
                        source_routing_module_1.RoutingModule,
                        // DiagramModule,
                        // DiagramModule,
                        effects_1.EffectsModule.forFeature([effects_2.SourceEffects])
                    ],
                    declarations: [smart_components_1.SourceListComponent, smart_components_1.SourceUpsertComponent, smart_components_1.SourceModuleContainerComponent],
                    providers: [services_1.SourceService],
                    exports: []
                },] },
    ];
    /** @nocollapse */
    SourceModule.ctorParameters = function () { return []; };
    return SourceModule;
}());
exports.SourceModule = SourceModule;
//# sourceMappingURL=source.module.js.map