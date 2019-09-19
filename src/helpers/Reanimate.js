/*

    Description

    Performs an insignificant alteration to a goven DOM element,
    thus having the element updated (and replaying animation).


    Instructions

    Please insert the code in the comment below the implementation
    into the css file linked to your project.


    Sidenote
    
    Under the hood this function moves the given DOM element
    0.00001px to the right on the X-axis and back.
    
    It takes 1ms to secure the addition and removal of the necessary class.
*/

const Reanimate = DOM => {

    // Check if given DOM parameter is valid or not
    if (DOM) {

        // Add an insignificant alteration to update component
        DOM.classList.add('Reanimate');

        // Clean up after the job is done
        setTimeout(() => {
            DOM.classList.remove('Reanimate');
        }, 1);
    }
};

export default Reanimate;

/*
    .Reanimate {
        animation: reanimate .5s;
    }

    @keyframes reanimate {
        from {
            transform: translateX(.00001px);
        } to {
            transform: translateX(0);
        }
    }
*/