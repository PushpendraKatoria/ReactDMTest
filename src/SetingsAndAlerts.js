import React from 'react';
import SwitchTileCollapsible from './SwitchTIleCollapsible';

function SettingsAndAlerts(props) {

    const titles = props.settingsAndAlertsSection.titles;
    const settings = props.settingsAndAlertsSection.settings
    const alerts = props.settingsAndAlertsSection.alerts
    const collapsibleRow = (section) => {
        return (
            <td>
                <SwitchTileCollapsible section={section.title} tiles={section.tiles}/>
            </td>  
        )
    }

  return (
        <>
            <tr>
                <td key={titles[0]} className='table-heading'>
                    {titles[0]}
                </td> 
                <td key={titles[1]} className='table-heading'>
                    {titles[1]}
                </td> 
            </tr>
            <tr>
                {collapsibleRow(settings)}
                {collapsibleRow(alerts)}
            </tr>    
        </>
  );
}

export default SettingsAndAlerts;
