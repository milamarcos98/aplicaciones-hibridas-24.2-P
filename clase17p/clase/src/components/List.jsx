import React, {useState} from 'react'

const List = ({title, items, setSelectedItem}) => {
    // hooks
    // use state
// const selectedItem = "";
// const [selectedItem, setSelectedItem ] = useState("");

  return (
    <div>
        <h3>{title}</h3>
        {
            items.map((item, index) => (
                <li key={index} onClick={() => setSelectedItem(item.value)}>
                    {item.text}
                </li>
            ))
        }
        {/* {selectedItem} */}
    </div>
  )
}

export default List