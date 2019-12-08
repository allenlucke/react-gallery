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
            <div className="container">
                <h3>{title}</h3>
                <div className={showImg} onClick={this.onClickSwap}>
                    <img className="clickable" src={path} alt="Oh No!!! Not Again."/>
                </div>
                <div className={showDescription} onClick={this.onClickSwap}>
                    <h4 className="clickable">{description}</h4>
                </div>
                <button className="clickable" onClick={() => this.props.putLikes({id})}>Likes: {likes}</button>
                <div>
                    <button className="redClickable" onClick={() => this.props.deleteGalleryItem({id})}>Delete Memory</button>
                </div>
            </div>
        )
    }
}
export default GalleryItem;
