import { heroes } from "../data/heroes";
import { Hero } from "../interfaces";

export const getHeroById = (id: string):Hero|undefined => {
    return heroes.find(hero => hero.id === id);
}
