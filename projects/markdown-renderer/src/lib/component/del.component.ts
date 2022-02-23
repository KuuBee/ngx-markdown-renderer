/*
 * @Descripttion: del
 * @Author: KuuBee
 * @Date: 2021-11-18 10:05:59
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-18 14:18:31
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-del',
  template: `<del>
    <ng-container *ngIf="tokens.length; else content">
      <renderer *ngFor="let item of tokens" [token]="item"></renderer>
    </ng-container>
    <ng-template #content>{{ text }}</ng-template>
  </del>`,
})
export class DelComponent {
  @Input() data!: marked.Tokens.Del;
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data.tokens;
  }
}
