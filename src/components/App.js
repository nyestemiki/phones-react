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
        const allBrands = document.querySelectorAll('.brand'); // Nodelist
        const allBrandsArray = Array.from(allBrands);
        
        // Selecting brand
        this.setState({ selectedBrand: brand.brandname });

        // Removing the hover effect from all brand divs
        allBrandsArray.forEach(div => {
            div.classList.remove("brand_hover");
            div.classList.add("fade-out-brand-title");
        });

        // Fading out the unselected brand divs
        allBrandsArray
            .filter(div => div.id !== brand.brandname)
            .forEach(div => {
                div.classList.add("fade-out-brand");
                div.classList.add("fade-out-brand-img");
            });
    }

    // Redirects to the main menu
    mainMenu = () => {
        const allBrands = document.querySelectorAll('.brand'); // Nodelist
        const allBrandsArray = Array.from(allBrands);
    
        // No brand selected
        this.setState({ selectedBrand: '' });

        // Fading in the hidden brand divs
        allBrandsArray
            .forEach(div => {
                div.classList.remove("fade-out-brand");
            });

        // Displaying the cover images and titles
        setTimeout(() => {
            allBrandsArray
                .forEach(div => {
                    div.classList.remove("fade-out-brand-img");
                    div.classList.remove("fade-out-brand-title");
                });
        }, 500);

        // Reapplying the hover effect
        setTimeout(() => {
            allBrandsArray
                .forEach(div => {
                    div.classList.add("brand_hover");
                });
        }, 760); // 750 ms transition
    }

    render() {
        return (
            <>
                <Navbar mainMenu={this.mainMenu}/>
                <div className="brands"> {   
                    Object.keys(samplePhones)
                        .map(key => 
                            <Brand 
                                brand={samplePhones[key]} 
                                key={key}
                                id={key}
                                selectBrand={this.selectBrand}
                                isSelected={this.state.selectedBrand === key}
                            />
                        ) 
                } </div>
            </>
        );
    }
}

export default App;