import { heroes } from "../data/heroes";
import { Hero } from "../interfaces";

export const getHeroesByName = (name:string = ''):Hero[] => {
    name = name.trim().toLowerCase();
    if (name.length === 0) {
        return [];
    }
    return heroes.filter(hero => hero.superhero.trim().toLocaleLowerCase().includes(name));
};