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

export const UpdateButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.COLORS.PRIMARY};
  margin-top: 20px;
 
`;