import styled from 'styled-components/native'

export const ModalDialog = styled.View `
    flex: 1;
    justify-content: center;
    align-items: center;
    
`

export const ModalContent = styled.View `
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 20px;
    border-radius: 10px;
    width: 80%;
`
export const SocialIconsContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SocialIcon = styled.View`
  margin-right: 10px;
`;

export const SocialText = styled.Text`
  font-weight: 800;
`;