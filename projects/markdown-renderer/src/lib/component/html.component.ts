/*
 * @Descripttion: HTML
 * @Author: KuuBee
 * @Date: 2022-02-23 11:52:15
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-23 11:52:15
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-html',
  template: `<p>{{text}}</p>`,
})
export class HTMLComponent {
  @Input() data!: marked.Tokens.HTML;
  get text() {
    return this.data.text;
  }
}