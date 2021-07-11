import { helper } from '@ember/component/helper';

export default helper(function type(params/*, hash*/) {
  if(params[0] === 'image') return true;
  return false;
});
