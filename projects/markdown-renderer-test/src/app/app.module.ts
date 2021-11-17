import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownRendererModule } from '../../../markdown-renderer/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarkdownRendererModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
