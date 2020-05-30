import './Column.scss';

// interface Columns {

// }

export interface LeftWidth {
  ChangeWidthLeft(coordinatePercent: number): void;
}

export interface RightWidth {
  ChangeWidthRight(coordinatePercent: number): void;
}

export default class ColumnTwo implements RightWidth, LeftWidth {

  constructor(parentElement: HTMLElement, name = '') {
    this.parentElement = parentElement;
    this.name=name;
    this.Init();
  }

  private parentElement: HTMLElement;

  private column: HTMLElement;

  private header: HTMLElement;

  private coordinate: number;

  private changeWidth: number;

  private left: number;

  private changeLeft: number;

  private name: string;

  Init() {
    this.CreateElements();
    this.AddClasses();
    this.AddContentHTML();
  }

  private CreateElements() {
    this.column = document.createElement('div');
    this.header = document.createElement('div');
  }

  private AddClasses() {
    this.column.classList.add('column');
  }

  private AddContentHTML() {
    this.parentElement.appendChild(this.column);
    // const el = document.createElement('div');
    // el.style.width = '80%';
    // el.style.height = '80%';
    // el.style.backgroundColor = 'blue';

    this.header.innerText = this.name;
    this.header.style.width = '80%';
    this.header.style.backgroundColor = 'blue';
    // this.header.style.display = 'inline-block';
    this.column.appendChild(this.header);
    // this.column.appendChild(el);
  }

  ChangeWidthLeft(coordinatePercent: number) {
    if (coordinatePercent <= 1 && coordinatePercent >= 0) {
      this.left = this.parentElement.offsetWidth * coordinatePercent +this.parentElement.getBoundingClientRect().left;
      // this.leftBefore = this.column.getBoundingClientRect().left;      
      this.changeLeft = this.column.getBoundingClientRect().left  - this.left;
      this.column.style.left = `${this.left}px`;
      this.column.style.width = `${this.column.offsetWidth + this.changeLeft}px`;
      console.warn(this.left+' this.left');
      console.warn(this.changeLeft+' this.changeLeft');
      console.warn((this.column.offsetWidth + this.changeLeft)+' this.column.offsetWidth + this.changeLeft');
    }
  }

  ChangeWidthRight(coordinatePercent: number) {
    if (coordinatePercent >= 0 && coordinatePercent <= 1) {
      this.coordinate = this.parentElement.offsetWidth * coordinatePercent + this.parentElement.getBoundingClientRect().left;
      this.changeWidth = this.coordinate - this.column.getBoundingClientRect().left - this.column.offsetWidth;
      this.column.style.width = `${this.column.offsetWidth + this.changeWidth}px`;
    }
  }



}