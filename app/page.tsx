"use client"
import Nav from "./components/nav"
import Home from "./components/home";

export default function App() {
    
    return (
        <div>
            <Nav pathKey={1}>
                <Home></Home>
            </Nav>
        </div>
    )
}