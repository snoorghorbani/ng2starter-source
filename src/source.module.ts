import { NgModule } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Observable } from 'rxjs/Observable';
import {
	MatIconModule,
	MatButtonModule,
	MatCardModule,
	MatSnackBarModule,
	MatSidenavModule,
	MatExpansionModule,
	MatSelectModule,
	MatFormFieldModule,
	MatListModule,
	MatMenuModule,
	MatRadioModule,
	MatInputModule,
	MatCheckboxModule,
	MatToolbarModule,
	MatDatepickerModule,
	MatProgressBarModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SourceReducers } from './reducers';
//import {
//        ConfigAppConfigComponent, AuthenticationModuleConfigComponent, UserModuleConfigComponent
//} from './dumb-components';
import { SourceService } from './services';
import { SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent } from './smart-components';
import { RoutingModule } from './source.routing-module';
import { SourceEffects } from './effects';
// import { DiagramModule } from "app/diagram";
//import { ConfigLoaded } from 'app/config/actions';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		FlexLayoutModule,
		MatIconModule,
		MatButtonModule,
		MatCardModule,
		MatSnackBarModule,
		MatSidenavModule,
		MatExpansionModule,
		MatSelectModule,
		MatFormFieldModule,
		MatListModule,
		MatMenuModule,
		MatCheckboxModule,
		MatRadioModule,
		MatInputModule,
		MatToolbarModule,
		MatDatepickerModule,
		MatProgressBarModule,
		BrowserModule,
		StoreModule.forFeature('source', SourceReducers),
		BrowserAnimationsModule,
		RoutingModule,
		// DiagramModule,
		EffectsModule.forFeature([ SourceEffects ])
	],
	declarations: [ SourceListComponent, SourceUpsertComponent, SourceModuleContainerComponent ],
	providers: [ SourceService ],
	exports: []
})
export class SourceModule {}
