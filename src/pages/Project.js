import React from 'react';
import NavBar from "../components/NavBar";
import gifHV4a from "../media/video/HV4_0_30.gif";
import gifHV4b from "../media/video/HV4_30_60.gif";
import gifHV5a from "../media/video/HV5A.gif";
import gifHV5b from "../media/video/HV5B.gif";
import gifBible from "../media/video/Bible.gif";
import { color } from '../data/color';
import { projects as dic } from "../data/language";
import { FaAngular, FaNodeJs, FaHtml5 } from "react-icons/fa";
import { DiMongodb, DiJavascript1, DiCss3, DiMysql, DiPhp } from "react-icons/di";

const LanguageTag = ({ Icon, text }) => {
    return (
        <div className="row">
            <div className='col'>
                {
                    Icon ? (
                        <Icon />
                    ) : (<></>)
                }
            </div>
            <div className='col'>
                <h4>{text}</h4>
            </div>
            <div className='col'>
            </div>
        </div>
    );
}


const Project = ({ ilang }) => {
    const sizeIcons = 30;
    return (
        <div className='container'>
            <br />
            <br />
            <br />
            <br />
            <div className=''>
                <h2 className='text-center mt-5 mb-3'>Himnario Lldm</h2>
                <p className='mb-4' style={{ color: color.grad[8], fontSize: 20 }}>
                    {dic.himPro.t1[ilang]} {dic.himPro.t2[ilang]}
                    <a href='https://play.google.com/store/apps/details?id=com.honneros.himnario&hl=en' target='_blank'> Play Store </a>
                    {dic.himPro.t3[ilang]}
                    <a href='https://apps.apple.com/us/app/himnario-lldm-ingl%C3%A9s-espa%C3%B1ol/id1271146855' target='_blank'> App Store </a>
                    {dic.himPro.t4[ilang]}
                </p>



                <div className='row'>
                    <div className='col'>
                        <img src={gifHV5a} className="rounded mx-auto d-block border" width={400} />
                    </div>
                    <div className='col'>
                        <img src={gifHV5b} className="rounded mx-auto d-block border" width={400} />
                    </div>
                </div>
            </div>

            <div className='mt-4 pt-3 '>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h4 className='text-center'>Frontend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>Backend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>{dic.db[ilang]}</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <LanguageTag Icon={() => <FaAngular size={sizeIcons} color='#d60530' />} text='Angular' />
                                <LanguageTag text='TypeScript' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <FaNodeJs size={sizeIcons} color='#509a3f' />} text='NodeJS' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <DiMongodb size={sizeIcons} color='#4aa84e' />} text='MongoDB' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br />
            <br />
            <br />
            <hr />
            <br />

            <div className=''>
                <h2 className='text-center mt-5 '>Himnario Lldm
                    <br />
                    <h4><small><mark>{dic.discontinued[ilang]}</mark></small></h4>
                </h2>
                <br />
                <p className='mb-4' style={{ color: color.grad[8], fontSize: 20 }}>
                    {dic.him.t1[ilang]}
                </p>
                <div className='row'>
                    <div className='col'>
                        <img src={gifHV4a} className="rounded mx-auto d-block border" width={400} />
                    </div>
                    <div className='col'>
                        <img src={gifHV4b} className="rounded mx-auto d-block border" width={400} />
                    </div>
                </div>
            </div>

            <div className='mt-4 pt-3 mb-5 pb-5'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h4 className='text-center'>Frontend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>Backend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>{dic.db[ilang]}</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <LanguageTag Icon={() => <DiJavascript1 size={sizeIcons} color='#f6d338' />} text='JavaScript' />
                                <LanguageTag Icon={() => <FaHtml5 size={sizeIcons} color='#bd4324' />} text='HTML5' />
                                <LanguageTag Icon={() => <DiCss3 size={sizeIcons} color='#265ba3' />} text='CSS3' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <DiPhp size={sizeIcons} color='#7478ae' />} text='PHP' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <DiMysql size={sizeIcons} color='#0a577a' />} text='MySQL' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <br />
            <hr />
            <br />

            <div className=''>
                <h2 className='text-center mt-5 '>{dic.bible[ilang]} </h2>
                <br />

                <div className='row'>
                    <div className='col'>
                        <img src={gifBible} className="rounded mx-auto d-block border" width={400} style={{ borderWidth: 2, borderColor: 'red' }} />
                    </div>
                    <div className='col'>
                        <p className='mb-4' style={{ color: color.grad[8], fontSize: 20 }}>
                            {dic.bib.t1[ilang]}
                            <a href='https://play.google.com/store/apps/details?id=com.honneros.biblia&hl=en' target='_blank'> Play Store </a>
                            {dic.bib.t2[ilang]}
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-4 pt-3 mb-5 pb-5'>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">
                                <h4 className='text-center'>Frontend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>Backend</h4>
                            </th>
                            <th scope="col">
                                <h4 className='text-center'>{dic.db[ilang]}</h4>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <LanguageTag Icon={() => <DiJavascript1 size={sizeIcons} color='#f6d338' />} text='JavaScript' />
                                <LanguageTag Icon={() => <FaHtml5 size={sizeIcons} color='#bd4324' />} text='HTML5' />
                                <LanguageTag Icon={() => <DiCss3 size={sizeIcons} color='#265ba3' />} text='CSS3' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <DiPhp size={sizeIcons} color='#7478ae' />} text='PHP' />
                            </td>
                            <td>
                                <LanguageTag Icon={() => <DiMysql size={sizeIcons} color='#0a577a' />} text='MySQL' />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const S = {

};

export default Project;