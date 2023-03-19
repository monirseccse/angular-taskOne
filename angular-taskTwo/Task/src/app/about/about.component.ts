import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  name:string|null=null;
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(): void {
    this.name= this.route.snapshot.params['name'];
  }

}
