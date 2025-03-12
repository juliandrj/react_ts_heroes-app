import { FormEvent } from "react";
import { useForm } from "../../hooks"
import { useLocation, useNavigate } from "react-router-dom";
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components";

interface SearchPageData {
    searchText: string
};


export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const q = params.get("q") || '';
    const data:SearchPageData = {
        searchText: q
    };
    const {formState, onInputChange} = useForm(data);
    const heroes = getHeroesByName(q);
    const onSearchSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        navigate(`?q=${formState.searchText}`);
    };
    return (
        <div className="container">
            <h1>Search Page</h1>
            <hr />
            <form onSubmit={onSearchSubmit} autoComplete="off" aria-label="search-form">
                <div className="input-group mb-3">
                    <input type="text" className="form-control" name="searchText" placeholder="search..." aria-label="search" value={formState.searchText} onChange={onInputChange} />
                    <button className="btn btn-outline-secondary" type="submit" >Search</button>
                </div>
            </form>
            {
                heroes.length === 0 ?
                    <div className={`alert alert-${data.searchText.trim().length > 0 ? 'danger' : 'primary'} animate__animated animate__fadeInUp`} role="alert" aria-label="search-alert">
                        {data.searchText.trim().length > 0 ? `Heroes not found (${q})` : 'Search a hero...'}
                    </div>
                    :<>
                        <h2>Results</h2>
                        <div className="row rows-cols-1 row-cols-md-3 g-3">
                            {heroes.map(hero => <HeroCard key={hero.id} hero={hero} />)}
                        </div>
                    </>
            }
        </div>
    )
}
