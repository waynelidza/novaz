///<reference path="../../node_modules/@ionic-native/file-transfer/index.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPageModule} from "../pages/login/login.module";
import { NovaServiceProvider } from '../providers/nova-service/nova-service';
import {HttpClient} from "@angular/common/http";
import {ShatrishaPageModule} from "../pages/shatrisha/shatrisha.module";
import {VideoPlayer} from "@ionic-native/video-player";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage
  ],
  imports: [
    BrowserModule,
    LoginPageModule,
    ShatrishaPageModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage
  ],
  providers: [
    StatusBar,
    HttpClient,
    FileTransfer,
    VideoPlayer,
    FileTransferObject,
    File,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NovaServiceProvider
  ]
})
export class AppModule {}
