"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var services_1 = require("../../services");
//import { SourceUpsertAction } from 'app/actions';
var SourceListComponent = /** @class */ (function () {
    function SourceListComponent(sourceService // private store: Store<FeatureReducer.FeatureState>
    ) {
        this.sourceService = sourceService; // private store: Store<FeatureReducer.FeatureState>
        debugger;
        this.sources = this.sourceService.getSources();
        // this.sources.subscribe(data => { debugger})
        //this.configs.subscribe(data => {
        //        debugger;
        //        this.store.dispatch(new ConfigLoaded(data.Result));
        //});
    }
    SourceListComponent.prototype.ngOnInit = function () { };
    SourceListComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "source-list",
                    template: "<div fxFlexLayout=\"row\" fxLayoutWrap fxLayoutAlign=\"start center\">   <mat-card class=\"source-box\" *ngFor=\"let source of (sources | async)?.Result\" [fxFlex]=\"32\">       <mat-card-title fxFlexLayout=\"row\" flexLayoutAlign=\"space-between center\">                  <a [routerLink]=\"['edit' ,  source._id]\" fxFlex=\"40px\">           <mat-icon fxLayoutAlign=\"start center\" aria-label=\"edit source\">edit</mat-icon>         </a>         <span fxFlex fxLayoutAlign=\"end center\" fxFlexAlign=\"center\">{{source.Endpoint}}</span>       </mat-card-title>        </mat-card>    <div fxLayoutAlign='end center'>     <button mat-fab routerLink=\"../source/add\" class=\"add-btn\">       <mat-icon>add</mat-icon>     </button>   </div> </div>",
                    styles: [":host{     width: 100%; }  .source-box{     margin : 5px; } .source-box a {   text-decoration: none; } .add-btn {   position: fixed;   bottom: 50px;   left: 25px;   z-index:1; }"]
                },] },
    ];
    /** @nocollapse */
    SourceListComponent.ctorParameters = function () { return [
        { type: services_1.SourceService, },
    ]; };
    return SourceListComponent;
}());
exports.SourceListComponent = SourceListComponent;
//# sourceMappingURL=source-list.component.js.map