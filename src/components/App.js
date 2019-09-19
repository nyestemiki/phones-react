import React from 'react';
import Brand from './Brand';
import samplePhones from '../sample-phones';
import Navbar from './Navbar';
import styled from 'styled-components';

const Brands = styled.div`
    display: flex;
    width: 100vw;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

class App extends React.Component {
    state = {
        selectedBrand: '',
        showModels: true,
        showDetails: false
    }

    // Toggle Info-ModelList
    toggleInfo = () => {
        this.setState({
            showModels: !this.state.showModels,
            showDetails: !this.state.showDetails
        });
    }

    // Selects the chosen brand
    selectBrand = brand => {
        // There is already a brand selected
        if (this.state.selectedBrand !== '') {
            return;
        }

        const allBrands = document.querySelectorAll('.brand'); // Nodelist
        const allBrandsArray = Array.from(allBrands);

        setTimeout(() => {
            allBrandsArray
            .filter(div => div.id === brand.brandname)
            .forEach(div => {
                div.classList.add("selected_brand");
            });
        }, 100);

        // Removing the hover effect from all brand divs
        allBrandsArray.forEach(div => {
            div.classList.add("fade-out-brand-title");
            div.classList.remove("brand_hover");
        });
            
        // Fading out the unselected brand divs
        allBrandsArray
            .filter(div => div.id !== brand.brandname)
            .forEach(div => {
                div.classList.add("fade-out-brand");
                div.classList.add("fade-out-brand-img");
            });

        setTimeout(() => {
            allBrandsArray
                .filter(div => div.id !== brand.brandname)
                .forEach(div => {
                    div.classList.add("hide_div");
                });
        }, 700);

        setTimeout(()=> {
            // Selecting brand
            this.setState({ selectedBrand: brand.brandname });
        }, 750);
    }

    // Redirects to the main menu
    mainMenu = () => {
        // Already in main menu
        if (this.state.selectedBrand === '') {
            return;
        }

        const allBrands = document.querySelectorAll('.brand'); // Nodelist
        const allBrandsArray = Array.from(allBrands);
    
        // No brand selected | Default settings
        this.setState({ 
            selectedBrand: '',
            showModels: true,
            showDetails: false
        });

        // Fading in the hidden brand divs
        allBrandsArray
            .forEach(div => {
                div.classList.remove("hide_div");
                div.classList.remove("brand_selected");
            });

        setTimeout(() => {
            allBrandsArray
                .forEach(div => {
                    div.classList.remove("fade-out-brand");
                });
        }, 100);

        // Displaying the cover images and titles
        setTimeout(() => {
            allBrandsArray
                .forEach(div => {
                    div.classList.remove("fade-out-brand-title");
                    div.classList.remove("fade-out-brand-img");
                });
        }, 600);

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
                <Brands> {   
                    Object.keys(samplePhones)
                        .map(key => 
                            <Brand 
                                brand={samplePhones[key]} 
                                key={key}
                                id={key}
                                selectBrand={this.selectBrand}
                                isSelected={this.state.selectedBrand === key}
                                showModels={this.state.showModels}
                                showDetails={this.state.showDetails}
                                toggleInfo={this.toggleInfo}
                            />
                        ) 
                } </Brands>
            </>
        );
    }
}

export default App;