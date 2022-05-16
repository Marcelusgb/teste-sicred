import styled from "styled-components";

export const Card = styled.div`
    position: relative;

    &:hover{
        .card-box{
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            filter: blur( 3px);
            img{
                transform: scale(0.98);
            }
        }
        .card-hover{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 40px;
        }
    }
    
    .card-box{
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .card-hover{
        transition: all 0.3s ease-in-out;
        display: none;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        color: white;
        background-color: #4241407a;
        padding: 0px 25px;
        text-align: center;

        label{
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 14px;
            text-transform: uppercase;

            input{
                width: 25px;
                height: 14px
            }
        }

        button{
            padding: 10px 15px;
            border-radius: 5px;
            border: 1px solid white;
            font-size: 12px;
            text-transform: uppercase;
            font-weight: bold;
            background: #b61f1f;
            color: white;
        }
    }
`;