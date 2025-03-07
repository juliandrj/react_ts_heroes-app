import { getHeroesByPublisher } from "../helpers"
import { Hero, HeroListProps } from "../interfaces"
import { HeroCard } from "./HeroCard";
import { useMemo } from 'react';

export const HeroList = ({publisher}:HeroListProps) => {
    const heroes:Hero[] = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
    return (
        <>
            <h1>{publisher}</h1>
            <hr />
            <div className="row rows-cols-1 row-cols-md-3 g-3">
                {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
            </div>
        </>
    )
}
