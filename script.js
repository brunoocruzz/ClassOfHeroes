class Hero {
    constructor(type, habilite) {
      this.type = type;
      this.habilite = habilite;
    }

    attack() {
      console.log(`${this.type} atacou usando ${this.habilite} `)
    }
}

let mage = new Hero('mago', 'magia')
let warrior = new Hero('Guerreiro', 'espada')
let monge = new Hero('monge', 'artes marciais')
let ninja = new Hero('ninja', 'shuriken')


mage.attack()
warrior.attack()
monge.attack()
ninja.attack()




