export const mapMenu = (menu = {}) => {
  const {
    open_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    menu_link: links = [],
  } = menu;

  const srcImg = menu.logo_img && menu.logo_img.url ? menu.logo_img.url : '';

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
