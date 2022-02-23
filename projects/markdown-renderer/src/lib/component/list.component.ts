/*
 * @Descripttion: list
 * @Author: KuuBee
 * @Date: 2021-11-16 13:33:44
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 14:39:44
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-list',
  template: `<ng-container *ngIf="ordered; else unordered">
      <ol [start]="start">
        <ng-container *ngFor="let item of items; let i = index">
          <md-list-item [data]="item"></md-list-item>
        </ng-container>
      </ol>
    </ng-container>
    <ng-template #unordered>
      <ul>
        <ng-container *ngFor="let item of items; let i = index">
          <md-list-item [data]="item"></md-list-item>
        </ng-container>
      </ul>
    </ng-template>`,
})
export class ListCompoent {
  @Input() data!: marked.Tokens.List;
  // 是有序列表还是无序列表
  get ordered() {
    return this.data.ordered;
  }
  // 有序列表起始数字
  get start() {
    const start = this.data.start;
    if (typeof start === 'string') return NaN;
    return start;
  }
  // TODO 不知道这个属性干啥的
  get loose() {
    return this.data.loose;
  }
  // 列表项
  get items() {
    return this.data.items;
  }
}
