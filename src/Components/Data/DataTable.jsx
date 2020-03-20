import React from 'react';
// import { Link } from 'react-router-dom';
import Table from './Table/index';
import Data from './Data';

const DataTable = () => {
    const tableHeadings = ['#','Who','=','Time'];
    Data[0].problem.map((prob)=>{
            tableHeadings.push(prob.name);
        });
    const DataArray = Data.map((entry)=> {
    return(
        <tr key={entry.id} style={{ fontSize: '.9em' }}>
        <td className="tc pa3">
          {/* <Link className="no-underline dim blue pointer" to={`submission/${score.id}`}> */}
            {entry.id}
          {/* </Link> */}
        </td>
        <td className="tc pa3">
          {/* <Link className="no-underline dim blue pointer" to={`/profile/${score.who.id}`}> */}
            {entry.who.username}
          {/* </Link> */}
        </td>
        <td className="tc pa3">
          {entry.score}
        </td>
        <td className="tc pa3">
          {entry.time}
        </td>
        {
        entry.problem.map( (prob) => {
            return(
            <td className="tc pa3">
                {prob.score}
            </td>
            );
        })}
      </tr>
    );
    });
    
    return (
        <Table tableHeadings={tableHeadings} tableData={DataArray} tableHeadingClassName="tc" />
      );
};
export default DataTable;
