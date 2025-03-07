import { HeroList } from "../components"
import { Publisher } from "../interfaces"

export const DcPage = () => {
    return (
        <HeroList publisher={Publisher.DCComics} />
    )
}
