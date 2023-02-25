import { HeaderContainer } from "./header.style"
import { useNavigate } from "react-router-dom"

function Header() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/")
    }

    const goToTableaux = () => {
        navigate("/mes-tableaux")
    }

    return (
        <HeaderContainer>
            <div className="header__logo">
                <h1>Trello</h1>
            </div>
            <div className="header__menu">
                <p onClick={goToHome}>Accueil</p>
                <p onClick={goToTableaux}>Mes tableaux</p>
                <img src={require('../../public/user.png')}></img>
            </div>

        </HeaderContainer>
    )
}

export default Header