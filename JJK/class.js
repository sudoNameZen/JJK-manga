
//making class and defining its object


class Jujutsu {
    constructor(){
        this.name = "Jujutsu Kaisen";
        this.type = "Anime";
        this.description = "A story about a high school student who becomes a jujutsu sorcerer to fight curses.";
        this.characters= ["yuji","satoru","megumi","nobara"];

    }
    getName(){
        return this.name;
    }

}

let jujutsu =new Jujutsu();
console.log(jujutsu.getName());


// defining the objects 

const characters={
    yuji:{
        name:"Yuji Itadori",
        age:15,
        power:"Superhuman strength and speed",
        description:"A high school student who becomes a jujutsu sorcerer after consuming a cursed object."
    },
    satoru:{
        name:"Satoru Gojo",
        age:28,
        power:"Limitless and Six Eyes",
        description:"A powerful jujutsu sorcerer and teacher at Jujutsu High."
    },
    megumi:{
        name:"Megumi Fushiguro",
        age:15,
        power:"Shikigami technique",
        description:"A jujutsu sorcerer with the ability to summon shikigami."
    },
    nobara:{
        name:"Nobara Kugisaki",
        age:15,
        power:"Straw Doll technique",
        description:"A jujutsu sorcerer with the ability to manipulate cursed energy through a straw doll."
    }
};


console.log(characters.yuji.power); 