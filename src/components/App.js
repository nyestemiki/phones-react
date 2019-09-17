import React from 'react';
import Brand from './Brand';
import samplePhones from '../sample-phones';
import Navbar from './Navbar';

class App extends React.Component {
    state = {
        selectedBrand: ''
    }

    // Selects the chosen brand
    selectBrand = brand => {
        this.setState({selectedBrand: brand.brandname});
    }

    mainMenu = () => {
        this.setState({selectedBrand: ''});
    }

    render() {
        return (
            <>
                <Navbar mainMenu={this.mainMenu}/>
                <div className="brands">
                    { 
                        !this.state.selectedBrand && (
                            Object
                                .keys(samplePhones)
                                .map(key => 
                                    <Brand 
                                        brand={samplePhones[key]} 
                                        key={key}
                                        id={key}
                                        selectBrand={this.selectBrand}
                                    />) 
                        ) ||  (
                            Object
                                .keys(samplePhones)
                                .filter(brand => brand === this.state.selectedBrand)
                                .map(key => 
                                    <Brand 
                                        brand={samplePhones[key]} 
                                        key={key}
                                        id={key}
                                        selectBrand={this.selectBrand}
                                    />) 
                        )
                    }
                </div>
            </>
        );
    }
}

export default App;