"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var smart_components_1 = require("./smart-components");
var routes = [
    {
        path: "source",
        component: smart_components_1.SourceModuleContainerComponent,
        children: [
            {
                path: "",
                component: smart_components_1.SourceListComponent
            },
            {
                path: "edit/:id",
                component: smart_components_1.SourceUpsertComponent
            },
            {
                path: "add",
                component: smart_components_1.SourceUpsertComponent
            }
        ]
    }
];
exports.RoutingModule = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=source.routing-module.js.map