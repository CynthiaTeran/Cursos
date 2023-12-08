import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evaluacion',
  templateUrl: './evaluacion.component.html',
  styleUrls: ['./evaluacion.component.css'],
})
export class EvaluacionComponent implements OnInit {
  curso: number = 0;
  calificacion: number = 0;

  preguntas1 = [
    {
      id: 1,
      texto: '¿DevOps es la combinación de Development y Operations?',
      opciones: [{ texto: 'Verdadero' }, { texto: 'Falso' }],
      respuestaIng: null,
      respuestaCorr: 'Verdadero',
    },
    {
      id: 2,
      texto: 'Es la fase de Ing. de Software en la que se crea y modifica el código fuente',
      opciones: [{ texto: 'Pruebas' }, { texto: 'Desarrollo' }, { texto: 'Operaciones' }],
      respuestaIng: null,
      respuestaCorr: 'Desarrollo',
    },
    {
      id: 3,
      texto: 'Número de fases fundamentales en el ciclo de vida de DevOps',
      opciones: [{ texto: '6' }, { texto: '7' }, { texto: '8' }],
      respuestaIng: null,
      respuestaCorr: '8',
    },
    {
      id: 4,
      texto: '¿Cuál es una de las ventajas de DevOps?',
      opciones: [{ texto: 'Colaboración constante' }, { texto: 'Igualdad de puestos' }, { texto: 'Disponibilidad de horarios' }],
      respuestaIng: null,
      respuestaCorr: 'Colaboración constante',
    },
    {
      id: 5,
      texto: 'Es la fase en la cuál se obtiene información sobre correciones o mejoras',
      opciones: [{ texto: 'Retroalimentación continua'} , { texto: 'Despliegue continuo' }, { texto: 'Descubre' } ],
      respuestaIng: null,
      respuestaCorr: 'Retroalimentación continua',
    },
  ]
  preguntas2 = [
    {
      id: 1,
      texto: 'Selecciona un ejemplo de Herramientas de Gestión de Código Fuente',
      opciones: [{ texto: 'Testim' }, { texto: 'GitLab' }, { texto: 'Docker' }],
      respuestaIng: null,
      respuestaCorr: 'GitLab',
    },
    {
      id: 2,
      texto: 'Es el tipo de herramienta la cuál permite colaborar con el fin de acelerar las entregas continuas de un software',
      opciones: [{ texto: 'Pruebas' }, { texto: 'Integración Continua' }, { texto: 'Construcción' }],
      respuestaIng: null,
      respuestaCorr: 'Integración Continua',
    },
    {
      id: 3,
      texto: '¿El uso de contenedores es más portable y ligero en comparación con las MV?',
      opciones: [{ texto: 'Falso' }, { texto: 'Verdadero' }],
      respuestaIng: null,
      respuestaCorr: 'Verdadero',
    },
    {
      id: 4,
      texto: '¿Cuál es una herramienta de Prueba?',
      opciones: [{ texto: 'Testim' }, { texto: 'Kubernetes' }, { texto: 'IntelliJ IDEA' }],
      respuestaIng: null,
      respuestaCorr: 'Testim',
    },
    {
      id: 5,
      texto: '¿Las herramientas de DevOps mejoran la colaboración entre los profesionales involucrados?',
      opciones: [{ texto: 'Si'} , { texto: 'No' } ],
      respuestaIng: null,
      respuestaCorr: 'Si',
    },
  ]

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Recuperar el identificador del producto de la ruta
    this.route.params.subscribe((params) => {
      this.curso = params['curso'];
    });
  }

  limpiarformularios(){
    this.preguntas1.forEach(pregunta => {
      pregunta.respuestaIng = null;
    });
    this.preguntas2.forEach(pregunta => {
      pregunta.respuestaIng = null;
    });
  }

  calificar1() {
    this.calificacion = 0;
    this.preguntas1.forEach((pregunta) => {
      if (pregunta.respuestaIng == pregunta.respuestaCorr) {
        this.calificacion += 2;
      }
    });
  }

  calificar2() {
    this.calificacion = 0;
    this.preguntas2.forEach((pregunta) => {
      if (pregunta.respuestaIng == pregunta.respuestaCorr) {
        this.calificacion += 2;
      }
    });
  }
}
