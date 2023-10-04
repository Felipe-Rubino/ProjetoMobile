import styled from 'styled-components/native'
import { SafeAreaView } from 'react-native-safe-area-context';

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${ ( { theme }) => theme.COLORS.PRIMARY};
`;

export const ContainerPrincipal = styled.View `
    flex: 1;

`

export const ContainerFoto = styled.View `
    

`

export const Imagens = styled.Image `
    height: 120px;
    width: 100px;
    border-radius: 20px;
    position: absolute;
    top: 10px;
    transform: translateX(20px) translateY(50px) rotate(-15deg);
`

export const ImagemSecundaria = styled.Image `
    height: 120px;
    width: 100px;
    border-radius: 20px;
    position: absolute;
    top: -30px;
    left: 100px;
    transform: translateX(50px) translateY(50px) rotate(-5deg);
`

export const TerceiraImagem = styled.Image `
    height: 100px;
    width: 100px;
    border-radius: 20px;
    position: absolute;
    top: 130px;
    left: -50px;
    transform: translateX(50px) translateY(50px) rotate(15deg);
`

export const QuartaImagem = styled.Image `
    height: 200px;
    width: 200px;
    border-radius: 20px;
    position: absolute;
    top: 110px;
    left: 100px;
    transform: translateX(50px) translateY(50px) rotate(-15deg);
`

export const Conteudo = styled.View `
    padding-left: 22px;
    position: absolute;
    top: 400px;
    width: 100%
`

export const Titulo = styled.Text `
    font-size: 50px;
    font-weight: 800;
    color: ${ ( { theme }) => theme.COLORS.WHITE}
`

export const ContainerBotao = styled.View `
    padding-bottom: 80px;
    align-items: center
    
`

