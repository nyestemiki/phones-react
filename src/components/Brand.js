import React from 'react';

class Brand extends React.Component {
    setBackground = () => {
        console.log("Should adapt background with color thief");
        // let colorThief = new ColorThief();
        // let image = this.querySelector('img');
        // let color = colorThief.getPalette(image);
        // let gradient = `radial-gradient(circle, 
        //     rgb(${color[1][0]}, ${color[1][1]}, ${color[1][2]}) 10%,
        //     rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]})
        // `;
        // this.style.background = gradient;
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
            <div className="brand brand_hover" onClick={this.selectBrand}>
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