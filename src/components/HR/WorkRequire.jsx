import React from 'react';

export default function WorkRequire(props) {
  return (
    <div>
      <input className="form-group" id="requires" placeholder="requires" name={`requires${props.currentWork}`} onChange={props.handleChange} />
    </div>
  );
}
