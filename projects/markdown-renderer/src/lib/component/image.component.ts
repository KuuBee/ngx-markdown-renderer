/*
 * @Descripttion: image
 * @Author: KuuBee
 * @Date: 2021-11-16 10:35:32
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-11-16 10:36:44
 */

import { Component, Input } from '@angular/core';
import { marked } from 'marked';

@Component({
  selector: 'md-image',
  template: `<img [src]="href" [alt]="text" [title]="title" />`,
})
export class ImageComponent {
  @Input() data!: marked.Tokens.Image;

  get title() {
    return this.data.title ?? '';
  }
  get href() {
    return this.data.href;
  }
  get text() {
    return this.data.text;
  }
}
