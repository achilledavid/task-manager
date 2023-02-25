import styled from "styled-components";

export const ColonneStyle = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    background-color: rgba(161,161,161,0.1);
    width: 300px;
    height: 100%;
    padding: 10px;
    border-radius: 8px;
    overflow: hidden;

    .head {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 10px;

        h3 {
            font-size: 1rem;
            font-weight: 600;
        }
    
        .pin {
            width: 8px;
            height: 8px;
            border-radius: 100vmax;
        }
    }

`;