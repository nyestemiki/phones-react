import React from 'react';

class Brand extends React.Component {
    render() {
        return (
            <div className="brand brand_hover">
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