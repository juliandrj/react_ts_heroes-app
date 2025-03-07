import { Hero, Publisher } from "../interfaces";
import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher: Publisher): Hero[] => {
    return heroes.filter(hero => hero.publisher === publisher);
}
