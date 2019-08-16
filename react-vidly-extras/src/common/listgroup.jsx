import React from 'react';


const ListGroup = (props) => {
    const {items, textProperty, valueProperty, selectedItem, onItemSelect} = props;

    //console.log("Sdlecged item: ", selectedItem);

    return <ul className="list-group">
        {items.map(item => (
            <li key={item[valueProperty] ? item[valueProperty] : "-1"} 
                onClick={() => onItemSelect(item)} 
                className={ item === selectedItem ? "list-group-item active" : "list-group-item"}>
                {item[textProperty]}
            </li>
        ))}
    </ul>;
};
 

ListGroup.defaultProps = {
    textProperty: "name",
    valueProperty: "_id"
};

/////////////////////// ALTERNATIVE //////////////// 
// ==> the benefit of this is to avoid the necessity of supplying values in from movies unless they differ from the defaults 
// Note the us eof brackets to access properties dynamically (ie. access property text and name specified by parent)
// const ListGroup = (props) => {
//     const {items, textProperty, valueProperty} = props;
//     return <ul className="list-group">
//         {items.map(item => (
//             <li key={item[textProperty]} className="list-group-item">{item[textProperty]}</li>
//         ))}
//     </ul>;
// };
//////////////////////////////////////////////////// 

export default ListGroup;

