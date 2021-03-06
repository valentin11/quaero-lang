import {Exp} from '../ASTNode';
import {State} from '../../interpreter/State';
import {ErrorTypeInfo} from "../ErrorTypeInfo";
import {Variable} from "../statements/Variable";
import {AbstractExpression} from "./abstract/AbstractExpression";

export class Index extends AbstractExpression {

    value: Exp;
    indexValue: Exp;

    constructor(value: Exp, indexValue: Exp) {
        super();
        this.value = value;
        this.indexValue = indexValue;
    }

    toString(): string {
        return `IndexOf(${this.value.toString()},[ ${this.indexValue.toString()}])`;
    }

    unParse(): string {
        return `${this.value.unParse()}[${this.indexValue.unParse()}]`;
    }

    evaluate(state: State): any {
        let listEvaluation = this.value.evaluate(state);
        let indexEvaluation = this.indexValue.evaluate(state);
        if (this.isNumber(indexEvaluation)) {
            if (this.isString(listEvaluation)) {
                return listEvaluation[indexEvaluation];

            } else if (this.isList(listEvaluation)) {
                return listEvaluation[indexEvaluation];
            }
        } else if (this.isString(indexEvaluation) && this.isCollection(listEvaluation)) {
            return listEvaluation["keyValues"].get(indexEvaluation);
        }
        let errors: [ErrorTypeInfo] = [new ErrorTypeInfo("listEvaluation", listEvaluation), new ErrorTypeInfo("indexEvaluation", indexEvaluation)];
        super.throwExceptionOnErrorCheckType(errors);
    }
}
