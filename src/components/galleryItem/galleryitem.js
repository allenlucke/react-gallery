import React, {Component} from 'react';
import './galleryItem.css';

class GalleryItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowing: true,
        }
    }
    onClickSwap = (event) => {
        this.setState({
            isShowing: !this.state.isShowing,
        })
    }

    render() {
        const title=this.props.title;
        const path=this.props.path;
        const description=this.props.description;
        const likes=this.props.likes;

        let showImg;
        let showDescription

        if(this.state.isShowing) {
            showImg = 'showing';
            showDescription = 'notShowing'
        }else if(!this.state.isShowing) {
            showImg = 'notShowing';
            showDescription = 'showing'
        }


    return(
        <div>
            <div>
                <div className={showImg} onClick={this.onClickSwap}>
                    <img src={path} alt="oh no"/>
                </div>
                <div className={showDescription} onClick={this.onClickSwap}>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
                <p>{likes}</p>
            </div>
        </div>
        )
    }
}
export default GalleryItem;
