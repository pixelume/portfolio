import styled from 'styled-components';

const SectContOneThree = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  text-align: center;
  margin-top: ${props => props.marginTop || '15px'};
  padding: ${props => props.paddingY || '0px'};
  justify-content: ${props => props.justifyContent || 'space-evenly'};
  align-items: ${props => props.alignItems || 'center'};
  background-color: ${props => props.backgroundColor || "transparent"};
  box-sizing: border-box;
  @media(min-width: 800px) {
    flex-flow: row;
    padding: ${props => props.paddingY || '0px'} 10%;
    /* justify-content: ${props => props.justifyContent || 'space-evenly'} */
    /* display: flex; */
    align-items: ${props => props.alignItems || 'stretch'};
  }
`

export default SectContOneThree;