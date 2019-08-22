import React from 'react';
import Brand from './Brand';
import samplePhones from '../sample-phones';

class App extends React.Component {
    render() {
        return (
            <div className="brands">
                { Object.keys(samplePhones).map(key => <Brand brandname={samplePhones[key].brandname} />) }
            </div>
        );
    }
}

export default App;