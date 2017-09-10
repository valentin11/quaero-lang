import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { AbstractArimeticComparation } from './AbstractArimeticComparation'

export class CompareLessOrEqual extends AbstractArimeticComparation {

  constructor(leftHandSide: Exp, rightHandSide: Exp) {
    super(leftHandSide, rightHandSide, "<=", (a, b) => a <= b);
  }
}