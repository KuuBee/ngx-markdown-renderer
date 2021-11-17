/*
 * @Descripttion:
 * @Author: KuuBee
 * @Date: 2021-11-12 16:20:46
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-12 16:20:46
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-text',
  template: `<ng-container *ngIf="tokens.length; else content">
      <renderer [tokenList]="tokens"></renderer>
    </ng-container>
    <ng-template #content>
      {{ text }}
    </ng-template>`,
})
export class TextComponent {
  @Input() data!: marked.Token;
  protected get _data() {
    if (this.data.type === 'html' || this.data.type !== 'text')
      throw TypeError('error text type');
    return this.data as marked.Tokens.Text;
  }
  get text() {
    return this._data.text;
  }
  get tokens() {
    return this._data?.tokens ?? [];
  }
}
