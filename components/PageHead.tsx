import Head from 'next/head'
import * as React from 'react'

import * as types from 'lib/types'
import * as config from 'lib/config'
import { getSocialImageUrl } from 'lib/get-social-image-url'

export const PageHead: React.FC<
  types.PageProps & {
    title?: string
    description?: string
    image?: string
    url?: string
  }
> = ({ site, title, description, pageId, image, url }) => {
  const rssFeedUrl = `${config.host}/feed`

  title = title ?? site?.name
  description = description ?? site?.description

  const socialImageUrl = getSocialImageUrl(pageId) || image

  return (
    <Head>
      <meta charSet='utf-8' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />

      <meta name='robots' content='index,follow' />
      <meta property='og:type' content='website' />

      {site && (
        <>
          <meta property='og:site_name' content={site.name} />
          <meta property='instagram:domain' content={site.domain} />
        </>
      )}

      {config.instagram && (
        <meta name='instagram:creator' content={`@${config.instagram}`} />
      )}

      {description && (
        <>
          <meta name='description' content={description} />
          <meta property='og:description' content={description} />
          <meta name='instagram:description' content={description} />
        </>
      )}

      {socialImageUrl ? (
        <>
          <meta name='instagram:card' content='summary_large_image' />
          <meta name='instagram:image' content={socialImageUrl} />
          <meta property='og:image' content={socialImageUrl} />
        </>
      ) : (
        <meta name='instagram:card' content='summary' />
      )}

      {url && (
        <>
          <link rel='canonical' href={url} />
          <meta property='og:url' content={url} />
          <meta property='instagram:url' content={url} />
        </>
      )}

      <link
        rel='alternate'
        type='application/rss+xml'
        href={rssFeedUrl}
        title={site?.name}
      />

      <meta property='og:title' content={title} />
      <meta name='instagram:title' content={title} />
      <title>{title}</title>
    </Head>
  )
}
