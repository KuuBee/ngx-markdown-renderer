/*
 * @Descripttion: code span
 * @Author: KuuBee
 * @Date: 2021-11-16 10:10:39
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 10:23:11
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-codespan',
  template: '<code>{{text}}</code>',
})
export class CodespanComponent {
  @Input() data!: marked.Token;
  get text() {
    if (this.data.type !== 'codespan') throw TypeError('error codespan type');
    return this.data.text;
  }
}
