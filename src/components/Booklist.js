import React from 'react'

function Booklist() {
    return (
        <>


            <Book />


        </>
    );



}
const Book = () => {
    return (<>
        <Image />


    </>
    );
};
const Image = () => {
    <img src='https://m.media-amazon.com/images/I/81l1UM7a4bS._AC_UL320_.jpg'
        alt=""
    />
}



export default Booklist;
