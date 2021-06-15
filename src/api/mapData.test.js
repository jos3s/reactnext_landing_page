import { mapData } from './mapData';

describe('map-data', () => {
  it('should map data even if there is no data', () => {
    const pagesData = mapData()[0];

    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.menu).toEqual({});
    expect(pagesData.sections).toEqual([]);
  });

  it('should map data if there are data', () => {
    const pagesData = mapData([
      {
        title: 'Landing',
        slug: 'landing',
        footer: '<p>Hey</p>',
        menu: { a: 'b' },
        sections: [1, 2, 3],
      },
    ])[0];

    expect(pagesData.slug).toBe('landing');
    expect(pagesData.title).toBe('Landing');
    expect(pagesData.footerHtml).toBe('<p>Hey</p>');
    expect(pagesData.menu).toEqual({ a: 'b' });
    expect(pagesData.sections).toEqual([1, 2, 3]);
  });
});
