import styled from "styled-components";
import { colors } from "../element/element.js";

export const Styles = styled.div`

.latestNews {
        background: #ffffff;
        padding   : 62px 0 70px;
        font-family: PF Din Text;
        .sec-title {
            h4 {
                color        : #272727;
                line-height: 35px;
                font-weight: bold;
                font-size: 24px;
                max-width: 100%;
                margin: 0 0 30px 0;
                text-align: left;

                @media(max-width: 575px) {
                    margin-bottom: 15px;
                    font-size: 20px;
                }
            }
        }

        .filter-btns {
            ul.filter-btn-list {
                background-color: #ffffff;
                display         : inline-block;
                border-radius : 5px;
                box-shadow   : 0 12px 25px rgba(0, 0, 0, 0.07);
                margin-bottom: 52px;

                li {
                    font-size    : 14px;
                    color        : #929292;
                    font-weight  : 500;
                    padding      : 10px 20px;
                    cursor       : pointer;
                    border-radius: 5px;

                    @media(max-width: 767px) {
                        font-size: 13px;
                        padding: 8px 12px;
                    }
                }

                li.active {
                    background: linear-gradient(90deg, #48AAB2 0%, #1D7D85 100%);
                    color     : #ffffff;
                }

                @media(max-width: 575px) {
                    margin-bottom: 35px;
                }
            }
        }

        .filter-items {
            .course-item {
                transition : all 0.2s ease;
                margin-bottom: 30px;

                .course-image {
                    width              : 100%;
                    height             : 220px;
                    background-size    : cover;
                    background-position: center;
                    background-repeat  : no-repeat;
                    border-radius : 0;
                    position: relative;

                    .author-img {
                        position: absolute;
                        left: 20px;
                        bottom: 20px;
                        top: auto;
                        img {
                            max-width: 40px;
                            border-radius : 50%;
                            margin-right: 5px;
                        }

                        .title {
                            p {
                                font-size    : 12px;
                                color        : #272727;
                                font-weight  : 500;
                                margin: 0;
                                background: #ffffff;
                                padding   : 5px 8px;
                                border-radius : 5px;
                                text-transform: capitalize;
                            }
                            p.sponsored{
                                background:#FF3636;
                                color:#fff;
                            }

                            p.recommended{
                                background:#E47B00;
                                color:#fff;
                            }

                            p.trending{
                                background:#48AAB2;
                                color:#fff;
                            }

                            span {
                                font-size  : 11px;
                                color      : #969696;
                                font-weight: 500;
                            }
                        }

                    }

                    .course-price {
                        p {
                            font-size  : 14px;
                            color      : #ffffff;
                            background : #48AAB2;
                            position: absolute;
                            right: auto;
                            bottom: auto;
                            padding: 8px 15px;
                            font-weight: 500;
                            border-radius: 0;
                            left: 0;
                        }
                    }
                }

                .course-content {
                    background: #fff;
                    padding: 20px 25px;
                    border-radius: 0;
                    border: 3px solid #F0F0F0;
                    border-top: 0px;

                    h6.heading {
                        a {
                            color        : #272727;
                            font-weight  : bold;
                            font-size    : 14px;
                            display      : inline-block;
                            margin-bottom: 5px;

                            &:hover {
                                color: #A3223F;
                            }
                        }
                    }

                    p.desc {
                        font-size     : 14px;
                        color         : #969696;
                        line-height   : 20px;
                        border-bottom : 1px solid #dddddd;
                        padding-bottom: 10px;
                        margin-bottom : 12px;
                        display: -webkit-box;
                        -webkit-line-clamp: 4;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        padding: 0 0 6px 0;
                    }

                    .course-face {

                        .duration,
                        .student {
                            p {
                                font-size: 12px;
                                color    : #444444;
                                margin   : 0px;
                                font-weight: 500;
                                i {
                                    font-size     : 14px;
                                    color         : #48AAB2;
                                    vertical-align: bottom;
                                    margin-right: 3px;
                                }
                            }
                        }

                        .rating {
                            ul {
                                li {
                                    margin-right: 0;

                                    i {
                                        font-size: 14px;
                                        color    : #fbab19;
                                    }

                                    &:last-child {
                                        font-size: 13px;
                                        color    : #969696;
                                    }
                                }
                            }
                        }
                    }
                }

                &:hover {
                    box-shadow: 0 12px 25px rgba(0, 0, 0, 0.07);
                }
            }
        }

        .viewall-btn {
            a {
                font-size     : 15px;
                color         : #fff;
                background    : linear-gradient(90deg, #48AAB2 0%, #1D7D85 100%);
                display       : inline-block;
                width         : 200px;
                height        : 48px;
                text-transform: uppercase;
                font-weight   : 500;
                text-align    : center;
                padding       : 14px;
                border-radius : 5px;
                margin-top: 20px;

                &:hover {
                    background: linear-gradient(270deg,#48AAB2 0%,#1D7D85 100%);
                }

                @media(max-width: 575px) {
                    font-size: 13px;
                    width: 170px;
                    height: 42px;
                    padding: 12px;
                    margin-top: 10px;
                }
            }
        }

        @media(max-width: 767px) {
            padding: 25px 0 40px;
        }
    }
`;