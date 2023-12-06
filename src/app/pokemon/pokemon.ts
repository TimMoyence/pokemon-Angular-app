export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  constructor(
    name: string = 'Enter a name',
    hp: number = 100,
    cp: number = 10,
    types: Array<string> = ['Normal'],
    picture: string = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png',
    created: Date = new Date()
    ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.types = types;
    this.picture = picture;
    this.created = created;
    }
}