export const mapMenu = (menu = {}) => {
  const {
    new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    logo_img: { url: srcImg = '' } = '',
    menu_links: links = [],
  } = menu;

  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
