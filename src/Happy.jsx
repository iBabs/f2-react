import React, {useState} from "react";
import './Happy.css'




function Happy(props) {
const [mood, setMood] = useState('happy')

  return (
    <div className="Jump">
      <h2>Are you Happy?</h2>
      <p>
        {props.message}
      </p>
        <p>{mood}</p>
    </div>
  );
}

export default Happy;
