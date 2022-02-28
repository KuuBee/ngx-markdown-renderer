/*
 * @Descripttion: 代码块组件
 * @Author: KuuBee
 * @Date: 2021-12-24 10:06:36
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 11:26:30
 */

import { Component, Input } from "@angular/core";
import { marked } from "marked";

@Component({
  selector: 'md-code',
  template: `<p>
      <pre><code [class]="lang?'language-' + lang:''">{{text}}</code></pre>
    <p>`,
})
export class CodeComponent {
  @Input() data!: marked.Tokens.Code;
  get text() {
    return this.data.text
  }
  get lang() {
    return this.data.lang
  }
}