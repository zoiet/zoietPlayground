import { Component } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

export interface SortieElement {
  partTaskType: string;
  tasked: number;
  planned: number;
  executed: number;
  flown: number;
  subPartTask: Array<Object>;
}

export interface GongchaElement {
  milkTeaName: string;
  sugarLevel: number;
  iceLevel: number;
  toppings: Array<String>;
  type: string;
}

const SORTIE_DATA: SortieElement[] = [
  {
    partTaskType: 'CSO-L',
    tasked: 4,
    planned: 3,
    executed: 2,
    flown: 1,
    subPartTask: [
      {
        partTaskType: 'Killbelt',
        hit: 6,
        miss: 2
      },
      {
        partTaskType: 'Killbox',
        hit: 6,
        miss: 2
      },
    ],
  },
  {
    partTaskType: 'CSAR',
    tasked: 4,
    planned: 3,
    executed: 2,
    flown: 1,
    subPartTask: [
      {
        partTaskType: 'Killbelt',
        hit: 6,
        miss: 2
      },
      {
        partTaskType: 'Killbox',
        hit: 6,
        miss: 2
      },
    ],
  },
];

const GONGCHA_DATA: GongchaElement[] = [
  {
    milkTeaName: 'Green Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Mini Pearls'],
    type: 'Tea',
  },
  {
    milkTeaName: 'Oolong Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Aiyu Jelly'],
    type: 'Tea',
  },
  {
    milkTeaName: 'Alisan Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Taro Balls'],
    type: 'Tea',
  },
  {
    milkTeaName: 'Earl Grey Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Tea',
  },
  {
    milkTeaName: 'Black Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Tea',
  },
  {
    milkTeaName: 'Taro Drink',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Speciality',
  },
  {
    milkTeaName: 'Chocolate Drink',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Speciality',

  },
  {
    milkTeaName: 'Match w Red Bean Drink',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Speciality',
  },
  {
    milkTeaName: 'Milk Foam Green Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Foam',
  },
  {
    milkTeaName: 'Milk Foam Black Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Foam',
  },
  {
    milkTeaName: 'Milk Foam Oolong Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Foam',
  },
  {
    milkTeaName: 'Milk Foam Alisan Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Foam',
  },
  {
    milkTeaName: 'Milk Foam Strawberry Black Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Strawberry Jelly'],
    type: 'Foam',
  },
  {
    milkTeaName: 'Milk Foam Brown Sugar',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Brown Sugar',
  },
  {
    milkTeaName: 'Brown Sugar Fresh Milk',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Pearl'],
    type: 'Brown Sugar',
  },
  {
    milkTeaName: 'Brown Sugar Fresh Milk Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: ['Pearl'],
    type: 'Brown Sugar',
  },
  {
    milkTeaName: 'Mango Green Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Fruit',
  },
  {
    milkTeaName: 'Honey Green Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Fruit',
  },
  {
    milkTeaName: 'Grapefruit Green Tea',
    sugarLevel: 3,
    iceLevel: 2,
    toppings: [],
    type: 'Fruit',
  },
]

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class MaterialComponent {
  displayedColumns: string[] = ['select', 'partTaskType', 'tasked', 'planned', 'executed', 'flown'];
  dataSource = new MatTableDataSource<SortieElement>(SORTIE_DATA);
  selection = new SelectionModel<SortieElement>(true, []);

  displayedColumns1: string[] = ['select', 'position', 'name', 'weight', 'symbol'];
  dataSource1 = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection1 = new SelectionModel<PeriodicElement>(true, []);
  expandedElement: PeriodicElement | null;

  constructor() {
    this.masterToggle();
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: SortieElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.partTaskType + 1}`;
  }

  getKeys(object): string[] {
    console.log(Object.keys(object));
    return Object.keys(object);
  }

  onItemSelected(idx: number) {
    console.log(idx);
  }

}
