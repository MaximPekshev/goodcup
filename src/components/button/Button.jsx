import styles from './button.module.css';
import sprite from '../../assets/img/icons/sprites/sprite.svg';

export const Button = ({ 
    children, 
    onClick, 
    className,
    iconName
}) => {
    return (
        <button 
            className={className}
            onClick={onClick} 
        >
            <span>{children}</span>
            {iconName && 
                <>
                    <svg width="5" height="9">
                        <use xlinkHref={`${sprite}#${iconName}`}></use>
                    </svg>
                </>
            }
        </button>
    );
}