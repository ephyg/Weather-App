import styled from 'styled-components'
import bg from '../../Assets/images/background.jpg'
export const Container = styled.div`
    background-image: url(${bg});
    background-position: center;
    background-size: cover;
    display:flex;
    min-height: 100vh;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0px 40px;
    &::before{
        position: absolute;
        content: '';
        min-height: 100vh;
        width: 100%;
        background-color: bl;
    }
    .search-container{
        margin-top: 50px;
        position:relative;
        width: 450px;
        height: 60px;
        display: flex;
        justify-content: right;
        align-items: center;
        border-radius: 10px;
        background: rgba(217, 217, 217, 0.35);
        border: 1px solid rgba(0, 0, 0, 0.29);
        @media screen and (max-width:429px){
            width: 400px;
        }
        input{
            width: 100%;
            height: 100%;
            outline:none;
            border: none;
            font-size: 20px;
            line-height: 23px;
            padding: 0px 0px 0px 30px;
            border-radius: 10px;
            background: rgba(217, 217, 217, 0.35);
            border: 1px solid rgba(0, 0, 0, 0.29);  

        }
        button{
            position:absolute;
            /* right: 20px; */
            outline: none;
            border: none;
            background-color: transparent;
            width: 60px;
            height: 100%;
            &:hover{
                background: rgba(217, 217, 217, 0.36);
            }
            &:active{
                transform: scale(0.95);
            }
        }
    }
    .weather-informaion{
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: max-content;
        width: 100%;
        gap: 50px;
        flex-wrap: wrap;
        margin-top: 40px;
        .box{
            flex: 1;
        }
        @media screen and (max-width:828px){
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        .temprature-info{
            display: flex;
            justify-content: space-around;
            align-items: center;
            background: rgba(217, 217, 217, 0.62);
            border-radius: 20px;
            height: 200px;
          
            h2{
                font-weight: 700;
                font-size: 64px;
                line-height: 75px;
            }
            .country-date{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: left;
                height: 200px;
                h3{
                    font-weight: 700;
                    font-size: 40px;
                    line-height: 47px;
                    margin-bottom: 0px;
                }
                h4{
                    margin-top: 0px;
                    font-weight: 400;
                    font-size: 20px;
                    line-height: 23px;
                }
            }
            img{
                height: 120px;
                width: 120px;
            }
        }
        .other-info{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            row-gap: 15px;
            column-gap: 10px;
            background: rgba(217, 217, 217, 0.42);
            padding: 30px 70px;
            border-radius: 15px;
            .conditions{
                
                width: 155px;
                height: 125px;
                background: rgba(217, 217, 217, 0.67);
                display: flex;
                flex-direction: column;
                border-radius: 10px;
                justify-content: space-evenly;
                align-items: center;
                h3{
                    font-weight: 700;
                    font-size: 24px;
                    text-transform: capitalize;
                    margin: 0px;
                }
                h4{
                    font-weight: 700;
                    font-size: 18px;
                    margin: 0px;
                }
            }
        }
    }
    footer{
        font-size: 16px;
        font-weight: 700;
        text-align: center;
        background: rgba(217, 217, 217, 0.26);
        width: 100%;
        height: 34px;
        margin-bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        color: goldenrod;
    }
    


`;