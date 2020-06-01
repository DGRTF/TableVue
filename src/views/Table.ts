import VerticalBorder from '@/components/VerticalBorder/VerticalBorder';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

import Column from '@/components/Column/Column';
import Line from '@/components/Column/Line';
import LineHeader from '@/components/Column/LineHeader';
import ColumnLineFacade from '@/components/Column/ColumnLineFacade';
import BordersControl from '@/components/VerticalBorder/BordersFacade';


@Component({
  components: {
  }
})
export default class Table extends Vue {

  @Prop() private contentLineArr: HTMLElement[];

  @Prop() private countColumn: number;

  private columnCount = 8;

  private currentElement: HTMLElement = null;

  private verticalBorderArr: VerticalBorder[] = [];
  
  private size: number;

  private bordersControl: BordersControl;

  private columnLineFacade: ColumnLineFacade;

  mounted() {
    this.currentElement = (this.$refs.home as HTMLElement);
  }

  private Init(cont: HTMLElement[]) {
    this.Create(cont);
    this.IntervalCheckSize();
  }



  Create(cont: HTMLElement[]) {
    for (let i = 0; i < this.columnCount - 1; i++) {
      this.verticalBorderArr.push(new VerticalBorder(this.currentElement));
    }

    this.bordersControl = new BordersControl(this.verticalBorderArr.slice());
    this.columnLineFacade = new ColumnLineFacade(this.bordersControl.GetVerticalBorderArr(), cont.slice(), this.currentElement);
    this.bordersControl.SetDefaultPosition();
  }

  private IntervalCheckSize() {
    this.size = this.currentElement.offsetWidth;
    setInterval(() => {
      if (this.currentElement.offsetWidth !== this.size) {
        this.bordersControl.UpdatePosition();
        this.columnLineFacade.UpdatePosition();
      }
    }, 50);
  }

  @Watch('contentLineArr')
  AddLines(contentLineArr: HTMLElement[]) {
    this.Init(contentLineArr);
  }
}


