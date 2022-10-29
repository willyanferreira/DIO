import { Link } from "react-router-dom"
import { Button } from "../../components/button"
const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <Button title="Home" />
            <button><Link to="/login">Fazer login</Link></button>
        </>
    )
}

export { Home }