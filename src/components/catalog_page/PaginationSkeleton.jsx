
import ContentLoader from 'react-content-loader'
export const PaginationSkeleton = () => {
    return (
        <div className="pagination">
            <ContentLoader
                speed={2}
                backgroundColor="#ddddddff"
                foregroundColor="#ecebeb"
                style={{ paddingLeft: '20px', height: '35px' }}
            >
                <rect x="0" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="40" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="80" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="120" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="160" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="200" y="0" rx="6" ry="6" width="30" height="30" />
                <rect x="240" y="0" rx="6" ry="6" width="30" height="30" />
            </ContentLoader>
        </div>
    );
}