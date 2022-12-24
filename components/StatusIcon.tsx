import * as React from 'react'
import { useLanyard } from "use-lanyard";

import cs from 'classnames'
import styles from './styles.module.css'

export const StatusIcon: React.FC = () => {
  const DISCORD_ID = "850409862792871966";

  // Use the useLanyard hook to fetch the activity data
  const { data: activity } = useLanyard(DISCORD_ID);




  // Render the component based on the activity data
  return (
    <div>
      {activity ? (
        <div className={cs(styles[activity.discord_status])}></div>
      ) : (
        <div>...</div>
      )}
    </div>
  )
}
