import React from 'react';
import NavBar from "../components/NavBar";
import photo from "../media/img/photo.jpg";
import { AiFillGithub, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import { color } from '../data/color';
import { mainPage as dic } from "../data/language";


const Main = ({ ilang }) => {

    return (
        <div className="container" style={{ paddingTop: 50 }}>
            <div className='center'>
                <img src={photo} className="rounded-circle mx-auto d-block" alt="200" width={400}
                    style={{ borderRadius: 50 }}
                ></img>
                <h3 className='text-center mt-3'>Esteban Parra</h3>
                <div>
                    <h5 className='text-center'>{dic.developer[ilang]}</h5>
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
                <div>

                </div>
            </div>
        </div>
    );
}

export default Main;