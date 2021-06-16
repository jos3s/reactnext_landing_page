import { mapMenu, mapMenuLinks } from './mapaMenu';

describe('map menu', () => {
  it('should return a predefined object if no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.srcImg).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      new_tab: false,
      logo_img: {
        url: 'a.svg',
      },
      logo_text: 'Landing page',
      logo_link: '#home',
      menu_links: [
        {
          open_new_tab: false,
          link_text: 'Intro',
          url: '#intro',
        },
        {
          open_new_tab: false,
          link_text: 'Grid One',
          url: '#grid-one',
        },
      ],
    });

    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing page');
    expect(menu.srcImg).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('Intro');
    expect(menu.links[0].link).toBe('#intro');
  });

  it('should return a empty array if no links', () => {
    const links = mapMenuLinks();
    expect(links).toEqual([]);
  });

  it('should map links if links passed', () => {
    const links = mapMenuLinks([
      {
        open_new_tab: false,
        link_text: 'Intro',
        url: '#intro',
      },
      {},
    ]);

    expect(links[0].children).toBe('Intro');
    expect(links[0].link).toBe('#intro');
    expect(links[0].newTab).toBe(false);
  });
});
