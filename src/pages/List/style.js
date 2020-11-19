import styled from 'styled-components'

export const ContainerL = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 37px;

    a{
        width: 800px;
        height: 200px;
        background: var(--color-background);
        border-radius: 20px;
        text-decoration: none;
        display: flex;

        & + a {
            margin-top: 20px;
        }

        img{
            width: 248px;
            height: 200px;
            border-radius: 20px 20px 0 20px;
            margin-right: 21px;
        }

        div {
            display: flex;
            flex-direction: column;

            strong {
                margin-top: 27px;
                margin-right: 27px;
                flex-wrap: wrap;
                color: var(--color-text);
            }

            span {
                margin-top: 14px;
                margin-right: 27px;
                flex-wrap: wrap;
                color: var(--color-gray-text);
            }

            p {
                margin-top: 20px;
                margin-left: 350px;
                color: var(--color-button);
        }
        }
    }
`