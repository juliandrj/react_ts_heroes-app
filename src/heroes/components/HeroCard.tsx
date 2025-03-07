import { Link } from "react-router-dom"
import { HeroCardProps } from "../interfaces"

export const HeroCard = ({hero}:HeroCardProps) => {
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/assets/heroes/${hero.id}.jpg`} className="card-img" alt={hero.superhero}/>
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{hero.superhero}</h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">{hero.alter_ego}</h6>
                            {hero.alter_ego === hero.characters ? '' : <p className="card-text">{hero.characters}</p>}
                            <p className="card-text">{hero.first_appearance}</p>
                            <Link className="card-link" to={`/hero/${hero.id}`}>
                                Más...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
