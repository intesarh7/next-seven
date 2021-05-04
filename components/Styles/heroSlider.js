import styled from "styled-components";
import { colors } from "../element/element.js";

export const Styles = styled.div`
    .hero-slider-area {
        font-family: PF Din Text;
        .swiper-container {
            position: relative;

            .swiper-wrapper {
                .swiper-slide.slider-item {
                    position: relative;
                    .image-container {
                        width   : 100%;
                        display : block;
                        overflow: hidden;
                        position: relative;
                        height  : 700px;

                        img.slider-image {
                            width     : auto;
                            margin-top: 0;
                            transition : all 6000ms linear;
                            transform: scale(1);
                        }

                        @media(max-width: 767px) {
                            height  : 450px;
                        }

                        @media(max-width: 575px) {
                            height  : 360px;
                        }
                    }

                    .slider-table {
                        display : table;
                        width   : 100%;
                        height  : 100%;
                        position: absolute;
                        top     : 0;
                        left    : 0;
                        z-index : 9999;

                        .slider-tablecell {
                            display       : table-cell;
                            vertical-align: middle;

                            .slider-box {
                                .slider-title {
                                    p {
                                        font-size     : 18px;
                                        color         : #dddddd;
                                        text-transform: uppercase;
                                        margin-bottom : 8px;
                                    }
                                    ul {
                                        margin : 0 0 0 15px;
                                        padding : 0px;
                                        li {
                                            color: #48AAB2;
                                            display: inline-block;
                                            list-style: decimal;
                                            font-size: 18px;
                                            font-weight: bold;
                                            margin: 0 20px 0 0;
                                            position: relative;
                                            @media(max-width: 768px) {
                                                font-size: 14px;
                                            }
                                            &:before{
                                                content: "\f111";
                                                color: #48AAB2;
                                                position: absolute;
                                                top: 6px;
                                                font-family: "Font Awesome 5 Free";
                                                font-size: 8px;
                                                left: -14px;
                                            }
                                        }
                                    }
                                }

                                .slider-desc {
                                    h1 {
                                        font-size    : 36px;
                                        color        : #ffffff;
                                        max-width    : 1040px;
                                        margin-bottom: 32px;
                                        font-weight  : bold;

                                        @media(max-width: 768px) {
                                            font-size    : 26px;
                                            font-weight  : 500;
                                        }
                                    }
                                }
                                .slider-desc-info {
                                    p {
                                        font-size    : 16px;
                                        color        : #ffffff;
                                        max-width    : 700px;
                                        margin-bottom: 32px;
                                        font-weight  : normal;

                                        @media(max-width: 768px) {
                                            font-size    : 26px;
                                            font-weight  : normal;
                                        }
                                    }
                                }

                                .slider-btn {
                                    a.slider-btn1 {
                                        font-size : 14px;
                                        color     : #fff;
                                        background: linear-gradient(90deg, #48AAB2 0%, #1D7D85 100%);
                                        display   : inline-block;
                                        width     : 145px;
                                        height    : 40px;
                                        text-align: center;
                                        padding   : 11px;
                                        border-radius : 5px;

                                        &:hover {
                                            background: linear-gradient(90deg, #48AAB2 0%, #1D7D85 100%);
                                        }
                                    }

                                    a.slider-btn2 {
                                        font-size : 14px;
                                        color     : #fff;
                                        display   : inline-block;
                                        background: #182B49;
                                        width     : 145px;
                                        height    : 40px;
                                        text-align: center;
                                        padding   : 11px;
                                        border-radius : 5px;
                                        margin-left: 15px;

                                        &:hover {
                                            background: linear-gradient(90deg, #11B67A 0%, #009444 100%);
                                            border    : none;
                                            color     : #ffffff;
                                        }
                                    }
                                }
                                @media(max-width: 575px) {
                                    text-align  : center !important;
                                }
                            }

                            .slider-box2 {
                                .slider-desc {
                                    h1 {
                                        margin-left: auto;
                                    }
                                }
                                .slider-desc-info {
                                    p {
                                        font-size    : 16px;
                                        color        : #ffffff;
                                        max-width    : 700px;
                                        margin-bottom: 32px;
                                        font-weight  : normal;
                                        text-align: right;
                                        display: inline-block;
                                        width: 100%;

                                        @media(max-width: 767px) {
                                            font-size    : 26px;
                                            font-weight  : normal;
                                        }
                                    }
                                }
                            }
                        }
                    }
                    &:after{
                        content: '';
                        background: rgb(0 0 0 / 65%);
                        position: absolute;
                        left: 0;
                        right: 0;
                        top: 0;
                        bottom: 0;
                    }
                }

                .swiper-slide.slider-item.swiper-slide-visible.swiper-slide-active {
                    .image-container {
                        img.slider-image {
                            transform: scale(1.15);
                            @media(max-width: 767px) {
                                height:100%;
                                width:100%;
                                object-fit: contain;
                            }
                        }
                    }

                    .slider-table {
                        .slider-tablecell {
                            .slider-title {
                                animation-name     : fadeInDown;
                                animation-duration : 1s;
                                animation-delay    : 0.2s;
                                animation-fill-mode: both;
                            }

                            .slider-desc {
                                animation-name     : fadeInUp;
                                animation-duration : 1.5s;
                                animation-delay    : 0.2s;
                                animation-fill-mode: both;
                            }

                            .slider-btn {
                                animation-name     : fadeInUp;
                                animation-duration : 2s;
                                animation-delay    : 0.2s;
                                animation-fill-mode: both;
                            }
                        }
                    }
                }
            }

            .swiper-btn {
                position   : absolute;
                top        : 50%;
                left       : 40px;
                width      : 45px;
                height     : 45px;
                font-size  : 24px;
                color      : #48AAB2;
                text-align : center;
                padding-top: 5px;
                border-radius : 5px;
                transition : all 0.3s ease;
                margin-top: -35px;
                z-index   : 111;

                i {}

                &:hover {
                    background: linear-gradient(90deg, #48AAB2 0%, #1D7D85 100%);
                    color     : #ffffff;
                }
            }

            .swiper-btn.slider-button-next {
                left : inherit;
                right: 40px;
            }
        }
    }
`;