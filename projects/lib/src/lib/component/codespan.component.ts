/*
 * @Descripttion: code span
 * @Author: KuuBee
 * @Date: 2021-11-16 10:10:39
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 10:30:28
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-codespan',
  template: '<code >{{text}}</code>',
})
export class CodespanComponent {
  @Input() data!: marked.Tokens.Codespan;
  get text() {
    return this.data.text;
  }
}
