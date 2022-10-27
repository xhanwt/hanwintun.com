import * as React from 'react'
import { useLanyard } from "use-lanyard";

import cs from 'classnames'
import styles from './styles.module.css'

export const StatusIcon: React.FC = () => {



  const DISCORD_ID = "850409862792871966";

  let classNames = cs(styles.offline)
  
  const { data: activity } = useLanyard(DISCORD_ID);
      if(activity){
      if(activity.discord_status == "dnd"){
        classNames = cs(styles.dnd)
      } 
      else if(activity.discord_status == "idle"){
        classNames = cs(styles.idle)
      } else if(activity.discord_status == "online"){
        classNames = cs(styles.online)
      }
    }

  


  return (
    
    <div>
         <div
      className= {classNames}
    
    ></div>
    </div>
   
  )
}