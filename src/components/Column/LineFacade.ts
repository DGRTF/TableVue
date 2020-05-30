import { Columns } from './Column';
import Line from './Line';
import LineHeader from './LineHeader';
import VerticalBorder, { ControlObservable } from '../VerticalBorder/VerticalBorder';


export default class LineFacade {
  constructor(verticalBorder: ControlObservable[]) {
    this.verticalBorder = verticalBorder;
    this.Init();
  }

  private verticalBorder: ControlObservable[];

  private lineArr: Line[];

  private lineHeader: LineHeader;

  private Init() {
    this.AddObserverVerticalBorder();
    this.ToLinkLines();
  }

  private AddObserverVerticalBorder() {
    this.verticalBorder.forEach(el => {
      this.lineArr.forEach(el => {
        el.AddObserver(el);
      });
    });
  }

  private ToLinkLines() {
    this.lineArr.forEach((el, ind) => {
      this.lineArr.forEach((element, index) => {
        if (ind !== index)
          el.AddObserver(element);
      });
    })
  }

  GetElementArr(index: number, item: number): HTMLElement {
    return this.lineArr[item].GetElementArr()[index];
  }
}