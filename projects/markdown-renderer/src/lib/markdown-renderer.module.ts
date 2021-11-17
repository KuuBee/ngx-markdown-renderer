import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlockquoteComponent } from './component/blockquote.component';
import { CodespanComponent } from './component/codespan.component';
import { HeadingComponent } from './component/heading.component';
import { HrComponent } from './component/hr.component';
import { ImageComponent } from './component/image.component';
import { LinkComponent } from './component/link.component';
import { ListItemComponent } from './component/list-item.component';
import { ListCompoent } from './component/list.component';
import { ParagraphComponent } from './component/paragraph.component';
import { RendererComponent } from './component/renderer.component';
import { StrongComponent } from './component/strong.component';
import { TextComponent } from './component/text.component';
import { MarkdownRendererComponent } from './markdown-renderer.component';

@NgModule({
  declarations: [
    MarkdownRendererComponent,
    RendererComponent,
    HeadingComponent,
    BlockquoteComponent,
    ParagraphComponent,
    CodespanComponent,
    HrComponent,
    ImageComponent,
    LinkComponent,
    StrongComponent,
    ListCompoent,
    ListItemComponent,
    TextComponent,
  ],
  imports: [CommonModule],
  exports: [MarkdownRendererComponent],
})
export class MarkdownRendererModule {}
