import React from 'react';
import ColorThief from 'colorthief';
import { Info, DisplayedModel } from './styles/BrandStyles';
import Details from './Details';
import ModelList from './ModelList';
import Button from './styles/ButtonStyle';
import Reanimate from '../helpers/Reanimate';
import Model from './Model';

class Brand extends React.Component {
    state = {

        // Will contain the displayed model object | Default: ''
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

        // Applying the gradient from the dominant colors of the displayed models' image
        brand_div.style.background = gradient;
    }

    // Selects the current brand
    selectBrand = () => {
        this.props.selectBrand(this.props.brand);
    }

    // Selects next model from the models' list
    //      Updates the displayed model to the given argument
    nextModel = model => {
        if (model !== "undefined") {
            this.setState({
                displayedModel: model.props
            });
        } else {
            this.setState({
                // Set covermodel if no model-argument given
                displayedModel: this.props.brand.covermodel
            });
        }

        // Reanimate animations when next model is selected
        this.toggleAnimation();

        // Adapting background to the newly selected model
        setTimeout(() => {
            this.setBackground();
        }, 150);
    }

    // Replaying the animations of the brand container
    toggleAnimation = () => {
        // Replaying the animation of the info area of the container
        const infoArea = document.querySelector('.info__area');
        Reanimate(infoArea);

        // Replaying the animation of the displayed model
        const modelDisplayed = document.querySelector('.model__displayed');
        Reanimate(modelDisplayed);

        // Replaying the animation of the models' list
        const modelList = document.querySelector('.model__list');
        Reanimate(modelList);
    }

    // LIFECYCLE METHODS

    // As soon as the component is mounted
    componentDidMount() {
        // Covermodel
        const currentModel = this.props.brand.modelList[this.props.brand.covermodel];
        
        // Set default displayed model
        this.setState({
            displayedModel: currentModel
        });
    }

    // RENDER METHODS

    // Not selected brand layout (restricted render)
    notSelectedRender = () => (
        <div className="brand brand_hover" onClick={this.selectBrand} id={this.props.id}>
            <div className="brand__image">
                <Model 
                    img={this.state.displayedModel.img} 
                    id={this.state.displayedModel.brand}
                    setsBackground={true}
                    loaded={this.coverImageLoaded}
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
            <Info className="info__area">
                <div className="model-name">{this.state.displayedModel.modelText}</div>
                <Button onClick={this.props.toggleInfo}>Learn more</Button>
            </Info>
            <DisplayedModel className="brand__image model__displayed">
                <Model 
                    img={this.state.displayedModel.img} 
                    id={this.state.displayedModel.brand}
                />
            </DisplayedModel>
            <ModelList 
                className="model-list"
                status={this.props.showModels} 
                brand={this.props.brand}
                currentModel={this.state.displayedModel}
                nextModel={this.nextModel}
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