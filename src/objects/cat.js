Animal = require('./animal')
class Cat extends Animal
{
     
    constructor()
    {
        super();
        this.message = "Just a cat";
        
    }
    
     
    
}

module.exports = Cat;
