import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/switchMap";

import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { Store } from "@ngrx/store";

import { SourceActionTypes, SourceSubmit, SourceSubmitSucceed, SourceSubmitFailed } from "../actions";
import { SourceModel, UpsertSourceApiModel } from "../models";
import { SourceService } from "../services";

@Injectable()
export class SourceEffects {
	constructor(private actions$: Actions<any>, private router: Router, private sourceService: SourceService) {}

	@Effect()
	afterSubmitSource$ = this.actions$
		.ofType(SourceActionTypes.SOURCE_SUBMIT)
		.map(toPayload)
		.switchMap((data: UpsertSourceApiModel.Request) => {
			return this.sourceService
				.upsertSource(data)
				.map((res) => new SourceSubmitSucceed())
				.catch(() => Observable.of(new SourceSubmitFailed()));
		});

	@Effect()
	SigninSucceed$ = this.actions$.ofType(SourceActionTypes.SOURCE_SUBMIT_SUCCEED).switchMap(() => {
		this.router.navigate([ "source" ]);
		return Observable.empty();
	});
}
