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
      menu,
      sections,
    };
  });
};
