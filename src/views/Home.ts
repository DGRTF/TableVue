import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import Table from './Table.vue';


@Component({
  components:{
    Table
  }
})
export default class Home extends Vue {
  private inDataArr: HTMLElement[] = [];

  private count = 8;

  private columnNameArr: string[] = [
    'Превью',
    'Имя',
    'Фамилия',
    'Дата рождения',
    'Возраст',
    'Должность',
    'Удалённая работа',
    'Адрес проживания',
    'Превью',
    'Имя',
    'Фамилия',
    'Дата рождения',
    'Возраст',
    'Должность',
    'Удалённая работа',
    'Адрес проживания',
    'Превью',
    'Имя',
    'Фамилия',
    'Дата рождения',
    'Возраст',
    'Должность',
    'Удалённая работа',
    'Адрес проживания',
  ];

  mounted() {
    const dataHTMLArr: HTMLElement[] = [];
    this.columnNameArr.forEach(el => {
      const element = document.createElement('div');
      element.innerText = el;
      dataHTMLArr.push(element);
    });
    this.inDataArr = dataHTMLArr;
    console.warn(this.inDataArr.length);
  }
}