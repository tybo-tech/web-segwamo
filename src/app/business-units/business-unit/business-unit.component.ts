import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessUnit, BusinessUnits } from 'src/app/shared/business-units';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessUnitComponent implements OnInit {
  id: string;
  businessUnit: BusinessUnit;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(data => {
      if (data) {
        this.id = data.id;
        this.businessUnit = BusinessUnits.find(x => x.Id.toLowerCase() === this.id.toLowerCase());
      }
    })
  }

  ngOnInit() {
    window.scroll(0,0)
  }

}
