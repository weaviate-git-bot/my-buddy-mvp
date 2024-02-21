'use client'
import React from 'react'
import { useContext } from 'use-context-selector'
import Select from '@/app/components/base/select/locale'
import { languages } from '@/utils/language'
import { type Locale } from '@/i18n'
import I18n from '@/context/i18n'
import LogoSite from '@/app/components/base/logo/logo-site'

const Header = () => {
  const { locale, setLocaleOnClient } = useContext(I18n)

  if (localStorage?.getItem('console_token'))
    localStorage.removeItem('console_token')

  return <div className='flex items-center justify-between p-6 w-full'>
    <LogoSite />
    <Select
      value={locale}
      items={languages}
      onChange={(value) => {
        setLocaleOnClient(value as Locale)
      }}
    />

  </div>
}

export default Header
