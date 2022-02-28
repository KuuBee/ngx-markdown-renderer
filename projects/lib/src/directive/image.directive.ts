/*
 * @Descripttion: 
 * @Author: KuuBee
 * @Date: 2021-12-27 14:53:20
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:53:20
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdImage]'
})
export class ImageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}