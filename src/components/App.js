import React from 'react';
import Brand from './Brand';
import samplePhones from '../sample-phones';

class App extends React.Component {
    // Selects the chosen brand
    selectBrand(brand) {
        console.log(brand.brandname);
    }

    render() {
        return (
            <div className="brands">
                { Object
                    .keys(samplePhones)
                    .map(key => 
                        <Brand 
                            brand={samplePhones[key]} 
                            key={key}
                            id={key}
                            selectBrand={this.selectBrand}
                        />) 
                }
            </div>
        );
    }
}

export default App;