import { Component, OnInit } from '@angular/core';
import {
  NgbCalendar,
  NgbDate,
  NgbDateStruct,
  NgbInputDatepickerConfig
} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-container-master',
  templateUrl: './container-master.component.html',
  styleUrls: ['./container-master.component.scss']
})
export class ContainerMasterComponent implements OnInit {
  model: NgbDateStruct | undefined;
  

  ngOnInit(): void {
  }

}
