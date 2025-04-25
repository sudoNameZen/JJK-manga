class jujutsu {


    constructor(){
        this.technique = "Jujutsu";
        this.clan= "Zenin Clan";
        this.ability = "Cursed Energy Manipulation";
        this.description = "A technique used by jujutsu sorcerers to combat curses and protect humanity.";  


    }

    getTechnique(){
        return this.technique;
    }   
}


// new object of declared class
let jujutsuTechnique = new jujutsu();
console.log(jujutsuTechnique.getTechnique());

