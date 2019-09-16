import React from 'react';
import ColorThief from 'colorthief';

class Brand extends React.Component {
    // Sets background of component based on dominant colors of the cover photo
    setBackground = () => {
        const colorThief = new ColorThief();
        setTimeout(() => {
            const brand_div = document.querySelector(`#${this.props.id}`);
            const image = brand_div.querySelector('img');
            const color = colorThief.getPalette(image);
            const gradient = `radial-gradient(circle, 
                rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}) 10%,
                rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`;
            brand_div.style.background = gradient;
        }, 200);
        
    }

    // Selects the current brand
    selectBrand = () => {
        this.props.selectBrand(this.props.brand);
    }

    // As soon as the component is ready
    componentDidMount() {
        // Set the background
        this.setBackground();
    }

    render() {
        return (
            <div className="brand brand_hover" onClick={this.selectBrand} id={this.props.id}>
                <div className="brand__image">
                    <img 
                        src={this.props.brand.cover} 
                        alt={this.props.brand.covermodel}
                    />
                </div>
                <div className="brand__title">
                    <h2>{this.props.brand.brandname}</h2>
                </div>
            </div>
        );
    }
}

export default Brand;