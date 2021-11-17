/*
 * @Descripttion: > ....
 * @Author: KuuBee
 * @Date: 2021-11-12 15:55:41
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-15 13:14:46
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

const conetnt = `<ng-container *ngIf="tokens.length; else content">
  <renderer [tokenList]="tokens"></renderer>
</ng-container>
<ng-template #content>
{{ text }}
</ng-template>`;
@Component({
  selector: 'md-blockquote',
  template: `<blockquote>${conetnt}</blockquote>`,
})
export class BlockquoteComponent {
  @Input() data!: marked.Token;
  protected get _data() {
    if (this.data.type !== 'blockquote')
      throw TypeError('error blockquote type');
    return this.data;
  }
  get text() {
    return this._data.text;
  }
  get tokens() {
    return this._data.tokens;
  }
}
