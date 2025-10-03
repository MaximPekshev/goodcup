import AboutVideoPosterImg from '../../materials/img/about_page/about_video_poster.jpg'
import Video from '../../materials/img/about_page/video.mp4'
import sprite from '../../assets/img/icons/sprites/sprite.svg';
export const Production = () => {
    return (
        <section>
            <div className="container">
                <div className="about_video">
                    <div className="about_video_title">
                        <h2>Наше производство</h2>
                        <p>Многоступенчатый контроль качества гарантирует отсутствие протечек, а гибкая система ценообразования позволяет предложить минимальную стоимость продукции при стабильно высоком качестве.</p>
                    </div>
                    <div className="video_block">
                        <div className="custom_play">
                            <svg width="14" height="14">
                                <use xlinkHref={`${sprite}#play`}></use>
                            </svg>
                        </div>
                        <video className="video controls center" preload="metadata" loading="lazy" poster={AboutVideoPosterImg}>
                            <source src={Video} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
}