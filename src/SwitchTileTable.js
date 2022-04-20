import React from 'react';
import General from './General';
import SettingsAndAlerts from './SetingsAndAlerts';

function SwitchTileTable(props) {

    const generalSection = props.data.generalSection;
    const settingsAndAlertsSection = props.data.settingsAndAlertsSection;



  return (
    <>
        <table className='switch-tile-table'>
          <tbody className='table-body'>
            <General generalSection={generalSection}/>
            <div className='section-divider'></div>
            <SettingsAndAlerts settingsAndAlertsSection={settingsAndAlertsSection}/>
          </tbody>
          
        </table>
    </>
  );
}

export default SwitchTileTable;
