import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { BlockquoteComponent } from './component/blockquote.component';
import { BrComponent } from './component/br.component';
import { CodeComponent } from './component/code.component';
import { CodespanComponent } from './component/codespan.component';
import { DelComponent } from './component/del.component';
import { EmComponent } from './component/em.component';
import { HeadingComponent } from './component/heading.component';
import { HrComponent } from './component/hr.component';
import { HTMLComponent } from './component/html.component';
import { ImageComponent } from './component/image.component';
import { LinkComponent } from './component/link.component';
import { ListItemComponent } from './component/list-item.component';
import { ListCompoent } from './component/list.component';
import { ParagraphComponent } from './component/paragraph.component';
import { RendererComponent } from './component/renderer.component';
import { SpaceComponent } from './component/space.component';
import { StrongComponent } from './component/strong.component';
import { TableComponent } from './component/table.component';
import { TextComponent } from './component/text.component';
import { BlockquoteDirective } from './directive/blockquote.directive';
import { CodeDirective } from './directive/code.directive';
import { CodespanDirective } from './directive/codespan.directive';
import { DelDirective } from './directive/del.directive';
import { EmDirective } from './directive/em.directive';
import { HeadingDirective } from './directive/heading.directive';
import { HrDirective } from './directive/hr.directive';
import { HTMLDirective } from './directive/html.directive';
import { ImageDirective } from './directive/image.directive';
import { LinkDirective } from './directive/link.directive';
import { ListItemDirective } from './directive/list-item.directive';
import { ListDirective } from './directive/list.directive';
import { ParagraphDirective } from './directive/paragraph.directive';
import { SpaceDirective } from './directive/space.directive';
import { StrongDirective } from './directive/strong.directive';
import { TableDirective } from './directive/table.directive';
import { TextDirective } from './directive/text.directive';
import { MarkdownRendererComponent } from './markdown-renderer.component';
import { MarkdownRendererService } from './markdown-renderer.service';

const component = [
  MarkdownRendererComponent,
  RendererComponent,
  HeadingComponent,
  BlockquoteComponent,
  ParagraphComponent,
  CodeComponent,
  CodespanComponent,
  HrComponent,
  ImageComponent,
  LinkComponent,
  StrongComponent,
  ListCompoent,
  ListItemComponent,
  TextComponent,
  DelComponent,
  EmComponent,
  SpaceComponent,
  HTMLComponent,
  TableComponent,
  BrComponent,
]
const directive = [
  HeadingDirective,
  ParagraphDirective,
  BlockquoteDirective,
  CodeDirective,
  CodespanDirective,
  DelDirective,
  HeadingDirective,
  HrDirective,
  ImageDirective,
  LinkDirective,
  ListItemDirective,
  ListDirective,
  StrongDirective,
  TableDirective,
  TextDirective,
  EmDirective,
  SpaceDirective,
  HTMLDirective,
]

@NgModule({
  declarations: [
    ...component,
    ...directive,
  ],
  imports: [CommonModule],
  exports: [...component, CommonModule],
})
export class MarkdownRendererModule {
  static forRoot(rendererOptions?: Provider): ModuleWithProviders<MarkdownRendererModule> {
    return {
      ngModule: MarkdownRendererModule,
      providers: [
        MarkdownRendererService,
        rendererOptions ?? [],
      ]
    }
  }
}
