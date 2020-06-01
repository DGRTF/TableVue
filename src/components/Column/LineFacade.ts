import { Columns } from './Column';
import Line, { Lines, LineContent } from './Line';
import LineHeader from './LineHeader';
import VerticalBorder, { ControlObservable, ControlObserverCoordinate } from '../VerticalBorder/VerticalBorder';
import CreatorLine from './CreatorLine';


export default class LineControl {
  constructor(lineArr: LineContent[], verticalBorderArr: ControlObservable[]) {
    this.verticalBorderArr = verticalBorderArr;
    this.lineArr = lineArr;
    this.Init();
  }

  private verticalBorderArr: ControlObservable[];

  private lineArr: LineContent[];

  private Init() {
    this.ToLinkLines();
    this.AddObserversInVerticalBorders();
  }

  private ToLinkLines() {
    this.lineArr.forEach((el, ind) => {
      this.lineArr.forEach((element, index) => {
        if (ind !== index)
          el.AddObserver(element);
      });
    })
  }

  private AddObserversInVerticalBorders() {
    this.verticalBorderArr.forEach(el => {
      this.lineArr.forEach(element => {
        el.AddObserver(element);
      });
    });
  }

  GetElementArr(): HTMLElement[] {
    let contentLine: HTMLElement[] = [];
    this.lineArr.forEach(el => {
      contentLine = contentLine.concat(el.GetElementArr());
    });
    return contentLine.slice();
  }
}