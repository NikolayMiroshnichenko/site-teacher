const distanceList = document.querySelector( '.js-distance-list' );
const distanceContainer = document.querySelector( '.distance-container' );



distanceList.addEventListener( 'click', classOpen )

function classOpen( e ) {
    distanceContainer.innerHTML = '';

    const btn = e.target.dataset.actions;
    classContent.map( item => {
        if ( item.id == btn ) {
            distanceContainer.insertAdjacentHTML( 'afterbegin', item.template );
        }
    } )

}




const classContent = [
    {
        id: 1,
        template: `
            <p>5 класс</p>
        `
    },
    {
        id: 2,
        template: `
            <p>6 класс</p>
        `
    },
    {
        id: 3,
        template: `
            <p>7 класс</p>
        `
    },
    {
        id: 4,
        template: `
            <p>8 класс</p>
        `
    },
    {
        id: 5,
        template: `
            <p>9 класс</p>
        `
    }
]

