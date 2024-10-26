import React from 'react';
import { fontSizes } from '../../theme/font-sizes';
import spacings from '../../theme/spacings';
import { useTranslation } from 'react-i18next';

function HomePage() {

  const { t } = useTranslation();

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontSize: fontSizes.heading1,
        padding: `0 ${spacings.leftRightPagePadding}`,
        boxSizing: 'border-box',
        textAlign: 'center',
      }}>
       {t('landingTemplate')}
    </div>
  );
}

export default HomePage;