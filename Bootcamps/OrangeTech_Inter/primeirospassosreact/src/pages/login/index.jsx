import { Link } from "react-router-dom"
import { Button } from "../../components/button"

const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <Button title="Login" variant="secondary" />
            <button><Link to="/">Voltar para home</Link></button>
        </>
    )
}

export { Login }