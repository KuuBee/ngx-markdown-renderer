/*
 * @Descripttion: strong
 * @Author: KuuBee
 * @Date: 2021-11-16 11:30:25
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 11:30:26
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
  selector: 'md-strong',
  template: `<strong>${conetnt}</strong>`,
})
export class StrongComponent {
  @Input() data!: marked.Token;
  protected get _data() {
    if (this.data.type !== 'strong') throw TypeError('error strong type');
    return this.data;
  }
  get text() {
    return this._data.text;
  }
  get tokens() {
    return this._data.tokens;
  }
}
