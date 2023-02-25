import styled from 'styled-components';

export const TableauxContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    height: 100%;
    gap: 20px;
    width: 100%;

    h1 {
        font-size: 1.5rem;
        font-weight: 700;
        width: 100%;
    }

    .tableaux {
        &__card {
            display: flex;
            flex-direction: column;
            gap: 10px;
            width: calc(33.33% - 15px);
            background-color: rgba(161, 161, 161, 0.1);
            padding: 20px;
            border-radius: 8px;
            cursor: pointer;

            &.empty {
                height: 82px;
                animation: pulse 1s infinite;
                cursor: default;
            }

            &:hover {
                background-color: rgba(161, 161, 161, 0.2);
            }

            h3 {
                font-size: 1.2rem;
            }
        }
    }

    @keyframes pulse {
        0% {
            background-color: rgba(161, 161, 161, 0.1);
        }
        50% {
            background-color: rgba(161, 161, 161, 0.2);
        }
        100% {
            background-color: rgba(161, 161, 161, 0.1);
        }
    }
`;