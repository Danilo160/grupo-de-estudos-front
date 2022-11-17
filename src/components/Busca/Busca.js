import React from 'react';
import "../Busca/Busca.css"
export const Busca = (props) => {
  return (
    <div className="searchbox-wrap">
      <input ref={props.inputref}
      type="search" 
      placeholder="Busque por um grupo..." 
      className="searchbox" 
      value={props.filter}
      onChange={props.searchText.bind(this)}
      onKeyPress={props.handleKeyPress}
      />
    </div>
    
  );

}