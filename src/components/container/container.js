import { ContainerStyle } from "./container.style";
import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Tableaux from "../tableaux/tableaux";
import Tableau from "../tableau/tableau";

const Container = () => {
    return (
        <ContainerStyle>
            <Routes>
                <Route path="/" element={
                    <Home />
                } />
                <Route path="/mes-tableaux" element={
                    <Tableaux />
                } />
                <Route path="/tableau/:id" element={
                    <Tableau />
                } />
            </Routes>
        </ContainerStyle>
    );
};

export default Container;