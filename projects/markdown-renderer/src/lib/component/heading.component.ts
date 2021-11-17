/*
 * @Descripttion: heading
 * @Author: KuuBee
 * @Date: 2021-11-12 15:10:44
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 11:36:12
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
  selector: 'md-heading',
  template: `<ng-container [ngSwitch]="depth">
    <h1 *ngSwitchCase="1">${conetnt}</h1>
    <h2 *ngSwitchCase="2">${conetnt}</h2>
    <h3 *ngSwitchCase="3">${conetnt}</h3>
    <h4 *ngSwitchCase="4">${conetnt}</h4>
    <h5 *ngSwitchCase="5">${conetnt}</h5>
    <h6 *ngSwitchDefault>${conetnt}</h6>
  </ng-container>`,
  styles: [],
})
export class HeadingComponent {
  @Input() data!: marked.Token;
  private get _data() {
    if (this.data.type !== 'heading') throw TypeError('Error heading type!');
    return this.data;
  }
  get depth() {
    return this._data.depth;
  }
  get text() {
    return this._data.text;
  }
  get tokens() {
    return this._data.tokens;
  }
}
