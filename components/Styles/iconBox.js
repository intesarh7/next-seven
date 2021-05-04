import styled from "styled-components";
import { colors } from "../element/element.js";

export const Styles = styled.div`
    .icon-box-area {
        padding-bottom: 80px;
        position: relative;
        min-height: 300px;
        font-family: PF Din Text;
        .icon-boxs{
            position  : absolute;
            top       : -50px;
            left      : 0;
            right     : 0;
            margin    : 0 auto;
            z-index   : 2;
            @media(max-width: 767px) {
                position  : relative;
                top:0;
            }
        }

        .box5.full-icon-box{
            .icon-box{
                background: url(assets/images/box-5.png);
                padding: 35px 25px;
                background-repeat: no-repeat;
                background-size: cover;
                h6, p{
                    color:#fff!important;
                }
                .box5{
                    display:none;
                }
            }
        }
        .full-icon-box {
            position: relative;
            margin:0 0 30px 0;
            .icon-box {
                width     : 100%;
                background: #fff;
                padding   : 25px;
                z-index   : 9;
                box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                border-radius : 5px;

                .box-icon {
                    background  : #182B49;
                    text-align: center;
                    margin-right: 20px;
                    position: relative;
                    padding: 20px;
                    border-radius: 8px;

                    i {
                        font-size : 34px;
                        color     : #ffffff;
                        display   : inline-block;
                        position  : relative;
                        z-index   : 111;
                        
                        @media(max-width: 991px) {
                            font-size: 24px;
                        }
                        
                        @media(max-width: 767px) {
                            font-size: 34px;
                        }
                    }


                    @media(max-width: 991px) {
                        margin-right: 10px;
                    }

                    @media(max-width: 767px) {
                        margin-right: 20px;
                    }
                }

                .box-icon.box1 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }

                .box-icon.box2 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }

                .box-icon.box3 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }
                .box-icon.box4 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }
                .box-icon.box5 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }
                .box-icon.box6 {
                    background: #48AAB2;

                    &:before {
                        border-bottom-color: #48AAB2;
                    }

                    &:after {
                        border-top-color: #48AAB2;
                    }
                }

                .box-title {

                    h6 {
                        color         : #272727;
                        text-transform: capitalize;
                        font-weight   : 500;
                        margin-bottom : 6px;
                        font-size: 18px;

                        @media(max-width: 991px) {
                            font-size: 14px;
                            letter-spacing: 0;
                        }

                        @media(max-width: 767px) {
                            font-size: 16px;
                            letter-spacing: 0.3px;
                        }
                    }

                    p {
                        font-size: 14px;
                        color    : #969696;

                        @media(max-width: 991px) {
                            font-size: 13px;
                        }

                        @media(max-width: 767px) {
                            font-size: 14px;
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 25px 10px 8px;
                }

                @media(max-width: 767px) {
                    padding: 35px 20px;
                    position: unset;
                    margin-bottom: 25px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 40px 0 0;
        }
    }
`;