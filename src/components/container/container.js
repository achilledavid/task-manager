import { ContainerStyle } from "./container.style";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Tableaux from "../tableaux/tableaux";

const Container = () => {
    return (
        <ContainerStyle>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/mes-tableaux" element={<Tableaux />} />
            </Routes>
        </ContainerStyle>
    );
};

export default Container;