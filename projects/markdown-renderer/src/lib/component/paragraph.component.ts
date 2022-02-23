/*
 * @Descripttion: P
 * @Author: KuuBee
 * @Date: 2021-11-12 16:11:40
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-12 16:13:40
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
  selector: 'md-paragraph',
  template: `<p>${conetnt}</p>`,
})
export class ParagraphComponent {
  @Input() data!: marked.Tokens.Paragraph;
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data.tokens;
  }
}
