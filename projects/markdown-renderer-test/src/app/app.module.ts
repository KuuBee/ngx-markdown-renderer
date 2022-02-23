import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractHeadingComponent } from 'projects/markdown-renderer/src/lib/component/heading.component';
import { RendererOptions } from 'projects/markdown-renderer/src/lib/renderer-options';
import { MarkdownRendererModule, Test } from '../../../markdown-renderer/src/public-api';
import { CustomHeadingComponent } from '../components/custom-heading.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MarkdownRendererModule.forRoot({
    provide: RendererOptions,
    useFactory() {
      const renderer = new RendererOptions();
      renderer.components = {
        heading: CustomHeadingComponent
      }
      return renderer;
    }
  })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
