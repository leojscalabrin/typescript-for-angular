import { Component } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css']
})
export class CheckSampleComponent {
  constructor() {
    console.log(`Constructor`);
  }
  ngOnChanges(): void {
    console.log(`OnChanges`);
  }
  ngOnInit(): void {
    console.log(`OnInit`);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy")
  }
}
