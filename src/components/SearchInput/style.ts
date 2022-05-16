import styled from "styled-components";



export const InputComponent = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    width: 100%;
    
    input{
        width: 220px;
        border-radius: 6px;
        border: 1px solid #7b7b7b;
        padding: 5px;
    }
    .lista{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(200px, 1fr) );
        list-style: none;
        grid-gap: 1.5rem;
        width: 100%;
    }

`;