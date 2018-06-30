import { helper } from '@ember/component/helper';

export function doctorSimilarList([doc1, doc2]) {

  // Removes self from the list.
  if (doc1 == doc2){
      return false;
  }
  
  // Removes all doctors that have different specialty.
  if (doc1.specialty === doc2.specialty){
    return true;
  }
}

export default helper(doctorSimilarList);
