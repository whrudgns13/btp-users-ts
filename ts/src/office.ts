interface Dog{
    name : string;
    age : number;
}

interface Cat{
    name : string,
    breed : string
}

function isCat(animal : Dog | Cat) : animal is Cat{
    return (animal as Cat).breed!==undefined
}

function makeNoise(animal : Dog | Cat){
    if(isCat(animal)){
       return animal
    }
    return animal
}