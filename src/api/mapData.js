import { mapMenu } from './mapMenu';
import { mapSections } from './mapSections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((page) => {
    const {
      footer: footerHtml = '',
      slug = '',
      title = '',
      menu = {},
      sections = [],
    } = page;

    return {
      title,
      slug,
      footerHtml,
      menu: mapMenu(menu),
      sections: mapSections(sections),
    };
  });
};
