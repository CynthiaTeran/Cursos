import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  curso: number = 0

  diapositivas1: string[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/4.png',
    'assets/img/5.png',
    'assets/img/6.png',
    'assets/img/7.png',
    'assets/img/8.png',
    'assets/img/9.png',
    'assets/img/10.png'
  ]

  diapositivas2: string[] = [
    'assets/img/11.png',
    'assets/img/12.png',
    'assets/img/13.png',
    'assets/img/14.png',
    'assets/img/15.png',
    'assets/img/16.png',
    'assets/img/17.png',
    'assets/img/18.png',
    'assets/img/19.png',
    'assets/img/20.png'
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recuperar el identificador del producto de la ruta
    this.route.params.subscribe(params => {
      this.curso = params['curso'];
    });
  }
}
