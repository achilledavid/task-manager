import { ColonneStyle } from "./colonne.style";

const Colonne = ({ colonne }) => {
    return (
        <>
            {colonne &&
                <ColonneStyle>
                    <div className="head">
                        <div className='pin' style={{ backgroundColor: colonne.couleur }}></div>
                        <h3>{colonne.nom}</h3>
                    </div>
                </ColonneStyle>
            }
        </>
    )
}

export default Colonne;