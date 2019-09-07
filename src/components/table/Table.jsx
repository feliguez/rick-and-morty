import React from 'react';

const Table = props => {
  return (
    <div className="table-responsive">
      <table className="table table-hover heroes-table">{props.children}</table>
    </div>
  );
};

export default Table;
