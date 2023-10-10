type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Inicial: undefined;
    Cadastro: undefined;
}
export interface IPageProps {
    navigation : NativeStackNavigationProp<RootStackParamList >
}