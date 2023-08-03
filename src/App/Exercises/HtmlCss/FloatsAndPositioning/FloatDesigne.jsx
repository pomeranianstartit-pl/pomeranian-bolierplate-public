import sky from './sky.png';
import snowwolf from '../../../Images/snow-wolf.png';
import './style.css';
import { Link } from 'react-router-dom';
export function FloatDesigne() {
    return (
    <>
        <div >
            <h3 > 
                <Link className='float-links' to='/Blog'>  BLOG</Link>
                <Link className='float-links' style={{marginLeft:'10px'}}to='/exercises'>  EXERCISE</Link>
            </h3>
            <p style={{ fontSize:'22px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
            </p>
            <p style={{marginLeft:'40px', fontSize:'22px'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. 
            </p>
        </div>
        <div className='blog-div'>
        <div id='first'>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
                    mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
                    donec.
                </p>
        </div>
        <div id='second'>
            <img src={snowwolf} alt="" />
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when 
                an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
        </div>
        <div id='third'>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Nibh mauris cursus
                mattis molestiea iaculis at. Dictum varius duis at consectetur lorem
                donec.{' '}
            </p>
        </div>
        <div className='cos'>
            <button id='button-zapisz-mnie'>zapisz  na później</button>
        </div>
            <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
            </p>
            <p>
                It is a long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution of
                letters, as opposed to using 'Content here, content here', making it
                look like readable English. Many desktop publishing packages and web
                page editors now use Lorem Ipsum as their default model text, and a
                search for 'lorem ipsum' will uncover many web sites still in their
                infancy. Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
            </p>
        <div style={{width: '985px', height:'200px', border:' 1px solid black', borderRadius:'8px'}}/>
    </div>
    </>
    );
}
export default FloatDesigne;
