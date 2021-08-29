import '../../styles/components-css/gallery/homegallery.css';

function HomeGallery() {
    return (
        <div className="homegallery">
            <div className="hgallery-row">
                <div className="hgallery-column">
                    <div className="hgallery-content">
                        <img 
                        src="image/img1.jpg" 
                        alt="Iamge" 
                        className="hgallery-img" 
                        />
                        <h3>Gallery 1</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem odit corporis alias reprehenderit, possimus commodi nam quas ea fugit dolorem inventore quam voluptatum placeat earum enim culpa vel. Illo!</span>
                    </div>
                </div>
                <div className="hgallery-column">
                    <div className="hgallery-content">
                        <img 
                        src="image/img2.jpg" 
                        alt="Iamge" 
                        className="hgallery-img" 
                        style={{width:'100%'}}
                        />
                        <h3>Gallery 1</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem odit corporis alias reprehenderit, possimus commodi nam quas ea fugit dolorem inventore quam voluptatum placeat earum enim culpa vel. Illo!</span>
                    </div>
                </div>
                <div className="hgallery-column">
                    <div className="hgallery-content">
                        <img 
                        src="image/img3.jpg" 
                        alt="Iamge" 
                        className="hgallery-img" 
                        style={{width:'100%'}}
                        />
                        <h3>Gallery 1</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem odit corporis alias reprehenderit, possimus commodi nam quas ea fugit dolorem inventore quam voluptatum placeat earum enim culpa vel. Illo!</span>
                    </div>
                </div>
                <div className="hgallery-column">
                    <div className="hgallery-content">
                        <img 
                        src="image/img4.jpg" 
                        alt="Iamge" 
                        className="hgallery-img" 
                        style={{width:'100%'}}
                        />
                        <h3>Gallery 1</h3>
                        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius quidem odit corporis alias reprehenderit, possimus commodi nam quas ea fugit dolorem inventore quam voluptatum placeat earum enim culpa vel. Illo!</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeGallery
