import { Exp } from './ASTNode';
import { ListCollection, SetCollection } from './AST';
import { State } from '../interpreter/State';
import ErrorTypeInfo from "./ErrorTypeInfo";

/**
  Representación abstracta de una expresion binarias.
*/
export abstract class AbstractExpression implements Exp {

  protected evaluateExpression(expression: Exp, state: State): any {
    return expression.evaluate(state);
  }

  protected isBoolean(expressionEvaluation: any): boolean {
    return typeof expressionEvaluation === "boolean";
  }

  protected isNumber(expressionEvaluation: any): boolean {
    return typeof expressionEvaluation === "number";
  }
  
  protected isString(expressionEvaluation: any): boolean {
    return typeof expressionEvaluation === "string";
  }

  protected isList(expressionEvaluation: any): boolean {
    return expressionEvaluation instanceof ListCollection;
  }

  protected isSet(expressionEvaluation: any): boolean {
    return expressionEvaluation instanceof SetCollection;
  }

  protected isCollection(expressionEvaluation: any): boolean {
    return this.isList(expressionEvaluation) || this.isSet(expressionEvaluation);
  }

  protected ThrowExceptionOnErrorCheckType(errorInfo:[ErrorTypeInfo]){
    throw new EvalError(`\n######## ERROR DE TIPOS ########\n${errorInfo.join("\n") }\n################################`);
  }

  abstract toString(): string;

  abstract unparse(): string

  abstract evaluate(state: State): any;
}