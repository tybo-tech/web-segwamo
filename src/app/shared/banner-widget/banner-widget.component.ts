import { trigger, transition, style, animate } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-widget',
  templateUrl: './banner-widget.component.html',
  styleUrls: ['./banner-widget.component.scss'],
  animations: [

    trigger('slideInTop', [
      transition('void => *', [
        style({ marginTop: '-20em' }),
        animate(500)
      ])
    ])
  ]
})
export class BannerWidgetComponent implements OnInit {
@Input() heading;
  constructor() { }

  ngOnInit() {
  }

}
