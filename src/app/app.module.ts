import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { WhatsCloneApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ChatsPage } from '../pages/chats/chats';

@NgModule({
	declarations: [
		WhatsCloneApp,
		ChatsPage,
		TabsPage
	],
	imports: [
		IonicModule.forRoot(WhatsCloneApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		WhatsCloneApp,
		ChatsPage,
		TabsPage
	],
	providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
