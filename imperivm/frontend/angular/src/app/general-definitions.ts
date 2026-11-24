const civColors = {
  BRITANIA: 'darkturquoise', // 'skyblue'
  CARTAGO: 'sienna',// 'sandybrown'
  EGIPTO: 'gold', // 'yellow'
  ROMA: 'crimson',
  HISPANIA: 'seagreen',
  GALIA: 'royalblue',
  GERMANIA: 'mediumorchid',
  empty: 'lightgrey'
};

export function getCivColor(civilizacion: string): string {
  return civColors[civilizacion as keyof typeof civColors];
}

export function getCivGradient(civilizacion: string): string {
  return "radial-gradient(circle, " + civColors[civilizacion as keyof typeof civColors] + ", black)";
}

export function selectCivUnit(civ: string): any {
  switch (civ) {
    case 'GALIA':
      return unitGalia;
    case 'HISPANIA':
      return unitHispania;
    case 'ROMA':
      return unitRoma;
    case 'CARTAGO':
      return unitCartago;
    case 'EGIPTO':
      return unitEgipto;
    case 'GERMANIA':
      return unitGermania;
    case 'BRITANIA':
      return unitBritania;
    default:
      return unitEmpty;
  }
}

export const unitEmpty = {
  id: 0,
  civilizacion: 'empty',
  civilizacion2: '',
  nombre: '',
  salud: 0,
  ataque: 0,
  alcance: 0,
  defensa: 0,
  velocidad: 0,
  vision: 0,
  coste: 0,
  moneda: '',
  alias: '',
  imagen: '',
  tipo: '',
};

const unitGalia = {
  id: 0,
  civilizacion: 'GALIA',
  civilizacion2: 'GALIA',
  nombre: 'GALOS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/GALIA1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitHispania = {
  id: 0,
  civilizacion: 'HISPANIA',
  civilizacion2: 'HISPANIA',
  nombre: 'IBEROS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/HISPANIA1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitRoma = {
  id: 0,
  civilizacion: 'ROMA',
  civilizacion2: 'ROMA',
  nombre: 'ROMANOS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/ROMA1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitCartago = {
  id: 0,
  civilizacion: 'CARTAGO',
  civilizacion2: 'CARTAGO',
  nombre: 'CARTAGINESES',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/CARTAGO1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitEgipto = {
  id: 0,
  civilizacion: 'EGIPTO',
  civilizacion2: 'EGIPTO',
  nombre: 'EGIPCIOS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/EGIPTO1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitGermania = {
  id: 0,
  civilizacion: 'GERMANIA',
  civilizacion2: 'GERMANIA',
  nombre: 'GERMANOS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/GERMANIA1.png',
  imagen: '',
  tipo: 'Civilization',
};

const unitBritania = {
  id: 0,
  civilizacion: 'BRITANIA',
  civilizacion2: 'BRITANIA',
  nombre: 'BRITANOS',
  salud: 10000,
  ataque: 10000,
  alcance: 10000,
  defensa: 10000,
  velocidad: 10000,
  vision: 0,
  coste: 10000,
  moneda: '',
  alias: '',
  // imagen: 'assets/icons/escudos/BRITANIA1.png',
  imagen: '',
  tipo: 'Civilization',
};

