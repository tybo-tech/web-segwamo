import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUnit, BusinessUnits } from '../shared/business-units';

@Component({
  selector: 'app-business-units',
  templateUrl: './business-units.component.html',
  styleUrls: ['./business-units.component.scss']
})
export class BusinessUnitsComponent implements OnInit {
  @Input() hideBanner: boolean;
  businessUnits: BusinessUnit[] = BusinessUnits.filter(x => !x.Hide);
  businessUnit: BusinessUnit = BusinessUnits.find(x => x.Hide);
  constructor(private router: Router) { }

  ngOnInit() {
  }
  view(item: BusinessUnit) {
    if (!item || !item.Id) {
      return;
    }
    this.router.navigate(['business-unit', item.Id.toLocaleLowerCase()])
  }
}
