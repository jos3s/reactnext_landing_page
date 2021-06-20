import {
  mapImageGrid,
  mapSectionContent,
  mapSections,
  mapSectionTwoColumn,
  mapTextGrid,
} from './mapSections';

import pagesFakeData from './dados.json';

describe('mapSections', () => {
  it('should render predefined sections if no data', () => {
    const data = mapSections();

    expect(data).toEqual([]);
  });

  it('should render sections with correct data', () => {
    const data = mapSections(pagesFakeData[0].sections);
    expect(data[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
      },
    ]);

    const WithNoComponent = mapSections([{}]);
    expect(withNoTextOrImageGrid).toEqual([
      { __component: 'section.section-grid' },
    ]);
    expect(WithNoComponent).toEqual([{}]);
  });

  it('should test section.section-grid with no text_grid or image_grid', () => {
    const withNoTextOrImageGrid = mapSections([
      {
        __component: 'section.section-grid',
        image_grid: [{}],
      },
      {
        __component: 'section.section-grid',
        text_grid: [{}],
      },
    ]);
    expect(withNoTextOrImageGrid.length).toBe(2);
  });

  it('should map section two column', () => {
    const data = mapSectionTwoColumn();

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two column', () => {
    const data = mapSectionTwoColumn({
      __component: 'section.section-two-columns',
      description: 'To wrap up January',
      title: 'January brings us Firefox 85',
      metadata: {
        background: true,
        name: 'Home',
        section_id: 'home',
      },
      image: {
        name: 'javascript.svg',
        alternativeText:
          'Desenho de pessoas segurando os logos do HTML, CSS E JS',
        caption: 'Desenho de pessoas segurando os logos do HTML, CSS E JS',
        url: '2ac7d6a0f8.svg',
      },
    });

    expect(data.backgroundDark).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('2ac7d6a0f8.svg');
    expect(data.text).toBe('To wrap up January');
    expect(data.title).toBe('January brings us Firefox 85');
  });

  it('should map section content with no data', () => {
    const data = mapSectionContent();

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      title: 'news coverage and some surprises',
      content: '<p>teste</p>',
      metadata: {
        background: false,
        name: 'Intro',
        section_id: 'intro',
      },
    });

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>teste</p>');
    expect(data.title).toBe('news coverage and some surprises');
  });

  it('should map grid text with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My grid',
      description: 'aaa',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'abc',
        },
      ],
      metadata: {
        background: true,
        section_id: 'grid-one',
        name: 'Grid one',
      },
    });

    expect(data.backgroundDark).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.title).toBe('My grid');
    expect(data.description).toBe('aaa');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('abc');
  });

  it('should map grid text with no data', () => {
    const data = mapTextGrid(undefined);

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });

  it('should map grid image with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      _id: '60c13d913c48bd3f64fc0e5d',
      title: 'Gallery',
      description: 'Uma breve descrição.',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Uma arvore com prédios ao redor',
            url: 'https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'Gallery',
        section_id: 'gallery',
      },
    });

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.title).toBe('Gallery');
    expect(data.description).toBe('Uma breve descrição.');
    expect(data.grid[0].altText).toBe('Uma arvore com prédios ao redor');
    expect(data.grid[0].srcImg).toBe(
      'https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg',
    );
  });

  it('should map grid image without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.title).toBe('');
    expect(data.description).toBe('');
  });
});
