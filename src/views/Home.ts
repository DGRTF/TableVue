import { Component, Vue } from 'vue-property-decorator';
import Table from './Table.vue';


@Component({
  components: {
    Table
  }
})
export default class Home extends Vue {
  private inDataArr: HTMLElement[] = [];

  private count = 8;

  private date: Date;

  private year: number;

  private remoteWork: HTMLElement;

  private headerHTML: HTMLElement[] = [];

  private header: string[] = [
    'Превью',
    'Имя',
    'Фамилия',
    'Дата рождения',
    'Возраст',
    'Должность',
    'Удалённая работа',
    'Адрес проживания'
  ];

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

  private change: {
    name: string;
    surname: string;
    position: string;
    preview: string;
    address: string;
    remoteWork: boolean;
    birthDate: string;
  }[];

  mounted() {
    const headerHTML: HTMLElement[] = [];
    this.header.forEach(el => {
      const element = document.createElement('div');
      element.innerText = el;
      headerHTML.push(element);
    });

    this.headerHTML = headerHTML;
    this.GetElements();
  }

  private GetElements() {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'Home/Index', false);
    xhr.send();

    if (xhr.status != 200) {
      console.warn(xhr.status + ': ' + xhr.statusText);
    } else {
      console.warn(JSON.parse(xhr.responseText));
      this.change = JSON.parse(xhr.responseText);
      this.ChangeContent();
    }
  }

  private ChangeContent() {
    const dataHTMLArr: HTMLElement[] = [];
    this.change.forEach(el => {
      const elPreview = document.createElement('div');
      elPreview.classList.add('container-table__preview');
      elPreview.style.backgroundImage = `url(${el.preview})`;
      dataHTMLArr.push(elPreview);

      const elName = document.createElement('div');
      elName.innerText = el.name;
      dataHTMLArr.push(elName);

      const elSurname = document.createElement('div');
      elSurname.innerText = el.surname;
      dataHTMLArr.push(elSurname);

      const elBirthDate = document.createElement('div');
      const birthDate = new Date(el.birthDate);
      const birthDay = birthDate.getDay();
      const birthMonth = birthDate.getMonth();
      const birthYear = birthDate.getFullYear();
      elBirthDate.innerText = `${birthDay}.${birthMonth}.${birthYear}`;
      dataHTMLArr.push(elBirthDate);

      this.date = new Date(el.birthDate);
      this.CreateDate();

      const elAge = document.createElement('div');
      elAge.innerText = `${this.year}`;
      dataHTMLArr.push(elAge);

      const elPosition = document.createElement('div');
      elPosition.innerText = el.position;
      dataHTMLArr.push(elPosition);

      // const elRemoteWork = document.createElement('div');
      // elRemoteWork.innerText = `${el.remoteWork}`;
      this.CreateRemoteWorkHTMLElement(el.remoteWork);
      dataHTMLArr.push(this.remoteWork);

      const elAddress = document.createElement('div');
      elAddress.innerText = el.address;
      dataHTMLArr.push(elAddress);

    })
    this.inDataArr = dataHTMLArr;
  }

  private CreateDate() {
    const currentDate = new Date();
    this.year = currentDate.getFullYear() - this.date.getFullYear() - 1;
    if (this.date.getMonth() <= currentDate.getMonth())
      if (this.date.getMonth() <= currentDate.getMonth())
        if (this.date.getDay() >= currentDate.getDay())
          this.year += 1;
  }

  private CreateRemoteWorkHTMLElement(remoteWork: boolean) {
    this.remoteWork = document.createElement('div');
    this.remoteWork.classList.add('container-table__remote-work');
    if (remoteWork) {
      const trueRemoteWork = document.createElement('div');
      trueRemoteWork.classList.add('container-table__remote-work__true');
      this.remoteWork.appendChild(trueRemoteWork);
    }
  }

}