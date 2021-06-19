import LinksMock from '../../components/NavLinks/mock.js';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export default {
  links: LinksMock,
  logoData: {
    text: 'logo',
    link: '#',
  },
  footerHtml: `<p><a href="https://beacons.page/otaviomiranda">Feito com ❤ por Otávio Miranda</a></p>`,
  children: (
    <>
      <GridText {...gridMock} />
      <GridText {...gridMock} backgroundDark />
      <GridText {...gridMock} />
      <GridText {...gridMock} backgroundDark />
      <GridText {...gridMock} />
    </>
  ),
};
