import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Actions } from "@ngrx/effects";
import { SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceService } from "../services";
export declare class SourceEffects {
    private actions$;
    private router;
    private sourceService;
    constructor(actions$: Actions<any>, router: Router, sourceService: SourceService);
    afterSubmitSource$: Observable<SourceSubmitSucceed | SourceSubmitFailed>;
    SigninSucceed$: Observable<{}>;
}
