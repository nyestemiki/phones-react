import React from 'react';
import ColorThief from 'colorthief';

class Brand extends React.Component {
    coverImageLoaded = () => {
        this.setBackground();
    }

    // Sets background of component based on dominant colors of the cover photo
    setBackground = () => {
        const colorThief = new ColorThief();
        const brand_div = document.querySelector(`#${this.props.id}`);
        const image = brand_div.querySelector('img');
        const color = colorThief.getPalette(image);
        const gradient = `radial-gradient(circle, 
            rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}) 10%,
            rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})`;
        brand_div.style.background = gradient;
    }

    // Selects the current brand
    selectBrand = () => {
        this.props.selectBrand(this.props.brand);
    }

    // Not selected brand layout (restricted render)
    notSelectedRender = () => (
        <div className="brand brand_hover" onClick={this.selectBrand} id={this.props.id}>
            <div className="brand__image">
                <img 
                    src={this.props.brand.cover} 
                    alt={this.props.brand.covermodel}
                    onLoad={this.coverImageLoaded}
                />
            </div>
            <div className="brand__title">
                <h2>{this.props.brand.brandname}</h2>
            </div>
        </div>
    )

    // Selected brand layout (full display)
    selectedRender = () => (
        <div className="brand" id={this.props.id}>
            <div className="brand__image">
                <img 
                    src={this.props.brand.cover} 
                    alt={this.props.brand.covermodel}
                    onLoad={this.coverImageLoaded}
                />
            </div>
            <div className="brand__title">
                <h2>{this.props.brand.brandname}</h2>
            </div>
        </div>
    )

    // Renders semi or full render based on whether the brand is selected
    render() {
        if (this.props.isSelected) {
            return this.selectedRender();
        } else {
            return this.notSelectedRender();
        }
    }
}

export default Brand;