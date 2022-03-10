/*
 * @Descripttion:
 * @Author: KuuBee
 * @Date: 2021-11-12 16:20:46
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-03-10 16:23:46
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-text',
  template: `<ng-container *ngIf="tokens.length; else content">
      <renderer *ngFor="let item of tokens" [token]="item"></renderer>
    </ng-container>
    <ng-template #content>
      {{ text }}
    </ng-template>`,
})
export class TextComponent {
  @Input() data!: marked.Tokens.Text;
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data?.tokens ?? [];
  }
}
