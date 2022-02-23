/*
 * @Descripttion: heading
 * @Author: KuuBee
 * @Date: 2021-11-12 10:06:10
 * @LastEditors: KuuBee
 * @LastEditTime: 2021-12-27 14:57:34
 */

import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: '[mdHeading]'
})
export class HeadingDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}