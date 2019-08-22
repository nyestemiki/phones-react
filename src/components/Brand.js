import React from 'react';

class Brand extends React.Component {
    render() {
        return (
            <div className="brand brand_hover">
                <h2>{this.props.brandname}</h2>
            </div>
        );
    }
}

export default Brand;