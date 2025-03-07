import { HeroList } from "../components"
import { Publisher } from "../interfaces"

export const MarvelPage = () => {
    return (
        <HeroList publisher={Publisher.MarvelComics} />
    )
}
