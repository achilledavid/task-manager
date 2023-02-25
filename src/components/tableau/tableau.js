import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Colonne from '../colonne/colonne';

const Tableau = () => {
    const { id } = useParams();
    const [tableau, setTableau] = useState(null);
    const [colonnes, setColonnes] = useState(null);

    useEffect(() => {
        fetchTableau();
    }, [])

    const fetchTableau = async () => {
        const response = await fetch(`/tableaux/${id}`);
        const data = await response.json();
        setTableau(data);
        setColonnes(data.colonnes);
        console.log(colonnes.couleur)
    }

    return (
        <>
            <div className='colonnes__container'>
                {
                    colonnes &&
                    colonnes.map((colonne) => (
                        <Colonne key={colonne.id} colonne={colonne} />
                    ))
                }
            </div>
        </>
    );
};

export default Tableau;