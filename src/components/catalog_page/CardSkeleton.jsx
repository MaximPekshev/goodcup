
import ContentLoader from 'react-content-loader'
import { useState, useEffect } from "react";
export const CardSkeleton = () => {
    const [contentWidth, setContentWidth] = useState(350);
    const [contentHeight, setContentHeight] = useState(417);

    useEffect(() => {
        const updateDimensions = () => {
            const width = window.innerWidth;
            if (width >= 1200) {
                setContentWidth(313);
                setContentHeight(417);
            } else if (width >= 992) {
                setContentWidth(290);
                setContentHeight(387);
            } else if (width >= 768) {
                setContentWidth(250);
                setContentHeight(333);
            } else {
                setContentWidth(237);
                setContentHeight(237);
            }
        };
        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    return (
        <div className='prod_card'>
            <div className="prod_card_header">
                <div className="prod_card_img">
                    <ContentLoader
                        speed={2}
                        viewBox={`0 0 ${contentWidth} ${contentHeight}`}
                        backgroundColor="#ddddddff"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="6" ry="6" width="100%" height="100%" />
                    </ContentLoader>
                </div>
            </div>
            <div className="prod_card_body">
                <div className="prod_card_bottom">
                    <ContentLoader
                        speed={2}
                        viewBox={`0 0 ${contentWidth} 167`}
                        backgroundColor="#ddddddff"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="0" y="0" rx="6" ry="6" width="100%" height="15" />
                        <rect x="0" y="25" rx="6" ry="6" width="100%" height="30" />
                        <rect x="0" y="90" rx="6" ry="6" width="100%" height="40" />
                    </ContentLoader>
                </div>
            </div>
        </div>
    );
}