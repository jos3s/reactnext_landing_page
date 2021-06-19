import {
  mapSectionContent,
  mapSections,
  mapSectionTwoColumn,
} from './mapSections';

describe('mapSections', () => {
  it('should render predefined sections if no data', () => {
    const data = mapSections();

    expect(data).toEqual([]);
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
      _id: '60c13d913c48bd3f64fc0e5a',
      description: 'To wrap up January',
      title: 'January brings us Firefox 85',
      metadata: {
        background: true,
        _id: '60c13d923c48bd3f64fc0e61',
        name: 'Home',
        section_id: 'home',
        __v: 0,
        id: '60c13d923c48bd3f64fc0e61',
      },
      __v: 1,
      image: {
        _id: '60c1029a3c48bd3f64fc0e57',
        name: 'javascript.svg',
        alternativeText:
          'Desenho de pessoas segurando os logos do HTML, CSS E JS',
        caption: 'Desenho de pessoas segurando os logos do HTML, CSS E JS',
        hash: 'javascript_2ac7d6a0f8',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: '2ac7d6a0f8.svg',
        provider_metadata: {
          public_id: 'javascript_2ac7d6a0f8',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['60c13d913c48bd3f64fc0e5a', '60c13d913c48bd3f64fc0e60'],
        createdAt: '2021-06-09T18:04:10.082Z',
        updatedAt: '2021-06-09T22:15:47.752Z',
        __v: 0,
        id: '60c1029a3c48bd3f64fc0e57',
      },
      id: '60c13d913c48bd3f64fc0e5a',
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
      _id: '60c13d913c48bd3f64fc0e5b',
      title: 'news coverage and some surprises',
      content: '<p>teste</p>',
      metadata: {
        background: false,
        _id: '60c13d923c48bd3f64fc0e65',
        name: 'Intro',
        section_id: 'intro',
        __v: 0,
        id: '60c13d923c48bd3f64fc0e65',
      },
      __v: 1,
      id: '60c13d913c48bd3f64fc0e5b',
    });

    expect(data.backgroundDark).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('<p>teste</p>');
    expect(data.title).toBe('news coverage and some surprises');
  });
});
