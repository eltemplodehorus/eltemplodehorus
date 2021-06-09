import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  redirectHome() {
    this.router.navigate(['home']);
  }
  redirectServicio() {
    this.router.navigate(['servicios']);
  }
  redirectBlog() {
    location.assign('/blog');
  }
  redirectContactenos() {
    location.assign('/contactenos');
  }
  redirectAcercaDe() {
    location.assign('/acercade');
  }

}
