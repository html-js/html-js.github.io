import guide from '../guide/_sidebar';
import basic from '../basic/_sidebar';
import algorithm from '../algorithm/_sidebar';
import framework from '../framework/_sidebar';
import project from '../project/_sidebar';
import expert from '../expert/_sidebar';
import master from '../master/_sidebar';

function sidebar() {
  return {
    '/basic/': basic,
    '/guide/': guide,
    '/algorithm/': algorithm,
    '/framework/': framework,
    '/project/': project,
    '/expert/': expert,
    '/master/': master,
  };
}

export default sidebar;
