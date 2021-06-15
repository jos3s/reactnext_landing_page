import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from './../../components/Menu';
import { Footer } from './../../components/Footer';
import { GoTop } from './../../components/GoTop';

export const Base = ({ links = [], logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer html={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  links: P.arrayOf([]),
  logoData: P.shape({}),
  footerHtml: P.string.isRequired,
  children: P.node.isRequired,
};
