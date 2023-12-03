import React from "react";

function Item(item) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between items-center border-b p-2">
        <input type="checkbox" />
        <div>{item.item.name}</div>
        <div>{item.item.email}</div>
        <div>{item.item.role}</div>
        <div>Actions</div>
      </div>
    </div>
  );

export default Item;
