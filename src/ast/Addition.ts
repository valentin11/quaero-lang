import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { AbstractArimeticExpression } from './AbstractArimeticExpression'

export class Addition extends AbstractArimeticExpression {
  
    constructor(leftHandSide: Exp, rightHandSide: Exp) {
      super(leftHandSide, rightHandSide, "+",(a,b)=> a + b);
    }
  }