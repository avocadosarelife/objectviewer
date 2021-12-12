import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit {

  constructor(private dataService: DataService) { }
  tree: any;
  color = false;

  ngOnInit(): void {
    this.dataService.getData().subscribe(data => {
      this.tree = this.toArray(data);      
    })
  }

  toArray(obj: any): any[] {
    const result = [];
    for (const prop of Object.keys(obj)) {
      const value = obj[prop];
      if (typeof value === 'object') {
        result.push(this.toArray(value));
      }
      else {
        result.push(value);
      }
    }
    return result;

  }

  toggleColor(): boolean {
    this.color = !this.color;
    return this.color;
  }

}

