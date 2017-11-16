import {Exp} from '../ASTNode';
import {ListCollection, SetCollection, KeyValue} from '../AST';
import {State} from '../../interpreter/State';
import {AbstractExpression} from "./AbstractExpression";
import {ErrorTypeInfo} from "../ErrorTypeInfo";

export class Dot extends AbstractExpression {

    listCol: Exp;
    key: string;

    constructor(listCol: Exp, key: string,) {
        super();
        this.key = key;
        this.listCol = listCol;
    }

    toString(): string {
        return `Dot(${this.listCol.toString()}, ${this.key.toString()})`;
    }

    unParse(): string {
        //return `(${this.lhs.unParse()} ++ ${this.rhs.unParse()})`;
        return "Hacer unParse";
    }

    evaluate(state: State): any {
        let listEvaluation = this.listCol.evaluate(state);
        if (this.isCollection(listEvaluation)) {
            for (let item of listEvaluation.arr) {
                if (this.isKeyValue(item) && item.id == this.key) {
                    return item.exp;
                }
            }
        }
        let error = new ErrorTypeInfo("listEvaluation", listEvaluation);
        this.throwExceptionOnErrorCheckType([error]);
    }
}