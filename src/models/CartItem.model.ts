// Classe CartItem avec liste d'initialisation
export default class CartItem {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public quantity: number
  ) {}
}
