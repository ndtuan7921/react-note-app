import React from "react";

export default function Note({ handleDeleteNode, ...props }) {
  return (
    <div className="note">
      <span>{props.text}</span>
      <div className="note-footer">
        <small>{props.date}</small>
        <button className="delete" onClick={() => handleDeleteNode(props.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}
