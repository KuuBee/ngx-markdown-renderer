/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-23 14:56:02
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 14:56:03
 */

import { Component, Input } from '@angular/core';
import { AbstractHeadingComponent } from 'projects/markdown-renderer/src/lib/component/heading.component';

const conetnt = `<ng-container *ngIf="tokens.length; else content">
<renderer *ngFor="let item of tokens" [token]="item"></renderer>
</ng-container>
<ng-template #content>
{{ text }}
</ng-template>`;

@Component({
  selector: 'md-heading',
  template: `<h1>xxxxxx!</h1>`,
  styles: [],
})
export class CustomHeadingComponent extends AbstractHeadingComponent {
}
