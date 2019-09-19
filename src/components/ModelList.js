import React, { Component } from 'react';
import Model from './Model';
import { ModelListStyle } from './styles/BrandStyles';

export default class ModelList extends Component {
    render() {
        if (this.props.status) {
            let modelBefore = true; // Whether the current iteration is before or after the displayed model
            let modelsBeforeCurrent = []; // Will contain the models before the displayed model
            let modelsAfterCurrent = []; // Will contain the models after the displayed model

            Object
                .keys(this.props.brand.modelList)
                .map(model => {
                    if (model === this.props.currentModel.model) {
                        modelBefore = false;
                        return;
                    }

                    if (modelBefore) {
                        modelsBeforeCurrent.push(
                            <Model 
                                img={this.props.brand.modelList[model].img} 
                                key={model}
                                id={model}
                            />
                        )
                    } else {
                        modelsAfterCurrent.push(
                            <Model 
                                img={this.props.brand.modelList[model].img} 
                                key={model}
                                id={model}
                            />
                        )
                    }
                })
            return (
                <ModelListStyle onClick={this.props.nextModel}>
                    {modelsAfterCurrent}
                    {modelsBeforeCurrent}
                    {console.log(modelsAfterCurrent), console.log(modelsBeforeCurrent)}
                </ModelListStyle>
            ) 
        } else {
            return null;
        }
    }
}
