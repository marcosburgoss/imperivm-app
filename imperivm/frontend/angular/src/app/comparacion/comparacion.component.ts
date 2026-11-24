import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';
import { getCivColor, getCivGradient, unitEmpty, selectCivUnit } from '../general-definitions';

@Component({
  selector: 'app-comparacion',
  templateUrl: './comparacion.component.html',
  styleUrls: ['./comparacion.component.css'],
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
    trigger('rotateIn', [
      state('void', style({ transform: 'rotate(-180deg)' })),
      transition(':enter', [ animate('300ms ease-in', style({ transform: 'rotate(0)' })) ]),
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
          stagger(150, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ComparacionComponent {
  unit1: any = unitEmpty;
  unit2: any = unitEmpty;
  units: any[] = [];
  unidades: any[] = [];
  amount1: number = 1;
  amount2: number = 1;
  level1: number = 1;
  level2: number = 1;
  results: any;
  showResult: any = false;
  isDeleted1: boolean = false;
  isDeleted2: boolean = false;
  isHovering1: boolean = false;
  isHovering2: boolean = false;
  isCived1: boolean = false;
  isCived2: boolean = false;
  isBack1: boolean = false;
  isBack2: boolean = false;
  isCivActive1: boolean = false;
  isCivActive2: boolean = false;
  showDropdown1: boolean = false;
  showDropdown2: boolean = false;
  isPredicting: boolean = false;
  selectedCiv: string = '';
  civilizations = [
    { id: 1, nombre: 'BRITANIA' },
    { id: 2, nombre: 'CARTAGO' },
    { id: 3, nombre: 'EGIPTO' },
    { id: 4, nombre: 'GALIA' },
    { id: 5, nombre: 'ROMA' },
    { id: 6, nombre: 'HISPANIA' },
    { id: 7, nombre: 'GERMANIA' }
  ];
  army1: any[] = [unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty];
  army2: any[] = [unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty];
  amountArmy1: number[] = [1, 1, 1, 1, 1, 1];
  amountArmy2: number[] = [1, 1, 1, 1, 1, 1];
  levelArmy1: number[] = [1, 1, 1, 1, 1, 1];
  levelArmy2: number[] = [1, 1, 1, 1, 1, 1];
  isArmy1: boolean = false;
  isArmy2: boolean = false;
  isDeleteMode1: boolean = false;
  isDeleteMode2: boolean = false;
  showInputs1: boolean[] = [false, false, false, false, false, false];
  showInputs2: boolean[] = [false, false, false, false, false, false];
  index: number = 0;

  skills1: any[] = [];
  skills2: any[] = [];
  skills: any[] = [];
  selectedSkill: any = null;
  selectedUnit: any = null;
  randomUnit: any[] = [];

  maxHealth = 1300; // 3000
  maxAttack = 120;
  maxRange = 500;
  maxDefense = 40;
  maxSpeed = 180;
  maxCost = 1000;

  constructor(private router: Router, private api: ApiService){
    this.isPredicting = false;
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const units = navigation.extras.state as any;
      this.units = units.value;
      this.index = units.index;
      if (localStorage.getItem('niveles') || localStorage.getItem('cantidades')) {
        const cantidades = JSON.parse(localStorage.getItem('cantidades') || '');
        this.amount1 = cantidades[0];
        this.amount2 = cantidades[1];
        this.amountArmy1 = cantidades[2];
        this.amountArmy2 = cantidades[3];

        const niveles = JSON.parse(localStorage.getItem('niveles') || '');
        this.level1 = niveles[0];
        this.level2 = niveles[1];
        this.levelArmy1 = niveles[2];
        this.levelArmy2 = niveles[3];
      }
      if (localStorage.getItem('unidades')) {
        this.unidades = JSON.parse(localStorage.getItem('unidades') || '');
        this.unit1 = this.unidades[0];
        this.unit2 = this.unidades[1];
        this.army1 = this.unidades[2];
        this.army2 = this.unidades[3];

        this.isArmy1 = JSON.parse(localStorage.getItem('pos1') || '')[0];
        this.isArmy2 = JSON.parse(localStorage.getItem('pos2') || '')[0];

        if (this.unit1.civilizacion !== 'empty') this.units[0] = this.unit1;
        if (this.unit2.civilizacion !== 'empty') this.units[1] = this.unit2;

        const habilidades = JSON.parse(localStorage.getItem('habilidades') || '');
        this.skills1 = habilidades[0];
        this.skills2 = habilidades[1];

        console.log(this.units);
      } else {
        if (this.units[0] && this.units[0].civilizacion !== 'empty') this.unit1 = this.units[0];
        if (this.units[1] && this.units[1].civilizacion !== 'empty') this.unit2 = this.units[1];
        if (this.units[2] && this.units[2].civilizacion !== 'empty') this.army1 = this.units[2];
        if (this.units[3] && this.units[3].civilizacion !== 'empty') this.army2 = this.units[3];
        if (this.index > 2 && this.index < 9) {
          this.isArmy1 = true;
          this.isArmy2 = units.isArmy;
          localStorage.setItem('pos1', JSON.stringify([true]));
        }
        if (this.index >= 9 && this.index < 16) {
          this.isArmy2 = true;
          this.isArmy1 = units.isArmy;
          localStorage.setItem('pos2', JSON.stringify([true]));
        }
        localStorage.setItem('unidades', JSON.stringify(this.units));
      }
    }
  }

  ngOnInit(): void {
    if (this.unit1 && this.unit1.civilizacion === 'empty') this.isDeleted1 = true;
    if (this.unit2 && this.unit2.civilizacion === 'empty') this.isDeleted2 = true;
    if (this.units[0] && this.units[0].civilizacion !== 'empty') this.isBack1 = true;
    if (this.units[1] && this.units[1].civilizacion !== 'empty') this.isBack2 = true;
    if (!this.showResult) this.isPredicting = false;
    if (this.unit1.tipo === 'Civilization') this.isCived1 = true;
    if (this.unit2.tipo === 'Civilization') this.isCived2 = true;
    if (this.unit1.id !== 0) this.isCived1 = false;
    if (this.unit2.id !== 0) this.isCived2 = false;

    window.addEventListener('keydown', this.handleKeyDown);
  }

  ngOnDestroy(): void {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }

  getUnitSkills(id: number, object: any): void {
    this.api.getHabilidadesByUnit(id).subscribe((data: any[]) => {
      data.forEach(row => {
        let skill = {
          id: row[0],
          nombre: row[1],
          descripcion: row[2],
          energia: row[3],
          alias: row[4],
          imagen: row[5]
        };
        object.push(skill);
      });
      console.log(data);
    });
  }

  predecir(): void {
    this.isPredicting = true;
    this.showResult = false;
    this.isDeleteMode1 = false;
    this.isDeleteMode2 = false;
    const idArmy1 = this.army1.map((unit: any) => unit.id);
    const idArmy2 = this.army2.map((unit: any) => unit.id);
    if (!this.isArmy1 && !this.isArmy2) { // 1 vs 1
      this.api.predecir(this.unit1.id, this.amount1, this.level1, this.unit1.civilizacion, this.unit2.id, this.amount2, this.level2, this.unit2.civilizacion).subscribe((data: any) => {
        this.results = data.probabilidad_victoria.map((probabilidad: any, index: number) => ({
          probabilidad: probabilidad,
          mensaje: data.mensaje[index],
          unidad1: data.unidad1[index],
          unidad2: data.unidad2[index],
          caso: data.caso
        }));
      });
    }
    if (this.isArmy1 && !this.isArmy2) { // Army vs 1
      this.api.predecir(idArmy1, this.amountArmy1, this.levelArmy1, 'ARMY', this.unit2.id, this.amount2, this.level2, this.unit2.civilizacion).subscribe((data: any) => {
        this.results = data.probabilidad_victoria.map((probabilidad: any, index: number) => ({
          probabilidad: probabilidad,
          mensaje: data.mensaje[index],
          unidad1: data.unidad1,
          unidad2: data.unidad2[index],
          caso: data.caso
        }));
      });
    }
    if (!this.isArmy1 && this.isArmy2) { // 1 vs Army
      this.api.predecir(this.unit1.id, this.amount1, this.level1, this.unit1.civilizacion, idArmy2, this.amountArmy2, this.levelArmy2, 'ARMY').subscribe((data: any) => {
        this.results = data.probabilidad_victoria.map((probabilidad: any, index: number) => ({
          probabilidad: probabilidad,
          mensaje: data.mensaje[index],
          unidad1: data.unidad1[index],
          unidad2: data.unidad2,
          caso: data.caso
        }));
      });
    }
    if (this.isArmy1 && this.isArmy2) { // Army vs Army
      this.api.predecir(idArmy1, this.amountArmy1, this.levelArmy1, 'ARMY', idArmy2, this.amountArmy2, this.levelArmy2, 'ARMY').subscribe((data: any) => {
        this.results = data.probabilidad_victoria.map((probabilidad: any, index: number) => ({
          probabilidad: probabilidad,
          mensaje: data.mensaje[index],
          unidad1: data.unidad1,
          unidad2: data.unidad2,
          caso: data.caso
        }));
      });
    }
    this.showResult = true;
  }

  goToListaUnidades(index: number, isArmy: boolean): void {
    localStorage.removeItem('unidades');
    this.router.navigate(['/unidades'], { state: { index, value: [this.unit1, this.unit2, this.army1, this.army2 ], isArmy } });
  }

  getCivColor(civilizacion: string): string {
    return getCivColor(civilizacion);
  }

  getCivGradient(civilizacion: string): string {
    return getCivGradient(civilizacion);
  }

  deleteUnit(index: number): void {
    this.isPredicting = false;
    if (index === 1) {
      this.unit1 = unitEmpty;
      this.isDeleted1 = true;
      this.isCived1 = false;
      this.amount1 = 1;
      this.level1 = 1;
      this.skills1 = [];
    }
    if (index === 2) {
      this.unit2 = unitEmpty;
      this.isDeleted2 = true;
      this.isCived2 = false;
      this.amount2 = 1;
      this.level2 = 1;
      this.skills2 = [];
    }
    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('habilidades', JSON.stringify(this.skills1));
    localStorage.setItem('niveles', JSON.stringify([this.level1, this.level2, this.levelArmy1, this.levelArmy2]));
  }

  goBack(index: number): void {
    if (index === 1) {
      this.unit1 = this.units[0];
      this.isDeleted1 = false;
      if (this.unit1.tipo === 'Civilization') this.isCived1 = true;
    }
    if (index === 2) {
      this.unit2 = this.units[1];
      this.isDeleted2 = false;
      if (this.unit2.tipo === 'Civilization') this.isCived2 = true;
    }
    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('unidades', JSON.stringify(this.unidades));
  }

  toggleHover(isHovering: boolean, index: number): void {
    this.isPredicting = false;
    if (index === 1) {
      if (this.skills1.length === 0 && this.unit1.id !== 0) {
        this.skills1 = [];
        this.getUnitSkills(this.unit1.id, this.skills1);
      }
      this.isHovering1 = isHovering;
      this.isCivActive1 = false;
      if (this.showDropdown1 && !isHovering) {
        this.showDropdown1 = false;
      }
      if (this.isCivActive1 && isHovering) {
        this.showDropdown1 = true;
      }
    }
    if (index === 2) {
      if (this.skills2.length === 0 && this.unit2.id !== 0) {
        this.skills2 = [];
        this.getUnitSkills(this.unit2.id, this.skills2);
      }
      this.isHovering2 = isHovering;
      this.isCivActive2 = false;
      if (this.showDropdown2 && !isHovering) {
        this.showDropdown2 = false;
      }
      if (this.isCivActive2 && isHovering) {
        this.showDropdown2 = true;
      }
    }
    localStorage.setItem('habilidades', JSON.stringify([this.skills1, this.skills2]));
    localStorage.setItem('cantidades', JSON.stringify([this.amount1, this.amount2, this.amountArmy1, this.amountArmy2]));
    localStorage.setItem('niveles', JSON.stringify([this.level1, this.level2, this.levelArmy1, this.levelArmy2]));
  }

  selectCiv(civ: string, index: number): void {
    this.isPredicting = false;
    if (index === 1) {
      this.unit1 = selectCivUnit(civ);
      this.showDropdown1 = false;
      this.showDropdown2 = false;
      this.isDeleted1 = false;
      this.isCived1 = true;
      this.units[0] = this.unit1;
      this.isHovering1 = false;
      this.isCivActive1 = false;
      this.isCivActive2 = false;
    }
    if (index === 2) {
      this.unit2 = selectCivUnit(civ);
      this.showDropdown1 = false;
      this.showDropdown2 = false;
      this.isDeleted2 = false;
      this.isCived2 = true;
      this.units[1] = this.unit2;
      this.isHovering2 = false;
      this.isCivActive2 = false;
      this.isCivActive1 = false;
    }
    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('unidades', JSON.stringify(this.unidades));
    // localStorage.setItem('unidades_antes', JSON.stringify(this.units));
  }

  toggleCivDropdown(index: number) {
    if (index === 1) {
      this.showDropdown1 = !this.showDropdown1;
      this.isCivActive1 = !this.isCivActive1;
    }
    if (index === 2) {
      this.showDropdown2 = !this.showDropdown2;
      this.isCivActive2 = !this.isCivActive2;
    }
  }

  toggleArmyMode(index: number): void {
    this.isPredicting = false;
    if (index === 1) {
      this.isArmy1 = !this.isArmy1;
      this.isDeleteMode1 = false;
      if (this.isArmy1) {
        localStorage.setItem('pos1', JSON.stringify([true]));
        if (this.unit1.id !== 0) {
          this.army1[0] = this.unit1;
          this.levelArmy1[0] = this.level1;
          this.amountArmy1[0] = this.amount1;
        } else {
          this.army1[0] = unitEmpty;
        }
      }
      if (!this.isArmy1) {
        localStorage.setItem('pos1', JSON.stringify([false]));
        if (this.army1[0].id !== 0) {
          this.unit1 = this.army1[0];
          this.level1 = this.levelArmy1[0];
          this.amount1 = this.amountArmy1[0];
        } else {
          this.unit1 = unitEmpty;
          this.isDeleted1 = true;
        }
      }
    }
    if (index === 2) {
      this.isArmy2 = !this.isArmy2;
      this.isDeleteMode2 = false;
      if (this.isArmy2) {
        localStorage.setItem('pos2', JSON.stringify([true]));
        if (this.unit2.id !== 0) {
          this.army2[0] = this.unit2;
          this.levelArmy2[0] = this.level2;
          this.amountArmy2[0] = this.amount2;
        } else {
          this.army2[0] = unitEmpty;
        }
      }
      if (!this.isArmy2) {
        localStorage.setItem('pos2', JSON.stringify([false]));
        if (this.army2[0].id !== 0) {
          this.unit2 = this.army2[0];
          this.level2 = this.levelArmy2[0];
          this.amount2 = this.amountArmy2[0];
        } else {
          this.unit2 = unitEmpty;
          this.isDeleted2 = true;
        }
      }
    }
    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('unidades', JSON.stringify(this.unidades));
  }

  toggleDeleteMode(index: number): void {
    if (index === 1) {
      this.isDeleteMode1 = !this.isDeleteMode1;
    }
    if (index === 2) {
      this.isDeleteMode2 = !this.isDeleteMode2;
    }
  }

  deleteArmyUnit(index: number, army: number): void {
    this.isPredicting = false;
    if (army === 1) {
      this.army1[index] = unitEmpty;
      this.levelArmy1[index] = 1;
      this.amountArmy1[index] = 1;
    }
    if (army === 2) {
      this.army2[index] = unitEmpty;
      this.levelArmy2[index] = 1;
      this.amountArmy2[index] = 1;
    }

    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('unidades', JSON.stringify(this.unidades));
  }

  deleteAllUnits(army: number): void {
    if (army === 1) {
      this.army1 = [unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty];
      this.levelArmy1 = [1, 1, 1, 1, 1, 1];
      this.amountArmy1 = [1, 1, 1, 1, 1, 1];
    }
    if (army === 2) {
      this.army2 = [unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty, unitEmpty];
      this.levelArmy2 = [1, 1, 1, 1, 1, 1];
      this.amountArmy2 = [1, 1, 1, 1, 1, 1];
    }
    this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
    localStorage.setItem('unidades', JSON.stringify(this.unidades));
  }

  toggleArmyInputs(show: boolean, index: number, army: number): void {
    this.isPredicting = false;
    if (army === 1) {
      this.showInputs1[index] = show;
    }
    if (army === 2) {
      this.showInputs2[index] = show;
    }
    localStorage.setItem('cantidades', JSON.stringify([this.amount1, this.amount2, this.amountArmy1, this.amountArmy2]));
    localStorage.setItem('niveles', JSON.stringify([this.level1, this.level2, this.levelArmy1, this.levelArmy2]));
  }

  floor(value: number): number {
    return Math.floor(value);
  }

  getLevelColor(level: number): string {
    if (level >= 1 && level < 6) {
      return '#aaa'; // gray
    } else if (level >= 6 && level < 12) {
      return '#ddd'; // silver
    } else if (level >= 12 && level < 18) {
      return '#cd7f32'; // bronze
    } else if (level >= 18) {
      return 'gold'; // gold
    } else {
      return 'transparent';
    }
  }

  getRandomUnit(army: number, index: number): void {
    this.isPredicting = false;
    this.randomUnit = [];
    const randomId = Math.floor(Math.random() * 68) + 1;
    this.api.getUnidad(randomId).subscribe((data: any[]) => {
      data.forEach(row => {
        let unidad = {
          id: row[0],
          civilizacion: row[1],
          civilizacion2: row[2],
          nombre: row[3],
          salud: row[4],
          ataque: row[5],
          alcance: row[6],
          defensa: row[7],
          velocidad: row[8],
          vision: row[9],
          coste: row[10],
          moneda: row[11],
          alias: row[12],
          imagen: row[13],
          tipo: row[14],
        };
        this.randomUnit.push(unidad);
      });
      console.log(this.randomUnit[0]);
      if (army === 1) {
        this.unit1 = this.randomUnit[0];
        this.isDeleted1 = false;
        this.isCived1 = false;
        this.units[0] = this.unit1;
      }
      if (army === 2) {
        this.unit2 = this.randomUnit[0];
        this.isDeleted2 = false;
        this.isCived2 = false;
        this.units[1] = this.unit2;
      }
      if (army === 3) {
        this.army1[index] = this.randomUnit[0];
        this.levelArmy1[index] = 1;
        this.amountArmy1[index] = 1;
      }
      if (army === 4) {
        this.army2[index] = this.randomUnit[0];
        this.levelArmy2[index] = 1;
        this.amountArmy2[index] = 1;
      }
      this.unidades = [this.unit1, this.unit2, this.army1, this.army2];
      localStorage.setItem('unidades', JSON.stringify(this.unidades));
    });
  }

  openModalSkill(skill: any): void {
    this.selectedSkill = skill;
  }

  closeModal(): void {
    this.selectedSkill = null;
    this.selectedUnit = null;
    this.skills = [];
  }

  openModalUnit(unit: any): void {
    this.selectedUnit = unit;
  }

}
