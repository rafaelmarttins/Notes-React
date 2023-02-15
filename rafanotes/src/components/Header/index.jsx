import { MdLogout } from "react-icons/md";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return(
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/rafaelmarttins.png" alt="Foto do Usuário"/>

                <div>
                    <span>Bem vindo,</span>
                    <strong>Rafael Martins</strong>
                </div>
            </Profile>

            <Logout>
                <MdLogout />
            </Logout>
        </Container>
    );
}