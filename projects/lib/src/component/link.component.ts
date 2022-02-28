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
  <renderer *ngFor="let item of tokens" [token]="item"></renderer>
</ng-container>
<ng-template #content>
{{ text }}
</ng-template>`;

@Component({
  selector: 'md-link',
  template: `<a [href]="href" [title]="title"> ${conetnt} </a>`,
})
export class LinkComponent {
  @Input() data!: marked.Tokens.Link;
  get href() {
    return this.data.href;
  }
  get text() {
    return this.data.text;
  }
  get title() {
    return this.data.title ?? '';
  }
  get tokens() {
    return this.data.tokens;
  }
}
