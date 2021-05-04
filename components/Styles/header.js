import styled from "styled-components";
import { colors } from "../element/element.js";

export const Styles = styled.div`
.hidden{
    display:none;
}
    .top-bar {
        background: ${colors.bgwhite};
        box-shadow: 0px 0px 10px #ccc;
        font-family: PF Din Text;
        .bar-left {
            ul {
                li {
                    font-size  : 13px;
                    color      : #aaaaaa;
                    padding    : 10px 15px;
                    margin     : 0;
                    display    : inline-block;

                    a {
                        font-size: 13px;
                        color    : #aaaaaa;

                        &:hover {
                            color: #48AAB2;
                        }
                    }

                    i {
                        font-size     : 20px;
                        color         : #48AAB2;
                        vertical-align: bottom;
                        margin-right  : 5px;
                    }

                    @media(max-width: 991px) {
                        border : none;
                        padding: 10px 0px;
                        &:last-child {
                            display : none;
                        }
                    }
                }
            }
        }

        .bar-right {
            ul.bar-social {
                padding     : 10px 15px;

                li {
                    a {
                        font-size: 12px;
                        color: #48AAB2;
                        margin-right: 2px;
                        background: #F0F0F0;
                        border-radius: 4px;
                        padding: 8px 12px;

                        &:hover {
                            color: #ffffff;
                            background: #48AAB2;
                        }
                    }
                    &:last-child {
                        border-right:1px solid ${colors.border2};
                        padding:0 8px 0 0;
    
                        a {
                            margin-right: 0;
                        }
                    }
                }

                @media(max-width: 991px) {
                    display : none;
                }
            }

            ul.bar-lang {
                padding     : 10px 15px;
                padding-right: 0;
                li {
                    border-right:1px solid ${colors.border2};
                    padding:0 8px 0 0;
                    .dropdown {
                        a.dropdown-toggle {
                            font-size: 13px;
                            color    : #aaaaaa;

                            img {
                                margin-right: 5px;
                                max-width   : 21px;
                            }

                            i {
                                font-size  : 12px;
                                margin-left: 3px;
                            }

                            &::after {
                                display: none;
                            }

                            &:hover {
                                cursor: pointer;
                                color : #48AAB2;
                            }
                        }

                        ul.dropdown-menu {
                            padding: 0;
                            margin : 0;
                            border : none;
                            background: ${colors.bgwhite};;
                            border-radius: 5px;
                            top       : 68% !important;
                            left      : -16px !important;
                            box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);

                            li {
                                display      : block;
                                background: transparent;
                                border-bottom: 1px solid #48AAB2;
                                padding      : 7px 15px;
                                color        : #48AAB2;
                                cursor       : pointer;
                                overflow    : hidden;

                                img {
                                    max-width   : 21px;
                                    margin-right: 5px;
                                }

                                &:hover {
                                    color      : #182B49;
                                    font-weight: 500;
                                }

                                &:last-child {
                                    border-bottom: none;
                                }
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    border-right : none;
                    padding: 10px 0px;
                }
            }

            ul.bar-login {
                li {
                    margin      : 0;
                    display     : inline-block;
                    .login{
                        background:#48AAB2;
                        color    : #ffffff;
                        &:hover{
                            background:transparent;
                            color    : #48AAB2;
                        }
                    }
                    .signup{
                        border:1px solid #48AAB2;
                        color    : #48AAB2;
                        &:hover{
                            background:#48AAB2;
                            color    : #ffffff;
                        }
                    }
                    a {
                        font-size: 12px;
                        border: 1px solid  #48AAB2; 
                        padding: 5px 15px;
                        border-radius: 4px;
                        margin: 4px 0 0 5px;
                        display: inline-block;

                        i {
                            font-size     : 20px;
                            color         : #48AAB2;
                            vertical-align: bottom;
                            margin-right  : 5px;
                        }

                        &:hover {
                            color: #48AAB2;
                        }
                    }

                    @media(max-width: 991px) {
                        border-right : none;
                        padding-right: 0;
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .banner-area{
        padding: 22px 0;
        img{
            width:100%;
        }
    }

    .logo-area {
        padding: 22px 0;
        font-family: PF Din Text;
        .logo {
            a {
                img {
                    max-width: 170px;
                    @media(max-width: 991px) {
                        max-width : 100%;
                        margin-top: 4px;
                    }
                }
            }
        }

        .logo-contact-box {
            .emcontact-box {
                margin-right: 45px;

                .box-icon {
                    background  : #48AAB2;
                    height      : 21px;
                    text-align  : center;
                    margin-top  : 10px;
                    margin-right: 12px;
                    position    : relative;

                    i {
                        position  : relative;
                        z-index   : 111;
                        font-size : 22px;
                        color     : #ffffff;
                        width     : 36px;
                        display   : inline-block;
                        margin-top: -5px;
                    }

                    &:before {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : transparent;
                        border-right-color : transparent;
                        border-bottom-color: #48AAB2;
                        border-left-color  : transparent;
                        top                : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    &:after {
                        content            : "";
                        position           : absolute;
                        border-width       : 10px 18px;
                        border-style       : solid;
                        border-top-color   : #48AAB2;
                        border-right-color : transparent;
                        border-bottom-color: transparent;
                        border-left-color  : transparent;
                        bottom             : -20px;
                        left               : 0;
                        z-index            : 1;
                    }

                    @media(max-width: 991px) {
                        display : none;
                    }
                }

                .box-content {
                    p {
                        font-size    : 13px;
                        color        : #969696;
                        margin-bottom: -2px;
                    }

                    span {
                        font-size  : 17px;
                        color      : #272727;
                        font-weight: 500;
                    }
                }

                @media(max-width: 991px) {
                    margin-right : 20px;
                }
            }

            .apply-btn {
                margin-left: 40px;

                a {
                    font-size     : 13px;
                    color         : #ffffff;
                    background    : "linear-gradient(90deg, #11B67A 0%, #009444 100%)";
                    display       : inline-block;
                    width         : 110px;
                    height        : 40px;
                    text-align    : center;
                    text-transform: uppercase;
                    font-weight   : 500;
                    padding       : 11px;
                    border-radius : 0 5px 5px 0;
                    position: relative;

                    i {
                        position : absolute;
                        font-size: 20px;
                        left     : -40px;
                        top      : 0;
                        padding  : 10px;
                        width    : 40px;
                        height   : 100%;
                        border-radius : 5px 0 0 5px;
                        background-color: #00a76a;
                    }

                    &:hover {
                        background: "linear-gradient(90deg, #009444 0%, #11B67A 100%)";
                    }
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }

    .main-menu {
        .main-menu-box {
            position: relative;
            z-index : 111;

            .menu-box {
                width     : 100%;
                padding   : 0 30px;

                ul.nav.menu-nav {
                    float: right;
                    li.nav-item {
                        position: relative;

                        a.nav-link {
                            font-size     : 14px;
                            color         : #000000;
                            text-transform: capitalize;
                            font-weight   : 500;
                            padding       : 18px 25px 15px 0;

                            i {
                                font-size: 12px;
                            }

                            &:after {
                                content: none;
                            }

                            &:hover {
                                color: #272727;
                            }

                            @media(max-width: 991px) {
                                padding-right : 10px;
                            }
                        }
                        &:last-child a{
                            padding:18px 0 15px 0;
                        }

                        ul.dropdown {
                            position  : absolute;
                            left      : -10px;
                            top       : 100%;
                            min-width : 190px;
                            background: #fff;
                            text-align: left;
                            padding   : 0;
                            border-radius : 0 0 5px 5px;
                            transition : 0.2s ease;
                            opacity         : 0;
                            transform       : scaleY(0);
                            visibility      : hidden;
                            z-index         : 999;
                            transform-origin: center top 0;

                            li.nav-item {
                                position: relative;

                                a.nav-link {
                                    font-size     : 13px;
                                    color         : #48AAB2;
                                    padding       : 10px 20px;
                                    text-transform: capitalize;
                                    margin-right  : 0;
                                    font-weight   : 400;
                                    border-bottom : 1px solid #dddddd;

                                    &:hover {
                                        color: #A3223F;

                                        i {
                                            color: #fff;
                                        }
                                    }

                                    i {
                                        float     : right;
                                        margin-top: 4px;
                                    }
                                }

                                &:last-child {
                                    margin-left: 0;

                                    a.nav-link {
                                        border-bottom: none;
                                    }
                                }

                                ul.dropdown2 {
                                    position  : absolute;
                                    top       : 0;
                                    left      : 100%;
                                    min-width : 180px;
                                    background: #fff;
                                    border    : 1px solid #48AAB2;
                                    transition : 0.2s ease;
                                    opacity         : 0;
                                    transform       : scaleY(0);
                                    visibility      : hidden;
                                    z-index         : 999;
                                    transform-origin: center top 0;
                                }

                                &:hover {
                                    ul.dropdown2 {
                                        opacity   : 1;
                                        transform : scaleY(1);
                                        visibility: visible;
                                    }
                                }
                            }
                        }

                        &:hover {
                            ul.dropdown {
                                opacity   : 1;
                                transform : scaleY(1);
                                visibility: visible;
                            }
                        }
                    }
                }

                ul.search-cart-bar {
                    li.search-box {
                        i.close-btn {
                            position : absolute;
                            top      : 25px;
                            right    : -12px;
                            font-size: 26px;
                            color    : #11B67A;
                            cursor   : pointer;
                        }
                    }

                    li.cart-box {
                        a.nav-cart {
                            padding: 18px 0 0 10px;

                            i {
                                font-size: 20px;
                                color    : #48AAB2;
                                line-height: 17px;
                            }
                        }
                    }
                }

                @media(max-width: 991px) {
                    padding: 0 20px;
                }
            }
        }

        @media(max-width: 767px) {
            display : none;
        }
    }
    .search-section{
        font-family: PF Din Text;
        background:${colors.bg3};
        padding:22px 0;
        box-shadow: 0px 0px 6px 0px #f1f0f0;
        .inline-form{
            display: flex;
            justify-content: space-between;
            @media(max-width: 767px) {
                display: inline-block;
                width:100%;
                text-align: center;
            }
            .form-control{
                margin:0 14px 0 0;
                font-size:14px;
                color:#aaaaaa;
                @media(max-width: 767px) {
                    width: 48%;
                    margin: 5px 2px;
                    float: left;
                }
            }
            .btn{
                background:#48AAB2;
                border:1px solid #48AAB2;
                padding:0 30px;
                @media(max-width: 767px) {
                    padding:10px 30px;
                    margin-top:15px;
                }
            }
        }
    }
`;