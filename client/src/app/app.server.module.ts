// angular
import { NgModule } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// shared
import { TranslatesServerModule } from '@shared/translates/translates-server';
// components
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { CookieService, CookieBackendService } from '@gorniv/ngx-universal';
import { InlineStyleModule } from './inline-style/inline-style.module';
import { InlineStyleComponent } from './inline-style/inline-style.component';

@NgModule({
  imports: [
    // AppModule - FIRST!!!
    AppModule,
    ServerModule,
    NoopAnimationsModule,
    ServerTransferStateModule,
    TranslatesServerModule,
    InlineStyleModule,

],
  bootstrap: [AppComponent, InlineStyleComponent],
  providers: [
    { provide: CookieService, useClass: CookieBackendService },
  ],
})
export class AppServerModule {}
