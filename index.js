class Tree {
    constructor(species) {
        this.species = species
    }

    static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }
}

class Deciduous extends Tree {
    constructor(species, name) {
        super(species)
        this.name = name
    }

    static definition() {
        return super.definition() + " Deciduous trees shed their leaves annually."
    }
}

class Evergreen extends Tree {
    constructor(species, name) {
        super(species) 
        this.name = name
    }

    static definition() {
        return super.definition() + " Evergreens keep their leaves all year round."
    }
}

const newTree = new Tree("Sequoia")
const newDeciduous = new Deciduous("Oak", "Oaky")
const newEvergreen = new Evergreen("Pine", "Sappy")
// console.log(newTree)
// console.log(newDeciduous)
// console.log(Evergreen.definition())