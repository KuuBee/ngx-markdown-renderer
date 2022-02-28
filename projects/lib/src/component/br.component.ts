/*
 * @Descripttion: br
 * @Author: KuuBee
 * @Date: 2022-02-24 10:50:16
 * @LastEditors: KuuBee
 * @LastEditTime: 2022-02-24 10:50:17
 */

import { Component, Input } from "@angular/core";
import { marked } from "marked";

@Component({
  selector: 'md-br',
  template: `<br/>`,
})
export class BrComponent {
  @Input() data!: marked.Tokens.Br;
}