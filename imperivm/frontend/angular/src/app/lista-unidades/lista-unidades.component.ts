import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { trigger, state, transition, style, animate, query, stagger } from '@angular/animations';
import { getCivColor, getCivGradient } from '../general-definitions';

@Component({
  selector: 'app-lista-unidades',
  templateUrl: './lista-unidades.component.html',
  styleUrls: ['./lista-unidades.component.css'],
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
          stagger(100, [ // Retraso de 100ms entre cada elemento
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class ListaUnidadesComponent implements OnInit {
  isLoading = true;

  units: any[] = [];
  filteredUnits: any[] = [];
  selectedUnits: any[] = [];
  selectedArmy: any[] = [];
  position: number = 0;
  isComparing: boolean = false;
  isArmy: boolean = false;

  selectedUnit: any = null;
  skills: any[] = [];

  // Variables para los filtros
  civs: string[] = [];
  types: string[] = [];
  selectedCivs: Set<string> = new Set();
  selectedTypes: Set<string> = new Set();
  searchUnit: string = '';
  isFiltered: boolean = false;

  sortedBy: { field: string, order: 'asc' | 'desc' } = { field: '', order: 'asc' };

  // Variables de paginación
  currentPage: number = 1;
  itemsPerPage: number = 18;
  totalPages: number = 1;

  // Campos para ordenar
  sortableFields = [
    { name: 'Nombre', value: 'nombre' },
    { name: 'Civilización', value: 'civilizacion' },
    { name: 'Salud', value: 'salud' },
    { name: 'Ataque', value: 'ataque' },
    { name: 'Defensa', value: 'defensa' },
    { name: 'Velocidad', value: 'velocidad' },
    { name: 'Coste', value: 'coste' }
  ];

  // Iconos de los tipos de unidades
  typeIcons: { [key: string]: string } = {
    'Ranged': 'fa-bullseye',
    'Horse': 'fa-horse',
    'Melee': 'fa-hand-fist',
    'BaseMage': 'fa-hat-wizard',
    'Hero': 'fa-crown',
  };

  typeDisplayNames: { [key: string]: string } = {
    'Ranged': 'A distancia',
    'Horse': 'Caballería',
    'Melee': 'Cuerpo a cuerpo',
    'BaseMage': 'Mago',
    'Hero': 'Héroe',
  };

  maxHealth = 1300; // 3000
  maxAttack = 120;
  maxRange = 500;
  maxDefense = 40;
  maxSpeed = 180;
  maxCost = 1000;

  constructor(private api: ApiService, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      const unit = navigation.extras.state as any;
      this.position = unit.index;
      this.selectedUnits = unit.value;
      this.isArmy = unit.isArmy;
      if (unit.index > 0) {
        this.isComparing = true;
      }
    }
  }

  ngOnInit(): void {
    this.api.getUnidades().subscribe((data: any[]) => {
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
          showBack: false
        };
        this.units.push(unidad);
      });

      this.isLoading = false;

      this.civs = [...new Set(this.units.map(unidad => unidad.civilizacion))];
      this.types = [...new Set(this.units.map(unidad => unidad.tipo))];

      this.filteredUnits = this.units;
      this.totalPages = Math.ceil(this.filteredUnits.length / this.itemsPerPage);
      this.filterAndSortUnits();
    });
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

  getUnitSkills(id: number): void {
    this.skills = [];
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
        this.skills.push(skill);
      });
      console.log(data);
    });
  }

  toggleHover(unidad: any): void {
    unidad.showBack = !unidad.showBack;
  }

  getCivColor(civilizacion: string): string {
    return getCivColor(civilizacion);
  }

  getCivGradient(civilizacion: string): string {
    return getCivGradient(civilizacion);
  }

  selectUnitForComparison(unit: any): void {
    if (this.position === 1 || this.position === 2) {
      this.selectedUnits[this.position - 1] = unit;
    }
    if (this.position > 2 && this.position < 9) {
      this.selectedUnits[2][this.position - 3] = unit;
    }
    if (this.position >= 9 && this.position < 16) {
      this.selectedUnits[3][this.position - 9] = unit;
    }
    console.log('Unidades seleccionadas:', this.selectedUnits);
    this.router.navigate(['/comparacion'], { state: { index: this.position, value: this.selectedUnits, isArmy: this.isArmy } });
  }

  toggleCivSelection(civ: string): void {
    if (this.selectedCivs.has(civ)) {
      this.selectedCivs.delete(civ);
    } else {
      this.selectedCivs.add(civ);
    }
    this.filterAndSortUnits();
  }

  toggleTypeSelection(type: string): void {
    if (this.selectedTypes.has(type)) {
      this.selectedTypes.delete(type);
    } else {
      this.selectedTypes.add(type);
    }
    this.filterAndSortUnits();
  }

  filterAndSortUnits(): void {
    this.filterUnits();
    this.sortUnits(this.sortedBy.field, this.sortedBy.order);
    this.updatePagination();
  }

  filterUnits(): void {
    this.filteredUnits = this.units.filter(unidad => {
      const matchesCiv = this.selectedCivs.size === 0 || this.selectedCivs.has(unidad.civilizacion);
      const matchesType = this.selectedTypes.size === 0 || this.selectedTypes.has(unidad.tipo);
      const matchesSearch= this.searchUnit ? (unidad.nombre.toLowerCase().includes(this.searchUnit.toLowerCase()) || unidad.civilizacion.toLowerCase().includes(this.searchUnit.toLowerCase())) : true;
      return matchesCiv && matchesType && matchesSearch;
    });
    if (this.selectedCivs.size > 0 || this.selectedTypes.size > 0 || this.searchUnit) {
      this.isFiltered = true;
    } else {
      this.isFiltered = false;
    }
    this.totalPages = Math.ceil(this.filteredUnits.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  sortUnits(field: string, order: 'asc' | 'desc'): void {
    if (!field) return;
    this.sortedBy = { field, order };
    this.filteredUnits.sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
  }

  isSortedBy(field: string, order: 'asc' | 'desc'): boolean {
    return this.sortedBy.field === field && this.sortedBy.order === order;
  }

  clearFilters(): void {
    this.selectedCivs.clear();
    this.selectedTypes.clear();
    this.searchUnit = '';
    this.filterAndSortUnits();
    this.isFiltered = false;
  }

  goToComparison(): void {
    this.router.navigate(['/comparacion'], { state: { index: 1, value: this.selectedUnits, isArmy: this.isArmy } });
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredUnits.length / this.itemsPerPage);
  }

  getPaginatedUnits(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredUnits.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  getTypeDisplayName(type: string): string {
    return this.typeDisplayNames[type] || type;
  }

  openModal(unit: any): void {
    this.selectedUnit = unit;
  }

  closeModal(): void {
    this.selectedUnit = null;
  }
}
