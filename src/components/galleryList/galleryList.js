import React, {Component} from 'react';

class GalleryList extends Component {
    render() {
        const galleryListData = this.props.list.map((item, index) => {
            return (
            <img src={item.path}  key={index} alt="not again"/>
            )
        })
        return (
            <div>{galleryListData}</div>
        )
    }
}

export default GalleryList;