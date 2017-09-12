import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { AbstractGenericComparation } from './AbstractGenericComparation'

export abstract class AbstractBooleanExpression extends AbstractGenericComparation {
  
  protected constructor(leftHandSide: Exp, rightHandSide: Exp, operationSymbol: string, comparatorFunction: Function) {
    super(leftHandSide, rightHandSide, operationSymbol,comparatorFunction);
  }

  protected evaluation(leftSideEvaluation: any, rightHandSideEvaluation: any):any {
    return this.evaluateBoolean(leftSideEvaluation,rightHandSideEvaluation);
  }
}