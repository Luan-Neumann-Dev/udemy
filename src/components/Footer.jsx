import React from 'react'
import styled from 'styled-components'
import { TbWorld } from "react-icons/tb";
import { footer_data } from '../utils/data';
import { other_images } from '../utils/images';


const Footer = () => {
    return (
        <FooterWrapper className='bg-gray flex'>
            <div className="container w-100">
                <div className="footer-header flex">
                    <div className="header-text text-white fw-8">
                        <p>As melhores empresas escolhem a Udemy Business para desenvolver as habilidades de carreira necessárias.</p>
                    </div>

                    <div className='header-logos flex'>
                        <img src={other_images.logo_nasdaq_light} alt="Nasdaq" height={44} style={{width: 115}}/>
                        <img src={other_images.logo_volkswagen_light} alt="Volkswagen" height={44} style={{width: 44}}/>
                        <img src={other_images.logo_box_light} alt="Box" height={44} style={{width: 67}}/>
                        <img src={other_images.logo_netapp_light} alt="NetApp" height={44} style={{width: 115}}/>
                        <img src={other_images.logo_eventbrite_light} alt="Eventbrite" height={44} style={{width: 115}}/>
                    </div>
                </div>

                <div className="footer-content grid">
                    {footer_data?.map((footer) => (
                        <div className="content-item" key={footer.id}>
                            <h4 className="text-white item-title fw-8">
                                {footer.title}
                            </h4>
                            {footer.items && (
                                <ul className="item-links">
                                    {footer.items?.map((link, index) => (
                                        <li className="link-item text-white fs-13" key={index}>
                                            {link.text}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                <div className="footer-footer text-white flex flex-between">
                    <div className='footer-left flex'>
                        <img src={other_images.logo_udemy_white} />
                        <p>&copy; 2024 Udemy, Inc.</p>
                    </div>

                    <div className='footer-cookie-settings fs-13'>
                        <p>Configurações de cookies</p>
                    </div>

                    <div className='footer-right flex'>
                        <TbWorld size={24} />
                        <p className='fw-6'>Português</p>
                    </div>
                </div>
            </div>
        </FooterWrapper>
    );
};

const FooterWrapper = styled.footer`
    margin-top: 3rem;

    .footer-header {
        padding: 1.2em 0;
        justify-content: space-between;
        border-bottom: 1px solid #ccc;
        flex-wrap: wrap;

        .header-text, .header-logos {
            flex: 1 1 50%;
            max-width: 50%;
        }

        .header-logos {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            img {
                margin: 12px 0 12px 24px;
            }
        }
    }

    .footer-content {
        row-gap: 40px;
        justify-content: center;
        text-align: center;
        padding: 4.8rem 0;
        border-bottom: 1px solid #ccc;

        .item-links {
            display: flex;
            flex-direction: column;
            gap: 3px;
            margin-top: 10px;

            li {
                cursor: pointer;
            }

            li:hover {
                text-decoration: underline;
            }
        }
    }

    .footer-footer {
        margin: 4rem 0;

        .footer-left {
            gap: 10px;

            img {
                max-width: 110px;
            }
        }

        .footer-cookie-settings {
            text-align: center;
        }
    }

    @media screen and (max-width: 768px) {
        .footer-header {
            flex-direction: column;

            .header-text, .header-logos {
                max-width: 100%;
            }

            .header-logos {
                justify-content: center;
            }
        }
    }

    @media screen and (min-width: 600px) {
        .footer-content {
            grid-template-columns: repeat(2, 1fr);
            row-gap: 40px;
            text-align: left;
        }
    }

    @media screen and (min-width: 992px) {
        .footer-content {
            grid-template-columns: repeat(4, 1fr);
        }
    }
`;


export default Footer