import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarkdownRendererModule, RendererOptions } from '../../../../dist/ngx-markdown-renderer';
// import { MarkdownRendererModule, RendererOptions } from 'ngx-markdown-renderer';

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
