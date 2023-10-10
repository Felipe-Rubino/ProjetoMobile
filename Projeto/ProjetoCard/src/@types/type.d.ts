import { TokenType } from "./auth";

export type Data = {
    colaboradorId : number;
    nome : string;
    nomeSocial: string;
    email: string;
    dataDeNascimento: string;
    telefone : string;
    imagem: imagem;
    dados?: imagem;
    instagram ?: string;
    gitHub?: string;
    linkedin?: string;
    facebook?: string;
}
export type imagem = {
    imagemId : number;
    dados: string;
}
export type dataProps = {
    data : Data
   
}
export type FeedCardProps ={
    data : Data
    onDelete : (colaboradorId: number, token: TokenType) => Promise<void>;
    setEditData : Dispatch<SetStateAction<Data>>;
    setModalEdit : Dispatch<SetStateAction<boolean>>;
}


export interface ModalProps {
    modalVisible: boolean;
    headerTitle?: string;
    buttonTitle?: string;
    onClose: () => void;
    onAction: () => void;
}

