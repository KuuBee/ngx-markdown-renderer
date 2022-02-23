import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { marked } from 'marked';
import { BlockquoteDirective } from '../directive/blockquote.directive';
import { CodeDirective } from '../directive/code.directive';
import { CodespanDirective } from '../directive/codespan.directive';
import { DelDirective } from '../directive/del.directive';
import { EmDirective } from '../directive/em.directive';
import { HeadingDirective } from '../directive/heading.directive';
import { HrDirective } from '../directive/hr.directive';
import { HTMLDirective } from '../directive/html.directive';
import { ImageDirective } from '../directive/image.directive';
import { LinkDirective } from '../directive/link.directive';
import { ListItemDirective } from '../directive/list-item.directive';
import { ListDirective } from '../directive/list.directive';
import { ParagraphDirective } from '../directive/paragraph.directive';
import { SpaceDirective } from '../directive/space.directive';
import { StrongDirective } from '../directive/strong.directive';
import { TextDirective } from '../directive/text.directive';
import { MarkdownRendererService } from '../markdown-renderer.service';
import { BlockquoteComponent } from './blockquote.component';
import { CodeComponent } from './code.component';
import { CodespanComponent } from './codespan.component';
import { DelComponent } from './del.component';
import { EmComponent } from './em.component';
import { HeadingComponent } from './heading.component';
import { HrComponent } from './hr.component';
import { HTMLComponent } from './html.component';
import { ImageComponent } from './image.component';
import { LinkComponent } from './link.component';
import { ListItemComponent } from './list-item.component';
import { ListCompoent } from './list.component';
import { ParagraphComponent } from './paragraph.component';
import { SpaceComponent } from './space.component';
import { StrongComponent } from './strong.component';
import { TextComponent } from './text.component';

type Token = marked.Token;
// "space" | "code" | "heading" | "table" | "hr" | "blockquote" | "list"
//  | "list_item" | "paragraph" | "html" | "text" | "def" | "escape" |
//  "image" | "link" | "strong" | "em" | "codespan" | "br" | "del"
@Component({
  selector: 'renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss'],
})
export class RendererComponent implements OnInit {
  constructor(private _componentFactoryResolver: ComponentFactoryResolver, private mdRendererService: MarkdownRendererService) { }
  @Input()
  get token(): Token {
    if (!this._token) throw Error('token can not be null')
    return this._token;
  }
  set token(data: Token) {
    this._token = data;
  }
  @ViewChild(HeadingDirective, { static: true }) mdHeading!: HeadingDirective
  @ViewChild(BlockquoteDirective, { static: true }) mdBlockquote!: BlockquoteDirective
  @ViewChild(CodeDirective, { static: true }) mdCode!: CodeDirective
  @ViewChild(CodespanDirective, { static: true }) mdCodespan!: CodespanDirective
  @ViewChild(DelDirective, { static: true }) mdDel!: DelDirective
  @ViewChild(HrDirective, { static: true }) mdHr!: HrDirective
  @ViewChild(ImageDirective, { static: true }) mdImage!: ImageDirective
  @ViewChild(LinkDirective, { static: true }) mdLink!: LinkDirective
  @ViewChild(ListDirective, { static: true }) mdList!: ListDirective
  @ViewChild(ListItemDirective, { static: true }) mdListItem!: ListItemDirective
  @ViewChild(ParagraphDirective, { static: true }) mdParagraph!: ParagraphDirective
  @ViewChild(StrongDirective, { static: true }) mdStrong!: StrongDirective
  @ViewChild(TextDirective, { static: true }) mdText!: TextDirective
  @ViewChild(EmDirective, { static: true }) mdEm!: EmDirective
  @ViewChild(SpaceDirective, { static: true }) mdSpace!: SpaceDirective
  @ViewChild(HTMLDirective, { static: true }) mdHTML!: HTMLDirective

  private _token: Token | null = null;
  ngOnInit(): void {
    this.mdRendererService.loadComponent(this.token, {
      mdHTML: this.mdHTML,
      mdHeading: this.mdHeading,
      mdBlockquote: this.mdBlockquote,
      mdCode: this.mdCode,
      mdCodespan: this.mdCodespan,
      mdDel: this.mdDel,
      mdEm: this.mdEm,
      mdHr: this.mdHr,
      mdImage: this.mdImage,
      mdLink: this.mdLink,
      mdList: this.mdList,
      mdListItem: this.mdListItem,
      mdParagraph: this.mdParagraph,
      mdSpace: this.mdSpace,
      mdStrong: this.mdStrong,
      mdText: this.mdText,
    });

  }
  loadComponent(data: marked.Token) {
    switch (data.type) {
      case "heading": {
        this.setComponent(this.mdHeading.viewContainerRef, HeadingComponent, {
          data,
        })
        break;
      }
      case "blockquote": {
        this.setComponent(this.mdBlockquote.viewContainerRef, BlockquoteComponent, {
          data,
        })
        break;
      }
      case "code": {
        this.setComponent(this.mdCode.viewContainerRef, CodeComponent, {
          data,
        })
        break;
      }
      case "codespan": {
        this.setComponent(this.mdCodespan.viewContainerRef, CodespanComponent, {
          data,
        })
        break;
      }
      case "del": {
        this.setComponent(this.mdDel.viewContainerRef, DelComponent, {
          data,
        })
        break;
      }
      case "hr": {
        this.setComponent(this.mdHeading.viewContainerRef, HrComponent)
        break;
      }
      case "image": {
        this.setComponent(this.mdImage.viewContainerRef, ImageComponent, {
          data,
        })
        break;
      }
      case "link": {
        this.setComponent(this.mdLink.viewContainerRef, LinkComponent, {
          data,
        })
        break;
      }
      case "list_item": {
        this.setComponent(this.mdListItem.viewContainerRef, ListItemComponent, {
          data,
        })
        break;
      }
      case "list": {
        this.setComponent(this.mdList.viewContainerRef, ListCompoent, {
          data,
        })
        break;
      }
      case "paragraph": {
        this.setComponent(this.mdParagraph.viewContainerRef, ParagraphComponent, {
          data,
        })
        break;
      }
      case "strong": {
        this.setComponent(this.mdStrong.viewContainerRef, StrongComponent, {
          data,
        })
        break;
      }
      case "text": {
        this.setComponent(this.mdText.viewContainerRef, TextComponent, {
          data,
        })
        break;
      }
      case "em": {
        this.setComponent(this.mdEm.viewContainerRef, EmComponent, {
          data,
        })
        break;
      }
      case "space": {
        this.setComponent(this.mdSpace.viewContainerRef, SpaceComponent, {
          data,
        })
        break;
      }
      case "html": {
        this.setComponent(this.mdHTML.viewContainerRef, HTMLComponent, {
          data,
        })
        break;
      }
      // TODO Table
      // case : {
      //   this.setComponent(this.mdList.viewContainerRef, ListCompoent, {
      //     data,
      //   })
      //   break;
      // }
      default:
        console.log('未知类型:', data.type);
        break;
    }
  }
  setComponent(ref: ViewContainerRef, component: any, data?: Record<string, any>) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(component)
    const componentRef = ref.createComponent<any>(componentFactory)
    if (data)
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          componentRef.instance[key] = element;
        }
      }
  }
  trackByItems(_: number, item: Token) {
    return item.raw + item.type;
  }
  hasTokens(item: Token): boolean {
    const res = this.getTokens(item);
    return !!res.length;
  }
  getTokens(item: Token): Token[] {
    switch (item.type) {
      case 'paragraph':
        return item.tokens;
      case 'em':
        return item.tokens;
      case 'text': {
        // text 类型下有 Tag 和 Text 两种类型
        if ((item as marked.Tokens.Tag).inLink !== undefined) return [];
        else return (item as marked.Tokens.Text).tokens ?? [];
      }
      case 'heading':
      default:
        return [];
    }
  }
  getText(item: any) {
    return item?.text ?? '';
  }
}
