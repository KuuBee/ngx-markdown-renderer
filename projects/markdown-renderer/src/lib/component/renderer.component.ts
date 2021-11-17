import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';

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
  constructor() {}
  @Input()
  get tokenList(): Token[] {
    return this._tokenList;
  }
  set tokenList(data: Token[]) {
    this._tokenList = Array.from(data);
  }
  private _tokenList: Token[] = [];
  ngOnInit(): void {}
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
