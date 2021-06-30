import P from 'prop-types';
import { GridContent } from '../../components/GridContent';

export const PageNotFound = () => {
  return (
    <GridContent
      title="Erro 404"
      html="<p>Página não encontrada. <a href='/'>Volte para o home</a></p>"
      backgroundDark
    />
  );
};
