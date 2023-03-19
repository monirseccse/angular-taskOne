import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  name:string|null=null;
  constructor(private route:ActivatedRoute,public router:Router){
    
  }
  ngOnInit(): void {
    this.name= this.route.snapshot.params['name'];
  }

}
