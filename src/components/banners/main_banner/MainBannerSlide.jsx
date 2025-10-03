import { Button } from "../../button/Button";
export const MainBannerSlide = ({ title, description, buttonText, imgSrc }) => {    
    return (
        <div className="main_banner_slide" style={{ width: '100%' }}>
            <a className='main_banner_link' href='#' style={{ borderRadius: '25px' }}>
                <div className="main_banner_text">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <Button 
                        className="btn_main"
                        children={buttonText}
                        onClick={() => console.log('Button clicked!')} 
                    />
                </div>
                <img src={imgSrc} alt="" />
            </a>
        </div>
    );
}
