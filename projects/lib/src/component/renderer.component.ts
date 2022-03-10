import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { marked } from 'marked';
import { BlockquoteDirective } from '../directive/blockquote.directive';
import { BrDirective } from '../directive/br.directive';
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
import { TableDirective } from '../directive/table.directive';
import { TextDirective } from '../directive/text.directive';
import { MarkdownRendererService } from '../markdown-renderer.service';

type Token = marked.Token;
// "space" | "code" | "heading" | "table" | "hr" | "blockquote" | "list"
//  | "list_item" | "paragraph" | "html" | "text" | "def" | "escape" |
//  "image" | "link" | "strong" | "em" | "codespan" | "br" | "del"
@Component({
  selector: 'renderer',
  templateUrl: './renderer.component.html',
})
export class RendererComponent implements OnInit {
  constructor(private mdRendererService: MarkdownRendererService) { }
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
  @ViewChild(TableDirective, { static: true }) mdTable!: TableDirective
  @ViewChild(BrDirective, { static: true }) mdBr!: BrDirective

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
      mdTable: this.mdTable,
      mdBr: this.mdBr
    });

  }
  setComponent(ref: ViewContainerRef, component: any, data?: Record<string, any>) {
    const componentRef = ref.createComponent<any>(component)
    if (data)
      for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
          const element = data[key];
          componentRef.instance[key] = element;
        }
      }
  }
}
