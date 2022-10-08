import * as React from 'react'
import { IoHeartOutline } from '@react-icons/all-files/io5/IoHeartOutline'
import { AiOutlineRetweet } from '@react-icons/all-files/ai/AiOutlineRetweet'

import styles from './styles.module.css'

/**
 * @see https://developer.instagram.com/en/docs/instagram-for-websites/web-intents/overview
 */
export const PageActions: React.FC<{ tweet: string }> = ({ tweet }) => {
  return (
    <div className={styles.pageActions}>
      <a
        className={styles.likeTweet}
        href={`https://instagram.com/intent/like?tweet_id=${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        title='Like this post on instagram'
      >
        <IoHeartOutline />
      </a>

      <a
        className={styles.retweet}
        href={`https://instagram.com/intent/retweet?tweet_id=${tweet}`}
        target='_blank'
        rel='noopener noreferrer'
        title='Retweet this post on instagram'
      >
        <AiOutlineRetweet />
      </a>
    </div>
  )
}
