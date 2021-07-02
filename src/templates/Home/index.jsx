import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import mockBase from '../Base/mock';
import { mapData } from '../../api/mapData';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { GridTwoColumn } from '../../components/GridTwoColumn';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

function Home() {
  const [data, setData] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace(/[^a-z0-9-_]/gi, '');
    const slug = path ? path : 'landing-page';

    const load = async () => {
      try {
        const data = await fetch('http://localhost:1337/pages/?slug=' + slug);
        const json = await data.json();
        const pagesData = mapData(json);
        setData(pagesData[0]);
      } catch (e) {
        console.error(e);
        setData(undefined);
      }
    };
    load();
  }, [location]);

  if (data === undefined) return <PageNotFound />;

  if (data && !data.slug) return <Loading />;

  const { sections, menu, footerHtml, slug } = data;
  const { links, text, link, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, idx) => {
        const { component } = section;
        const key = `${slug}-${idx}`;
        if (component === 'section.section-two-columns')
          return <GridTwoColumn {...section} key={key} />;
        if (component === 'section.section-content')
          return <GridContent {...section} key={key} />;
        if (component === 'section.section-grid-text')
          return <GridText {...section} key={key} />;
        if (component === 'section.section-grid-image')
          return <GridImage {...section} key={key} />;
      })}
    </Base>
  );
}

export default Home;
