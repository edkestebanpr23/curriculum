import React from 'react';
import photo from "../media/img/photo.jpg";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { color } from '../data/color';
import { mainPage as dic } from "../data/language";
import { FaAngular, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiCss3, DiMysql, DiIonic, DiReact } from "react-icons/di";
import { GrGraphQl } from "react-icons/gr";
import { IoLogoIonic } from "react-icons/io";

const Main = ({ ilang }) => {
    const sizeIcons = 40;

    return (
        <div className="container" style={{ paddingTop: 50 }}>
            <br />
            <br />
            <br />
            <br />
            <div className='center'>
                <img src={photo} className="rounded-circle mx-auto d-block" alt="200" width={400}
                    style={{ borderRadius: 50 }}
                ></img>
                <h3 className='text-center mt-3'>Esteban Parra</h3>
                <div>
                    <h4 className='text-center' style={{ color: color.grad[5] }}>{dic.developer[ilang]}</h4>
                    <h5 className='text-center' style={{ color: color.grad[4] }}>23 {dic.year[ilang]}</h5>
                    <h5 className='text-center' style={{ color: color.grad[4] }}>Medellín, Colombia</h5>
                    <br></br>
                    <div className='row'>
                        <div className='col text-center'>
                            <a href='https://github.com/edkestebanpr23' target='_blank'>
                                <AiFillGithub color={color.grad[7]} size={40} />
                            </a>
                            {'          '}
                            <a href='mailto:edkestebanpr23@gmail.com'>
                                <FiMail color={color.grad[7]} size={40} />
                            </a>
                            {'          '}
                            <a href='https://www.instagram.com/estebanpr23/' target='_blank'>
                                <AiOutlineInstagram color={color.grad[7]} size={40} />
                            </a>
                        </div>
                    </div>

                </div>
                <div style={{ marginTop: 40 }}>
                    <p className='text-center' style={{ fontSize: 22 }}>
                        {dic.presentation.t1[ilang]}
                    </p>
                    <p className='row text-center' style={{ justifyContent: 'center' }}>
                        <DiReact style={S.icon} size={sizeIcons} color='#47cff8' />
                        <FaAngular style={S.icon} size={sizeIcons} color='#d60530' />
                        <IoLogoIonic style={S.icon} size={sizeIcons} color='#4889f8' />
                        <FaNodeJs style={S.icon} size={sizeIcons} color='#509a3f' />
                        <h5 style={{ color: '#2076bb', marginRight: 10, fontSize: 26, flexDirection: 'row', alignSelf: 'center' }}>Ts</h5>
                        <DiJavascript1 style={S.icon} size={sizeIcons} color='#f6d338' />
                        <FaHtml5 style={S.icon} size={sizeIcons} color='#bd4324' />
                        <DiCss3 style={S.icon} size={sizeIcons} color='#265ba3' />
                        {/* <DiPhp style={S.icon} size={sizeIcons} color='#7478ae' /> */}
                        <GrGraphQl style={S.icon} size={sizeIcons} color='#dc0095' />
                        <DiMongodb style={S.icon} size={sizeIcons} color='#4aa84e' />
                        <DiMysql style={S.icon} size={sizeIcons} color='#0a577a' />
                    </p>
                </div>
            </div>
        </div>
    );
};

const S = {
    icon: {
        marginRight: 10
    }
};

export default Main;