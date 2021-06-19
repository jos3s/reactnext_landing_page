export const mapSections = (sections = []) => {
  return sections.map((section) => {
    if (section.__component === 'section.section-two-columns') {
      return mapSectionTwoColumn(section);
    }
    if (section.__component === 'section.section-content') {
      return mapSectionContent(section);
    }
    if (section.__component === 'section.section-grid') {
      return mapSectionGrid(section);
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

export const mapSectionGrid = (section) => {
  return section;
};
