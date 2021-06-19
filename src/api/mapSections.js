export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumn(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      const { __component: { text_grid = [], image_grid = [] } = '' } = section;
      if (text_grid.length > 0) {
        return mapTextGrid(section);
      }
      if (image_grid.length > 0) {
        return mapImageGrid(section);
      }
    }

    return section;
  });
};

export const mapSectionTwoColumn = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description: text = '',
    image: { url: srcImg = '' } = '',
    metadata: {
      background: backgroundDark = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component,
    title,
    text,
    srcImg,
    backgroundDark,
    sectionId,
  };
};

export const mapSectionContent = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    content: html = '',
    metadata: {
      background: backgroundDark = false,
      section_id: sectionId = '',
    } = false,
  } = section;

  return {
    component,
    title,
    html,
    backgroundDark,
    sectionId,
  };
};

export const mapTextGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: {
      background: backgroundDark = false,
      section_id: sectionId = '',
    } = false,
    text_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-text',
    title,
    description,
    backgroundDark,
    sectionId,
    grid,
  };
};

export const mapImageGrid = (section = {}) => {
  const {
    __component: component = '',
    title = '',
    description = '',
    metadata: {
      background: backgroundDark = false,
      section_id: sectionId = '',
    } = false,
    image_grid: grid = [],
  } = section;

  return {
    component: 'section.section-grid-image',
    title,
    description,
    backgroundDark,
    sectionId,
    grid: grid.map((img) => {
      const {
        image: { url: srcImg = '', alternativeText: altText = '' } = '',
      } = img;

      return {
        altText,
        srcImg,
      };
    }),
  };
};

/*
{
  "__component": "section.section-grid",
  "_id": "60c13d913c48bd3f64fc0e5c",
  "title": "My grid",
  "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias.",
  "text_gird": [
    {
      "_id": "60c13d923c48bd3f64fc0e62",
      "title": "Teste 1",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
      "__v": 0,
      "id": "60c13d923c48bd3f64fc0e62"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e63",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
      "title": "Teste 3",
      "__v": 0,
      "id": "60c13d923c48bd3f64fc0e63"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e64",
      "description": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis cum delectus molestias. Atque doloribus nobis laudantium esse ut, non commodi maxime distinctio veritatis unde, reprehenderit minus ad dolores provident maiores.",
      "title": "Teste 3",
      "__v": 0,
      "id": "60c13d923c48bd3f64fc0e64"
    }
  ],
  "image_grid": [

  ],
  "metadata": {
    "background": true,
    "_id": "60c13d933c48bd3f64fc0e81",
    "section_id": "grid-one",
    "name": "Grid one",
    "__v": 0,
    "id": "60c13d933c48bd3f64fc0e81"
  },
  "__v": 2,
  "id": "60c13d913c48bd3f64fc0e5c"
},
{
  "__component": "section.section-grid",
  "_id": "60c13d913c48bd3f64fc0e5d",
  "title": "Gallery",
  "description": "Uma breve descrição.",
  "text_gird": [

  ],
  "image_grid": [
    {
      "_id": "60c13d923c48bd3f64fc0e66",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e66"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e67",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e67"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e68",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e68"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e69",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e69"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e6a",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e6a"
    },
    {
      "_id": "60c13d923c48bd3f64fc0e6b",
      "__v": 0,
      "image": {
        "_id": "60c1042a3c48bd3f64fc0e59",
        "name": "http://source.unsplash.com/random/360x360?r=2",
        "alternativeText": "Uma arvore com prédios ao redor",
        "caption": "",
        "hash": "360x360_r_2_76bb1a347f",
        "ext": "",
        "mime": "image/jpeg",
        "size": 30.68,
        "width": 360,
        "height": 360,
        "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262243/360x360_r_2_76bb1a347f.jpg",
        "provider_metadata": {
          "public_id": "360x360_r_2_76bb1a347f",
          "resource_type": "image"
        },
        "formats": {
          "thumbnail": {
            "name": "thumbnail_http://source.unsplash.com/random/360x360?r=2",
            "hash": "thumbnail_360x360_r_2_76bb1a347f",
            "ext": "",
            "mime": "image/jpeg",
            "width": 156,
            "height": 156,
            "size": 7.1,
            "path": null,
            "url": "https://res.cloudinary.com/jos3s/image/upload/v1623262249/thumbnail_360x360_r_2_76bb1a347f.jpg",
            "provider_metadata": {
              "public_id": "thumbnail_360x360_r_2_76bb1a347f",
              "resource_type": "image"
            }
          }
        },
        "provider": "cloudinary",
        "related": [
          "60c13d923c48bd3f64fc0e68",
          "60c13d923c48bd3f64fc0e66",
          "60c13d923c48bd3f64fc0e67",
          "60c13d923c48bd3f64fc0e6b",
          "60c13d923c48bd3f64fc0e6a",
          "60c13d923c48bd3f64fc0e69"
        ],
        "createdAt": "2021-06-09T18:10:50.621Z",
        "updatedAt": "2021-06-09T22:15:46.928Z",
        "__v": 0,
        "id": "60c1042a3c48bd3f64fc0e59"
      },
      "id": "60c13d923c48bd3f64fc0e6b"
    }
  ],
  "metadata": {
    "background": false,
    "_id": "60c13d933c48bd3f64fc0e8d",
    "name": "Gallery",
    "section_id": "gallery",
    "__v": 0,
    "id": "60c13d933c48bd3f64fc0e8d"
  },
  "__v": 2,
  "id": "60c13d913c48bd3f64fc0e5d"
},
*/
