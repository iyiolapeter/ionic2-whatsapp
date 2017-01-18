import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WhatsCloneApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
	declarations: [
		WhatsCloneApp,
		TabsPage
	],
	imports: [
		IonicModule.forRoot(WhatsCloneApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		WhatsCloneApp,
		TabsPage
	],
	providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
