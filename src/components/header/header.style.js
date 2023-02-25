import styled from 'styled-components';

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #026aa7;
    padding: 15px 30px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;

    .header {
        &__logo {
            h1 {
                color: #fff;
                font-size: 1.3rem;
            }
        }
    
        &__menu {
            display: flex;
            align-items: center;
            gap: 30px;

            p {
                color: #fff;
                font-size: 1rem;
                cursor: pointer;
                position: relative;

                &:before {
                    content: "";
                    display: block;
                    width: 0;
                    height: 2px;
                    background-color: #fff;
                    transition: width 300ms ease;
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                }

                &:hover {
                    &:before {
                        width: 100%;
                    }
                }
            }
            
            img {
                margin-left: 10px;
                width: 40px;
                aspect-ratio: 1/1;
                object-fit: cover;
                border-radius: 100vmax;

                &:hover {
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }
    }
`;