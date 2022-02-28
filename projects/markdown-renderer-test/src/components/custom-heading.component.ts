/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2022-02-23 14:56:02
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-24 14:28:52
 */

import { Component, Input } from '@angular/core';
import { HeadingComponent } from '../../../../dist/ngx-markdown-renderer';

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
export class CustomHeadingComponent extends HeadingComponent {
}
