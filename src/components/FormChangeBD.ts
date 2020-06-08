import { Vue, Prop, Component, Watch } from 'vue-property-decorator';

@Component({
})
export default class FormChangeBD extends Vue {

  @Prop() private header: string;

  @Prop() private path: string;

  @Prop() private inTemplate: {
    id: number;
    name: string;
    surname: string;
    position: string;
    preview: string;
    address: string;
    remoteWork: boolean;
    birthDate: string;
  };

  private formData: FormData;

  private img: HTMLElement;

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
    const flat = `${formData.get('flat')}`;

    const address = `${city} ${street} д. ${home} кв. ${flat}`;

    formData.delete('city');
    formData.delete('street');
    formData.delete('home');
    formData.delete('flat');

    formData.append('address', address);

    this.formData = formData;

    this.$emit('send', this.formData);

    // console.warn(result);
  }

  private Close() {
    this.$emit('close');
  }

  @Watch('inTemplate')
  private ChangeInTemplate(inTemplate: {
    id: number;
    name: string;
    surname: string;
    position: string;
    preview: string;
    address: string;
    remoteWork: boolean;
    birthDate: string;
  }) {
    const labelImage = this.$refs.labelImage as HTMLElement;
    labelImage.style.backgroundImage = `url(${inTemplate.preview})`;
  }
}