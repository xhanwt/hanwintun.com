import * as React from 'react'
import cs from 'classnames'
import { Header, Breadcrumbs, Search, useNotionContext } from 'react-notion-x'
import * as types from 'notion-types'

import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { useDarkMode } from 'lib/use-dark-mode'
import { navigationStyle, navigationLinks, isSearchEnabled } from 'lib/config'

import styles from './styles.module.css'
import { StatusIcon } from './StatusIcon';

const ToggleThemeButton = () => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  const onToggleTheme = React.useCallback(() => {
    toggleDarkMode()
  }, [toggleDarkMode])

  return (
    <div
      className={cs('breadcrumb', 'button', !hasMounted && styles.hidden)}
      onClick={onToggleTheme}
    >
      <DarkModeSwitch
      style={{}}
      checked={isDarkMode && hasMounted}
      onChange={toggleDarkMode}
      size={20}
    />
    </div>
  )
}

export const NotionPageHeader: React.FC<{
  block: types.CollectionViewPageBlock | types.PageBlock
}> = ({ block }) => {
  const { components, mapPageUrl } = useNotionContext()


  if (navigationStyle === 'default') {
    return <Header block={block} />
  }
  
  return (
    <header className='notion-header'>

      <div className='notion-nav-header'>
<div className = 'icon-and-status'>
        <Breadcrumbs block={block} rootOnly={true} />
       
</div>
        <div className='notion-nav-header-rhs breadcrumbs'>
   
<StatusIcon/>
          {navigationLinks
            ?.map((link, index) => {
              if (!link.pageId && !link.url) {
                return null
              }

              if (link.pageId) {
                return (
                  <components.PageLink
                    href={mapPageUrl(link.pageId)}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    / {link.title}
                  </components.PageLink>
                )
              } else {
                return (
                  <components.Link
                    href={link.url}
                    key={index}
                    className={cs(styles.navLink, 'breadcrumb', 'button')}
                  >
                    {link.title}
                  </components.Link>
                )
              }
            })
            .filter(Boolean)}
   
          <ToggleThemeButton />

          {isSearchEnabled && <Search block={block} title={null} />}
        </div>
      </div>
    </header>
  )
}