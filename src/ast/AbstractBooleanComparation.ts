import { Exp } from './ASTNode';
import { State } from '../interpreter/State';
import { AbstractGenericComparation } from './AbstractGenericComparation'

export abstract class AbstractBooleanComparation extends AbstractGenericComparation {
  
  protected constructor(leftHandSide: Exp, rightHandSide: Exp, operationSymbol: string, comparatorFunction: Function) {
    super(leftHandSide, rightHandSide, operationSymbol,comparatorFunction);
  }

  protected evaluation(leftSideEvaluation: any, rightHandSideEvaluation: any) {
    var evaluation=this.evaluateBoolean(leftSideEvaluation,rightHandSideEvaluation);
    if(evaluation==null){
      this.ThrowEvaluationException(leftSideEvaluation,rightHandSideEvaluation);
    }
    return evaluation;
  }
}
