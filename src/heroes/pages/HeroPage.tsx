import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";

export const HeroPage = () => {
    const {id} = useParams();
    const hero = useMemo(() => getHeroById(id || ''), [id]);
    if (hero === undefined) {
        return (
            <Navigate to="/" />
        );
    }
    const navigate = useNavigate();
    const onNavigateBack = () => {
        navigate(-1);
    };
    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-4 animate__animated animate__fadeInLeft">
                    <img src={`/assets/heroes/${hero.id}.jpg`} className="img-fluid rounded" alt={hero.superhero}/>
                </div>
                <div className="col-md-8">
                    <h2>{hero.superhero}</h2>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><b>Alter ego</b>: {hero.alter_ego}</li>
                        <li className="list-group-item"><b>Publisher</b>: {hero.publisher}</li>
                        <li className="list-group-item"><b>First appearance</b>: {hero.first_appearance}</li>
                    </ul>
                    {hero.alter_ego === hero.characters ? '' : <>
                        <h3>Characters</h3>
                        <p>{hero.characters}</p>
                    </>}
                    <button className="btn btn-primary" type="button" onClick={onNavigateBack}>
                        Volver
                    </button>
                </div>
            </div>
        </div>
    )
}
