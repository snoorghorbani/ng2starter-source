"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var models_1 = require("../../models");
var services_1 = require("../../services");
var store_1 = require("@ngrx/store");
var router_1 = require("@angular/router");
var actions_1 = require("../../actions");
var SourceUpsertComponent = /** @class */ (function () {
    function SourceUpsertComponent(sourceService, formBuilder, route, store) {
        var _this = this;
        this.sourceService = sourceService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.store = store;
        //configInforamation;
        this.formGroup = models_1.UpsertSourceApiModel.Request.formGroup;
        this.types = ["critical", "goal"];
        // this.sources = this.sourceService.getSources();
        this.thresholds = this.formGroup.controls.Thresholds.controls;
        this.route.params.subscribe(function (params) {
            var sourceId = params["id"];
            sourceId &&
                _this.sourceService.getSourceById(sourceId).subscribe(function (data) {
                    _this.formGroup.patchValue({
                        _id: data._id,
                        Endpoint: data.Endpoint,
                        Interval: data.Interval,
                        IsActive: data.IsActive || false,
                        Thresholds: data.Thresholds
                    });
                    data.Thresholds.forEach(function (mapping) {
                        return _this.addItem(mapping.Name, mapping.Formula, mapping.Message, mapping.Type);
                    });
                });
        });
    }
    SourceUpsertComponent.prototype.ngOnInit = function () { };
    SourceUpsertComponent.prototype.addItem = function (Name, Formula, Message, Type) {
        if (Name === void 0) { Name = ""; }
        if (Formula === void 0) { Formula = ""; }
        if (Message === void 0) { Message = ""; }
        if (Type === void 0) { Type = "critical"; }
        var control = this.formGroup.controls["Thresholds"];
        control.push(new forms_1.FormGroup({
            Name: new forms_1.FormControl(Name, [forms_1.Validators.required]),
            Formula: new forms_1.FormControl(Formula, [forms_1.Validators.required]),
            Message: new forms_1.FormControl(Message, [forms_1.Validators.required]),
            Type: new forms_1.FormControl(Type, [forms_1.Validators.required])
        }));
        //    control.push(this.formBuilder.group({
        //      Name: [Name],
        //      Formula: [Formula],
        //      Message: [Message]
        //    }));
    };
    SourceUpsertComponent.prototype.removeItem = function (i) {
        var control = this.formGroup.controls["Thresholds"];
        control.removeAt(i);
    };
    SourceUpsertComponent.prototype.getData = function () {
        var _this = this;
        var o$ = this.sourceService.getData(this.formGroup.value);
        o$.subscribe(function (data) {
            debugger;
            _this.data = data.Data;
        });
        return o$;
    };
    SourceUpsertComponent.prototype.add = function (data) {
        //if (!this.formGroup.valid) return;
        this.store.dispatch(new actions_1.SourceSubmit(this.formGroup.value));
    };
    SourceUpsertComponent.decorators = [
        { type: core_1.Component, args: [{
                    selector: "source-source-upsert",
                    template: "<div fxLayout=\"column\">   <div fxFlex=\"100\">     <mat-card fxLayout=\"column\" fxFlex=\"50\">       <form [formGroup]=\"formGroup\" fxLayout='column'>          <mat-card-header>           <mat-card-title>\u0627\u0641\u0632\u0648\u062F\u0646 \u0646\u0645\u0648\u062F\u0627\u0631 \u062C\u062F\u06CC\u062F</mat-card-title>         </mat-card-header>         <mat-card-content>           <mat-form-field fxFlexFill>             <input matInput placeholder=\"\u0622\u062F\u0631\u0633\" formControlName=\"Endpoint\">           </mat-form-field>            <mat-form-field fxFlexFill>             <input matInput placeholder=\"\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0628\u0647 \u0631\u0648\u0632 \u0631\u0633\u0627\u0646\u06CC \u062F\u0627\u062F\u0647\" formControlName=\"Interval\">           </mat-form-field>           <div>             <mat-checkbox formControlName=\"IsActive\" fxFlexFill>\u0648\u0636\u0639\u06CC\u062A</mat-checkbox>           </div>         </mat-card-content>       </form>     </mat-card>      <mat-card fxLayout=\"column\" fxFlex=\"20\">       <mat-card-content fxLayout=\"column\">         <div>           <button fxFlex mat-raised-button color=\"primary\" (click)=\"getData()\">\u0633\u0627\u062E\u062A\u0627\u0631 \u062F\u06CC\u062A\u0627</button>         </div>         <div class=\"item-margin\">           <!-- TODO: -->           <!-- <data-mapper destination=\"value\" [data]=\"data\"></data-mapper> -->         </div>       </mat-card-content>     </mat-card>      <mat-card fxLayout=\"column\" fxFlex=\"30\">       <mat-card-content fxLayout=\"column\">         <div fxLayout=\"column\" fxLayoutGap=\"5px\">           <div *ngFor=\"let threshold of thresholds; let i=index\" fxFlex=\"100\" class=\"add-item\">             <div fxLayout=\"column\">               <div [formGroup]=\"thresholds[i]\" fxLayout=\"column\">                 <mat-form-field fxFlexFill>                   <input matInput placeholder=\"\u0646\u0627\u0645\" formControlName=\"Name\">                 </mat-form-field>                 <mat-form-field fxFlexFill>                   <input class=\"ltr\" matInput placeholder=\"\u0641\u0631\u0645\u0648\u0644\" formControlName=\"Formula\">                 </mat-form-field>                 <mat-form-field fxFlexFill>                   <input matInput placeholder=\"\u062A\u0648\u0636\u06CC\u062D\" formControlName=\"Message\">                 </mat-form-field>                 <mat-radio-group formControlName=\"Type\" fxFlexFill>                   <label>\u0646\u0648\u0639 :</label>                   <mat-radio-button *ngFor=\"let item of types\" [value]=\"item\" class=\"form-element-margin\">                     {{item}}                   </mat-radio-button>                 </mat-radio-group>                  <button (click)=\"removeItem(i)\" fxFlex mat-button color=\"primary\" type=\"button\">\u067E\u0627\u06A9 \u06A9\u0631\u062F\u0646</button>               </div>               <br />             </div>           </div>         </div>         <div class=\"item-margin\">           <button (click)=\"addItem()\" fxFlex mat-raised-button color=\"primary\" type=\"button\">\u0627\u0641\u0632\u0648\u062F\u0646 \u0622\u0633\u062A\u0627\u0646\u0647</button>         </div>       </mat-card-content>     </mat-card>   </div>   <div fxFlex=\"100\">     <mat-card fxLayoutAlign=\"end center\" fxLayout=\"row\" fxFlex=\"100\">       <mat-card-content>         <button mat-raised-button fxFlex color=\"primary\" (click)=\"add($event)\">\u062B\u0628\u062A</button>         <button fxFlex mat-raised-button routerLink='/source'  fxLayoutGap=\"5px\">\u0627\u0646\u0635\u0631\u0627\u0641</button>       </mat-card-content>     </mat-card>   </div> </div>",
                    styles: ["mat-card {   margin: 5px; } .add-item {   border: 1px solid #eaeaea;   padding: 10px;   margin: 5px 0; } .item-margin {   margin-top : 10px; } button[type=submit] {   margin-left: 5px; } .ltr {   direction: ltr; }  .form-element-margin {   margin: 5px 10px; }"]
                },] },
    ];
    /** @nocollapse */
    SourceUpsertComponent.ctorParameters = function () { return [
        { type: services_1.SourceService, },
        { type: forms_1.FormBuilder, },
        { type: router_1.ActivatedRoute, },
        { type: store_1.Store, },
    ]; };
    return SourceUpsertComponent;
}());
exports.SourceUpsertComponent = SourceUpsertComponent;
//# sourceMappingURL=source-upsert.component.js.map