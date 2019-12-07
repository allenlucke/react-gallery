import React, {Component} from 'react';
import './galleryItem.css';
//import axios from 'axios';

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
        const id=this.props.id;

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
                <h3>{title}</h3>
                <div className={showImg} onClick={this.onClickSwap}>
                    <img src={path} alt="Oh No!!! Not Again."/>
                </div>
                <div className={showDescription} onClick={this.onClickSwap}>
                    <h4>{description}</h4>
                </div>
                <button onClick={() => this.props.putLikes({id})}>Likes: {likes}</button>
            </div>
        )
    }
}
export default GalleryItem;
