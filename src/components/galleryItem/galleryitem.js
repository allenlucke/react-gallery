import React, {Component} from 'react';
import './galleryItem.css';

class GalleryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        const title=this.props.title;
        const path=this.props.path;
        const description=this.props.description;
        const likes=this.props.likes;

        // onClickSwap = (event) => {}

    return(
        <div>
            <div>
                <div class="showing">
                    <img on Click={this.onClickSwap} src={path} alt="oh no"/>
                </div>
                <div class="notShowing">
                    <h4>{title}</h4>
                    <p>{description}</p>
                    <p>{likes}</p>
                </div>
            </div>
        </div>
        )
    }
}
export default GalleryItem;
