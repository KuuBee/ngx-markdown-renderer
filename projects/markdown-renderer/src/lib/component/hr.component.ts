/*
 * @Descripttion: hr
 * @Author: KuuBee
 * @Date: 2021-11-15 10:16:13
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-15 10:16:13
 */
import { Component, Input } from '@angular/core';

@Component({
  selector: 'md-hr',
  template: `<hr />`,
})
export class HrComponent {
  @Input() rwa?: string;
}
