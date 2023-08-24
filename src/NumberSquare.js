import React, {useState} from 'react';

function NumberSquare(props) {
  const [currentValue, setValue] = useState();
  const id = "square_" + props.index;
  const value = props.bindTo[props.index] || '';

  function handleChange(event) {
    setValue(event.target.value);
    props.bindTo[props.index] = event.target.value;
    props.onChange(event);
  }

  return (<input
    className="numberSquare"
    type="number"
    id={id}
    value={value}
    onChange={handleChange}
  />);
}

export default NumberSquare;
