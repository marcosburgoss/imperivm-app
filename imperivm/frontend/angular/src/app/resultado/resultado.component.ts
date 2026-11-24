import { Component, Input } from '@angular/core';
import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';
import { getCivColor, getCivGradient } from '../general-definitions';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [ animate('300ms ease-in', style({ opacity: 1 })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ opacity: 0 })) ])
    ]),
    trigger('slideInOut', [
      state('void', style({ transform: 'translateX(-100%)' })),
      transition(':enter', [ animate('300ms ease-in', style({ transform: 'translateX(0)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ transform: 'translateX(-100%)' })) ])
    ]),
    trigger('scaleInOut', [
      state('void', style({ transform: 'scale(0)' })),
      transition(':enter', [ animate('300ms ease-in', style({ transform: 'scale(1)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ transform: 'scale(0)' })) ])
    ]),
    trigger('slideUpDown', [
      state('void', style({ height: '0', overflow: 'hidden' })),
      transition(':enter', [ style({ height: '*' }), animate('300ms ease-in') ]),
      transition(':leave', [ animate('300ms ease-out', style({ height: '0' })) ])
    ]),
    trigger('rotateInOut', [
      state('void', style({ transform: 'rotate(-180deg)', opacity: 0 })),
      transition(':enter', [ animate('300ms ease-in', style({ transform: 'rotate(0)', opacity: 1 })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ transform: 'rotate(180deg)', opacity: 0 })) ])
    ]),
    trigger('fadeSlideInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition(':enter', [ animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-100%)' })) ])
    ]),
    trigger('zoomFadeInOut', [
      state('void', style({ transform: 'scale(0.5)', opacity: 0 })),
      transition(':enter', [ animate('300ms ease-in', style({ transform: 'scale(1)', opacity: 1 })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ transform: 'scale(0.5)', opacity: 0 })) ])
    ]),
    trigger('horizontalSlideFadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateX(-100%)' })),
      transition(':enter', [ animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(-100%)' })) ])
    ]),
    trigger('horizontalSlideFadeInOutRight', [
      state('void', style({ opacity: 0, transform: 'translateX(100%)' })),
      transition(':enter', [ animate('300ms ease-in', style({ opacity: 1, transform: 'translateX(0)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' })) ])
    ]),
    trigger('verticalSlideFadeInOut', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition(':enter', [ animate('300ms ease-in', style({ opacity: 1, transform: 'translateY(0)' })) ]),
      transition(':leave', [ animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-100%)' })) ])
    ]),
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(200, [ // Retraso de 100ms entre cada elemento
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ResultadoComponent {
  @Input() unit1: any;
  @Input() unit2: any;
  @Input() showResult: boolean = false;
  @Input() amount1: number = 1;
  @Input() amount2: number = 1;
  @Input() level1: number = 1;
  @Input() level2: number = 1;
  @Input() amountArmy1: number[] = [1, 1, 1, 1, 1, 1];
  @Input() amountArmy2: number[] = [1, 1, 1, 1, 1, 1];
  @Input() levelArmy1: number[] = [1, 1, 1, 1, 1, 1];
  @Input() levelArmy2: number[] = [1, 1, 1, 1, 1, 1];
  @Input() probabilidad: any;
  @Input() mensaje: any;
  @Input() caso: any;
  index: number = 0;

  constructor() { }

  ngOnInit(): void {
    if (this.unit1 && this.unit2) {
      switch (this.caso) {
        case 1:
          this.unit1 = this.mapUnit(this.unit1);
          this.unit2 = this.mapUnit(this.unit2);
          break;
        case 2:
          this.unit1 = this.unit1.map((unit: any[]) => this.mapUnit(unit));
          this.unit2 = this.mapUnit(this.unit2);
          break;
        case 3:
          this.unit1 = this.mapUnit(this.unit1);
          this.unit2 = this.unit2.map((unit: any[]) => this.mapUnit(unit));
          break;
        case 4:
          this.unit1 = this.unit1.map((unit: any[]) => this.mapUnit(unit));
          this.unit2 = this.unit2.map((unit: any[]) => this.mapUnit(unit));
          break;
      }
    }
  }

  mapUnit(unit: any[]): any {
    return {
      id: unit[0],
      civilizacion: unit[1],
      civilizacion2: unit[2],
      nombre: unit[3],
      salud: unit[4],
      ataque: unit[5],
      alcance: unit[6],
      defensa: unit[7],
      velocidad: unit[8],
      vision: unit[9],
      coste: unit[10],
      moneda: unit[11],
      alias: unit[12],
      imagen: unit[13],
      tipo: unit[14]
    };
  }

  getCivColor(civilizacion: string): string {
    return getCivColor(civilizacion);
  }

  getCivGradient(civilizacion: string): string {
    return getCivGradient(civilizacion);
  }

  getLevelColor(level: number): string {
    if (level >= 1 && level < 6) {
      return '#808080'; // gray
    } else if (level >= 6 && level < 12) {
      return '#c0c0c0'; // silver
    } else if (level >= 12 && level < 18) {
      return '#cd7f32'; // bronze
    } else if (level >= 18) {
      return '#ffd700'; // gold
    } else {
      return 'transparent';
    }
  }

}
