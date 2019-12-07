import React, {Component} from 'react';
import GalleryItem from '../galleryItem/galleryItem'

class GalleryList extends Component {
    render() {
        const galleryListData = this.props.list.map((item, index) => {
            return (
                <div key={index}>
                <GalleryItem
                    id={item.id}
                    title={item.title}
                    path={item.path}
                    description={item.description}
                    likes={item.likes}/>
                </div>
            )
        })
        return (
        <div>{galleryListData}</div>
        )
    }
}

export default GalleryList;