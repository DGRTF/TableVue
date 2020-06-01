import Line, { Lines, LineContent } from './Line';

export default class CreatorLineContent {
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