import React from 'react';
import { fontSizes } from '../../theme/font-sizes';
import spacings from '../../theme/spacings';
import { useTranslation } from 'react-i18next';
import CtaButton from '../../components/buttons/cta-button/cta-button';
import languages from '../../i18n/languages';
import { useTheme } from '../../providers/theme-provider';

function HomePage() {

  //------------
  // DECLARATIONS & FUNCTIONS
  //------------
  const { colors, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const changeLocale = () => {

    const newLocale = i18n.language.toString() === languages.english 
    ? languages.spanish : languages.english;
    i18n.changeLanguage(newLocale);
  };

  //------------
  // UI
  //------------

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        height: '100vh',
        fontSize: fontSizes.heading1,
        padding: `0 ${spacings.leftRightPagePadding}`,
        boxSizing: 'border-box',
        textAlign: 'center',
        color: colors.primary,
        backgroundColor: colors.background,
      }}>
      <p>{t('helloWorld')}</p>
      
      <div style={{ display: 'flex', gap: spacings.buttonSpacing }}>
        <CtaButton label={t('changeLocale')} onClick={changeLocale} />
        <CtaButton label={t('changeTheme')} onClick={toggleTheme}/>
      </div>
    </div>
  );
}

export default HomePage;
