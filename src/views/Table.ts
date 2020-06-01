import VerticalBorder from '@/components/VerticalBorder/VerticalBorder';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Column from '@/components/Column/Column';
import RightWidthMove from '@/components/Column/RightWidth';
import LeftWidthMove from '@/components/Column/LeftWidth';
import MaxMargin from '@/components/VerticalBorder/MaxMargin';
import MinMargin from '@/components/VerticalBorder/MinMargin';
import Line from '@/components/Column/Line';
import LineHeader from '@/components/Column/LineHeader';
import ColumnLineFacade from '@/components/Column/ColumnLineFacade';


@Component({
  components: {
  }
})
export default class Table extends Vue {

  @Prop() private contentLineArr: HTMLElement[];

  @Prop() private countColumn: number;

  private columnCount = 8;

  private currentElement: HTMLElement = null;

  private lineArr: Line[] = [];

  private columnArr: Column[] = [];

  private verticalBorderArr: VerticalBorder[] = [];

  private lineHeader: LineHeader;

  mounted() {
    this.currentElement = (this.$refs.home as HTMLElement);
  }

  private Init(cont: HTMLElement[]) {
    this.Create(cont);
    // this.ToLinkLines();
  }



  Create(cont: HTMLElement[]) {
    // const contentLineArr: HTMLElement[] = [];
    // cont.forEach((el, index) => {
    //   contentLineArr.push(el);
    //   if ((index + 1) % this.countColumn == 0 && index !== 0) {
    //     if (index < this.columnCount) {
    //       this.lineHeader = new LineHeader(contentLineArr.slice());
    //       contentLineArr.length = 0;
    //     } else {
    //       const line = new Line(contentLineArr.slice());
    //       this.lineArr.push(line);
    //       contentLineArr.length = 0;
    //     }
    //   }
    // });

    // for (let i = 0; i < this.countColumn; i++) {
    //   const column = new Column(this.currentElement);
    //   this.columnArr.push(column);
    // }

    // for (let i = 0; i < this.countColumn; i++) {
    //   this.columnArr[i].AddContent(this.lineHeader.GetElementArr()[i]);
    //   this.lineArr.forEach(el => {
    //     this.columnArr[i].AddContent(el.GetElementArr()[i]);
    //   });
    // }


    // //ColumnLineFacade
    // this.columnArr.forEach((el, index) => {
    //   if (index === 0) {
    //     const rightWidth = new RightWidthMove();
    //     rightWidth.AddObserver(el);
    //     this.verticalBorderArr.push(new VerticalBorder(this.currentElement));
    //     this.verticalBorderArr[index].AddObserver(rightWidth);
    //     el.ChangeWidthLeft(0);
    //   }
    //   else {
    //     if (index < this.columnArr.length - 1) {
    //       const rightWidth = new RightWidthMove();
    //       rightWidth.AddObserver(el);
    //       const leftWidth = new LeftWidthMove();
    //       leftWidth.AddObserver(el);

    //       this.verticalBorderArr.push(new VerticalBorder(this.currentElement));
    //       this.verticalBorderArr[index].AddObserver(rightWidth);
    //       this.verticalBorderArr[index - 1].AddObserver(leftWidth);
    //     }
    //     else {
    //       const leftWidth = new LeftWidthMove();
    //       leftWidth.AddObserver(el);
    //       this.verticalBorderArr[index - 1].AddObserver(leftWidth);
    //       el.ChangeWidthRight(1);
    //     }
    //   }
    // });

    //
    for (let i = 0; i < this.columnCount - 1; i++) {
      this.verticalBorderArr.push(new VerticalBorder(this.currentElement));
    }

    new ColumnLineFacade(this.verticalBorderArr.slice(), cont.slice(), this.currentElement);

    // controlFacade
    const middleWidth = 1 / this.countColumn;
    this.verticalBorderArr.forEach((el, index) => {
    //   el.AddObserver(this.lineHeader);
    //   this.lineArr.forEach(element => {
    //     el.AddObserver(element);
    //   });
console.warn('df');
      if (index < this.verticalBorderArr.length - 1) {
        const maxMargin = new MaxMargin([el]);
        const nextElement = this.verticalBorderArr[index + 1]
        nextElement.AddObserver(maxMargin);
        const minMargin = new MinMargin([nextElement])
        el.AddObserver(minMargin);
      }
      el.SetCurrentMarginPercent(middleWidth * (index + 1));
    });


  }

  // ToLinkLines() {
  //   this.lineArr.forEach((el, ind) => {
  //     this.lineArr.forEach((element, index) => {
  //       if (ind !== index)
  //         el.AddObserver(element);
  //     });
  //   })
  // }


  @Watch('contentLineArr')
  AddLines(contentLineArr: HTMLElement[]) {
    this.Init(contentLineArr);
  }
}


