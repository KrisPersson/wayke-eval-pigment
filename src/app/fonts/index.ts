import localFont from 'next/font/local'

export const OpenSauceOne = localFont({
  src: [
    {
      path: './open-sauce-one/OpenSauceOne-Light.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './open-sauce-one/OpenSauceOne-Bold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-open-sauce'

})

export const StyreneA = localFont({
  src: [
    {
      path: './styreneaweb-medium/styreneaweb-medium.ttf',
      weight: '500',
      style: 'normal',
    } ],
  variable: '--font-styrene'
})

