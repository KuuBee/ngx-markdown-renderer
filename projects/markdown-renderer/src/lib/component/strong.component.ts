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
  <renderer *ngFor="let item of tokens" [token]="item"></renderer>
</ng-container>
<ng-template #content>
{{ text }}
</ng-template>`;

@Component({
  selector: 'md-strong',
  template: `<strong>${conetnt}</strong>`,
})
export class StrongComponent {
  @Input() data!: marked.Tokens.Strong;
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data.tokens;
  }
}
