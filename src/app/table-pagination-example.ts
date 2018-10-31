import {Component, ViewChild} from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrls: ['table-pagination-example.css'],
  templateUrl: 'table-pagination-example.html',
})
export class TablePaginationExample {
  displayedColumns = ['position', 'name', 'type'];
  dataSource = new MatTableDataSource<Element>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Element {
  name: string;
  id: number;
  type: number;
}

const ELEMENT_DATA: Element[] = [
  {id: 1, name: 'Hydrogen', type: 1.0079},
  {id: 2, name: 'Helium', type: 4.0026},
  {id: 3, name: 'Lithium', type: 6.941},
  {id: 4, name: 'Beryllium', type: 9.0122},
  {id: 5, name: 'Boron', type: 10.811},
  {id: 6, name: 'Carbon', type: 12.0107},
  {id: 7, name: 'Nitrogen', type: 14.0067},
  {id: 8, name: 'Oxygen', type: 15.9994},
  {id: 9, name: 'Fluorine', type: 18.9984},
  {id: 10, name: 'Neon', type: 20.1797},
  {id: 11, name: 'Sodium', type: 22.9897},
  {id: 12, name: 'Magnesium', type: 24.305},
  {id: 13, name: 'Aluminum', type: 26.981},
  {id: 14, name: 'Silicon', type: 28.0855},
  {id: 15, name: 'Phosphorus', type: 30.9738},
];