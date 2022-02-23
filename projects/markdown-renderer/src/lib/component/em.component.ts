/*
 * @Descripttion: em
 * @Author: KuuBee
 * @Date: 2022-02-23 11:37:47
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:42:32
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-em',
  template: `<em>
    <ng-container *ngIf="tokens.length; else content">
      <renderer *ngFor="let item of tokens" [token]="item"></renderer>
    </ng-container>
    <ng-template #content>{{ text }}</ng-template>
  </em>`,
})
export class EmComponent {
  @Input() data!: marked.Tokens.Em;
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data.tokens;
  }
}
