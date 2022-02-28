/*
 * @Descripttion: space
 * @Author: KuuBee
 * @Date: 2022-02-23 11:47:02
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:47:02
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-space',
  template: `<br/>`,
})
export class SpaceComponent {
  @Input() data!: marked.Tokens.Space;
}