import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

    const [search, setSearch] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        if (!search) return;
    
        navigate(`/search?q=${search}`, { replace: true });
        setSearch("");
      };
    

    return (
            <nav id="navbar" className="navbar text-success bg-dark fw-bold text-uppercase p-2 border-bottom border-3 border-success">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand text-success">Movie List</Link>
                    <form className="d-flex" role="search" onSubmit={handleSubmit}>
                        <input type="text" className="form-control border border-3 border-success m-2 bg-dark text-success" placeholder="Pesquisar..." onChange={(e) => setSearch(e.target.value)}
          value={search}/>
                        <button type="submit" className="btn btn-success text-dark m-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                            </svg>
                        </button>
                    </form>
                </div>
            </nav>
    )
}

export default Navbar