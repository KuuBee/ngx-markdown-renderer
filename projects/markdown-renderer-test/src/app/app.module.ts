import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RendererOptions } from 'projects/lib/src/lib/renderer-options';
import { MarkdownRendererModule } from '../../../lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarkdownRendererModule.forRoot({
    provide: RendererOptions,
    useFactory() {
      const renderer = new RendererOptions();
      renderer.components = {
        // heading: CustomHeadingComponent
      }
      return renderer;
    }
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
