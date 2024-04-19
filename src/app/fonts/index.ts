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
      },
    ]
  })