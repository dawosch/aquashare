export default interface IAd {
  readonly id: number;
  img: string;
  title: string;
  description: string;
  genus: string;
  price: number;
  fix: boolean;
  zip: string;
  town: string;
  time: string;
}
