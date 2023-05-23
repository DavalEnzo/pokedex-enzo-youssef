import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NoMatch from "./NoMatch";
import PokemonList from "../components/PokemonList";
import PokemonDetails from "../components/PokemonDetails";

const Routeur = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonList />} />
                <Route path="/pokemon/:id" element={<PokemonDetails />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routeur
