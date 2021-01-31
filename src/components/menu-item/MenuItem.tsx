import { DirectorySection } from '../directory/DirectoryMenu';
import './MenuItem.scss';

export const MenuItem = ({ title, imageUrl, size }: DirectorySection) => {
    return (
        <div style={{ backgroundImage: `url('${imageUrl}')` }} className={`menu-item ${size ?? ''}`}>
            <div className="content">
                <h1 className="title">{title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};