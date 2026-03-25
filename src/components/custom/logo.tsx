import { useNavigate } from "@tanstack/react-router"

export const Logo = () => {
    const navigate = useNavigate()

    return <img onClick={() => navigate({to: "/"})} width={60} height={40} src="/GestionRodadoLogo.svg" alt="Logo" />
}