import { FC } from 'react';
import { withRouter, RouteComponentProps  } from 'react-router-dom';
import { DirectorySection } from '../directory/DirectoryMenu';
import './MenuItem.scss';

const MenuItem: FC<DirectorySection & RouteComponentProps> = (params) => {
    return (
        <div
            className={`menu-item ${params.size ?? ''}`}
            onClick={() => params.history.push(`${params.match.url}${params.linkUrl}`)}
        >
            <div
                style={{ backgroundImage: `url('${params.imageUrl}')` }}
                className="background-image"
            />
            <div className="content">
                <h1 className="title">{params.title}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);