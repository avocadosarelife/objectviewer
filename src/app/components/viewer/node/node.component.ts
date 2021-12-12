import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent implements OnInit {
  @Input() node: any;
  subnode: any;
  
  constructor() { }

  ngOnInit(): void {
  }


  getType(obj: any): string {
    return typeof obj;
  }
}
