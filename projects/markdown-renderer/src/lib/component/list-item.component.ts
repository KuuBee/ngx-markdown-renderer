/*
 * @Descripttion: list item
 * @Author: KuuBee
 * @Date: 2021-11-16 13:42:24
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 14:37:07
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-list-item',
  template: `<ng-container>
    <li>
      <ng-container *ngIf="task">
        <input [checked]="checked" type="checkbox" />
      </ng-container>
      <ng-container *ngIf="tokens.length; else content">
        <renderer [tokenList]="tokens"></renderer>
      </ng-container>
      <ng-template #content>{{ text }}</ng-template>
    </li>
  </ng-container>`,
})
export class ListItemComponent {
  // 主要渲染数据
  @Input() data!: marked.Tokens.ListItem;
  // 是否是多选框
  get task() {
    return this.data.task;
  }
  // 是否选中
  get checked() {
    return this.data.checked;
  }
  // TODO 不知道这个属性干啥
  get loose() {
    return this.data.loose;
  }
  // 文本内容
  get text() {
    return this.data.text;
  }
  get tokens() {
    return this.data.tokens;
  }
}
