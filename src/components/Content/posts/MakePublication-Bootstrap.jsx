import React from "react";

const MakePublication = props => {
  return(
      <div className="form-group">
          <label className="sr-only" htmlFor="message">post</label>
          <textarea className="form-control" onChange={props.onPostInput} placeholder="What are you thinking?"></textarea>
      </div>
  )
};

export default MakePublication;