import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HistoriaPage } from '../pages/historia/historia';
import { DibujoPage } from '../pages/dibujo/dibujo';
import { ComunicacionPage } from '../pages/comunicacion/comunicacion';
import { CalPage } from '../pages/cal/cal';
import { PappsPage } from '../pages/papps/papps';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    ComunicacionPage,
    CalPage,
    PappsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HistoriaPage,
    DibujoPage,
    ComunicacionPage,
    CalPage,
    PappsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
