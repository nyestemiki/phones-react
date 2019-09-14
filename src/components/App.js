import React from 'react';
import Brand from './Brand';
import samplePhones from '../sample-phones';

class App extends React.Component {
    render() {
        return (
            <div className="brands">
                { Object
                    .keys(samplePhones)
                    .map(key => 
                        <Brand 
                            brand={samplePhones[key]} 
                            key={key}
                        />) 
                }
            </div>
        );
    }
}

export default App;