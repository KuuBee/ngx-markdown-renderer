/*
 * @Descripttion: link
 * @Author: KuuBee
 * @Date: 2021-11-16 10:44:06
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 13:27:21
 */
import { Component, Input } from '@angular/core';
import { marked } from 'marked';

const conetnt = `<ng-container *ngIf="tokens.length; else content">
<renderer [tokenList]="tokens">{{ text }}</renderer>
</ng-container>
<ng-template #content>
{{ text }}
</ng-template>`;

@Component({
  selector: 'md-link',
  template: `<a [href]="href" [title]="title"> ${conetnt} </a>`,
})
export class LinkComponent {
  @Input() data!: marked.Token;
  protected get _data() {
    if (this.data.type !== 'link') throw TypeError('error link type');
    return this.data;
  }
  get href() {
    return this._data.href;
  }
  get text() {
    return this._data.text;
  }
  get title() {
    return this._data.title ?? '';
  }
  get tokens() {
    return this._data.tokens;
  }
}
