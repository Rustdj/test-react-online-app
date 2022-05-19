import { useState, useLayoutEffect } from 'react';

const queries = [
    '(min-width: 320px) and (max-width: 375px)', //isMobile
    '(min-width: 376px) and (max-width: 575px)', //isMiddleMobile
    '(min-width: 576px) and (max-width: 766px)', //isBigMobile
    '(min-width: 767px) and (max-width:1199px)', //isTablet
    '(min-width: 1200px)',                       //isDesktop
]

export const useMatchMedia = () => {
  const mediaQueryLists = queries.map(query => matchMedia(query));

  const getValue = () => mediaQueryLists.map(m1 => m1.matches);

  const [values, setValues] = useState(getValue)

  useLayoutEffect(() => {
      const handler = () => setValues(getValue);

      mediaQueryLists.forEach(m1 => m1.addEventListener('change', handler));

      return () => mediaQueryLists.forEach(m1 => m1.removeEventListener('change', handler));
  });

  return ['isMobile', 'isMiddleMobile', 'isBigMobile', 'isTablet', 'isDesktop'].reduce((acc, screen, index) => ({
      ...acc,
      [screen]: values[index],
  }), {});
}
