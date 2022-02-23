import { Component, Input, OnInit } from '@angular/core';
import { marked } from 'marked';
import { MarkdownRendererService } from './markdown-renderer.service';

@Component({
  selector: 'markdown-renderer',
  templateUrl: './markdown-renderer.component.html',
  styleUrls: ['./markdown-renderer.component.scss'],
})
export class MarkdownRendererComponent implements OnInit {
  constructor(private _mrService: MarkdownRendererService) { }
  tokenList: marked.Token[] = [];
  ngOnInit(): void {
    this.tokenList = this._mrService.init();
  }
}
