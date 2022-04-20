import React from 'react';
import SwitchTile from './SwitchTile';

function General(props) {
    const title = props.generalSection.title;
    const tiles = props.generalSection.tiles;
    const tableRow = () => {
        return (
        tiles.map(row => {
            return <tr>
            {
                row.map(column => {
                    return <td key={column}>
                        <SwitchTile title={column}/>
                  </td>
                })
            }
            </tr>
        })
      )
    }

  return (
    <>
          <tr>
              <td className='table-heading'>
                {title}
              </td> 
          </tr>
          {tableRow()} 
    </>
  );
}

export default General;
