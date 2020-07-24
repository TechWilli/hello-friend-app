import styled from 'styled-components';

export const Layout = styled.section`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : '#F6F6F6'};
    position: relative;
`;