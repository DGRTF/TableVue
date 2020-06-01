import { LineContent } from './Line';
import { ControlObservable } from '../VerticalBorder/VerticalBorder';


export default class LineControl {
  constructor(lineArr: LineContent[], verticalBorderArr: ControlObservable[]) {
    this.verticalBorderArr = verticalBorderArr;
    this.lineArr = lineArr;
    this.Init();
  }

  private verticalBorderArr: ControlObservable[];

  private lineArr: LineContent[];

  private addLineArr: LineContent[];

  private selectLine: number;

  private Init() {
    this.ToLinkLines(this.lineArr);
    this.AddObserversInVerticalBorders();
  }

  private ToLinkLines(lineArr: LineContent[]) {
    lineArr.forEach((el, ind) => {
      lineArr.forEach((element, index) => {
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

  AddLines(lineArr: LineContent[]) {
    this.addLineArr = lineArr;
    this.ToLinkLines(this.addLineArr);
    this.ToLinkLinesAddArr();
  }

  private ToLinkLinesAddArr() {
    this.addLineArr.forEach((el, ind) => {
      this.lineArr.forEach((element, index) => {
        if (ind !== index)
          el.AddObserver(element);
      });
    });
  }
}