import React from "react";
import { Text} from "react-native";
import { Container, ContainerFoto, ContainerPrincipal, Conteudo, ImagemSecundaria, Imagens, QuartaImagem, TerceiraImagem } from "./styles";



function Inicial(){
    return (
        <Container>
            <ContainerPrincipal>
                <ContainerFoto>
                    <Imagens
                        source={require("../../assets/images/Foto1.png")}
                    />
                    <ImagemSecundaria
                        source={require("../../assets/images/Foto2.jpg")}
                    />
                    <TerceiraImagem
                        source={require("../../assets/images/Foto3.jpg")}
                    />
                    <QuartaImagem
                        source={require("../../assets/images/Foto4.png")}
                    />
                <Conteudo>

                </Conteudo>
                </ContainerFoto>
            </ContainerPrincipal>
        </Container> 
    )
}

export default Inicial;