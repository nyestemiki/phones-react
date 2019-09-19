import React from 'react';
import ColorThief from 'colorthief';
import { Info, DisplayedModel } from './styles/BrandStyles';
import Details from './Details';
import ModelList from './ModelList';
import Button from './styles/ButtonStyle';

class Brand extends React.Component {
    state = {
        displayedModel: ''
    }

    // CUSTOM METHODS

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

    nextModel() {
        console.log("next model");
    }

    // LIFECYCLE METHODS

    componentDidMount() {
        const currentModel = this.props.brand.modelList[this.props.brand.covermodel];
        this.setState({
            displayedModel: currentModel
        });
    }

    // RENDER METHODS

    // Not selected brand layout (restricted render)
    notSelectedRender = () => (
        <div className="brand brand_hover" onClick={this.selectBrand} id={this.props.id}>
            <div className="brand__image">
                <img 
                    src={this.state.displayedModel.img} 
                    alt={this.state.displayedModel.brand}
                    onLoad={this.coverImageLoaded}
                />
            </div>
            <div className="brand__title">
                <h2>{this.props.id}</h2>
            </div>
        </div>
    )

    // Selected brand layout (full display)
    selectedRender = () => (
        <div className="brand selected-brand-layout" id={this.props.id}>
            <Info>
                <div className="model-name">{this.state.displayedModel.model}</div>
                <Button onClick={this.props.toggleInfo}>Learn more</Button>
            </Info>
            <DisplayedModel className="brand__image">
                <img 
                    src={this.state.displayedModel.img} 
                    alt={this.state.displayedModel.brand}
                />
            </DisplayedModel>
            <ModelList 
                className="model-list"
                status={this.props.showModels} 
                brand={this.props.brand}
                onClick={this.nextModel}
            />
            <Details 
                for={this.state.displayedModel}
                status={this.props.showDetails}    
            />
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