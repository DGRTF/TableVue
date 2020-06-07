import { Vue, Prop, Component } from 'vue-property-decorator';

@Component({
})
export default class FormChangeBD extends Vue {

  @Prop() private header: string;

  @Prop({ default: '' }) private path: string;

  private img: HTMLElement;

  // mounted() {
  // }

  private PreviewImage(event: Event) {
    const el = (event.target as HTMLFormElement);
    const img = el.files[0];
    const path = URL.createObjectURL(img);
    (el.nextElementSibling as HTMLElement).style.backgroundImage = `url(${path})`;
  }

  private async SubmitForm(event: Event) {
    const form = (event.target as HTMLFormElement);
    const formData = new FormData(form);

    const city = formData.get('city');
    const street = formData.get('street');
    const home = formData.get('home');
    const flat =`${formData.get('flat')}`;

    const address = `${city} ${street} д. ${home} кв. ${flat}`;

    formData.delete('city');
    formData.delete('street');
    formData.delete('home');
    formData.delete('flat');

    formData.append('address', address);

    console.warn(formData);
    formData.forEach(el => {
      console.warn(el);
    })

    const response = await fetch(`${this.path}`, {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    console.warn(result);
  }
}