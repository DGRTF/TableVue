import Line, { Lines, LineContent } from './Line';

export interface CreatorLineContent{
  FactoryMethod(count: number, contentArr: HTMLElement[]): LineContent[];
}

export default class CreatorLine implements CreatorLineContent{
  FactoryMethod(count: number, contentArr: HTMLElement[]): LineContent[] {
    const lineArr: LineContent[] = [];
    const contentLineArr: HTMLElement[] = []
    contentArr.forEach((el, index) => {
      contentLineArr.push(el);
      if ((index + 1) % (count) == 0 && index !== 0) {
        const line = new Line(contentLineArr.slice());
        lineArr.push(line);
        contentLineArr.length = 0;
      }
    });
    console.warn(lineArr.slice());
    return lineArr.slice();
  }
}