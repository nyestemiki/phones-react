import React, { Component } from 'react';
import Model from './Model';
import { ModelListStyle } from './styles/BrandStyles';

export default class ModelList extends Component {
    render() {
        if (this.props.status) {
            let modelBefore = true; // Whether the current iteration is before or after the displayed model
            let modelsBeforeCurrent = []; // Will contain the models before the displayed model
            let modelsAfterCurrent = []; // Will contain the models after the displayed model
            let newModel;

            Object
                .keys(this.props.brand.modelList)
                .map(model => {
                    if (model === this.props.currentModel.model) {
                        modelBefore = false; // After this iteration, models will be following the displayed model
                        return null; // Do not put displayed model into the models' list
                    }

                    newModel = (
                        <Model 
                            img={this.props.brand.modelList[model].img} 
                            key={model}
                            id={model}
                            {...this.props.brand.modelList[model]}
                        />
                    );

                    // Adding model to its position
                    if (modelBefore) {
                        modelsBeforeCurrent.push(newModel);
                    } else {
                        modelsAfterCurrent.push(newModel);
                    }

                    // Arrow funtion must return a value
                    return null;
                });

            return (
                <ModelListStyle 
                    onClick={() => { 
                        if (modelsAfterCurrent[0]) {
                            this.props.nextModel(modelsAfterCurrent[0]); 
                        } else {
                            this.props.nextModel(modelsBeforeCurrent[0]);
                        }
                    }}
                >
                    {modelsAfterCurrent}
                    {modelsBeforeCurrent}
                </ModelListStyle>
            ); 
        } else {
            return null;
        }
    }
}
