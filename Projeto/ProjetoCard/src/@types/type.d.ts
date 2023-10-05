export type Data = {
    colaboradorId : number;
    nome : string;
    nomeSocial: string;
    email: string;
    dataDeNascimento: string;
    telefone : string;
    imagem: imagem;
}

type imagem = {
    imagemId : number;
    dados: string;
}

export type dataProps = {
    data : Data
}


export interface ModalProps {
    modalVisible: boolean;
    headerTitle?: string;
    buttonTitle?: string;
    onClose: () => void;
    onAction: () => void;
}