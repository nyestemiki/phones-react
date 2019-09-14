import React from 'react';

class Brand extends React.Component {
    render() {
        return (
            <div className="brand brand_hover">
                <img 
                    src={this.props.brand.cover} 
                    alt={this.props.brand.covermodel}
                />
                <h2>{this.props.brand.brandname}</h2>
            </div>
        );
    }
}

export default Brand;