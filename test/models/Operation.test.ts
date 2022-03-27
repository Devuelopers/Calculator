import { Operation, convertValueToOperation } from '../../src/models';

test('parse operation value to enum Operation', () => {
    expect(convertValueToOperation("+")).toBe(Operation.Add);
    expect(convertValueToOperation("-")).toBe(Operation.Subtract);
    expect(convertValueToOperation("*")).toBe(Operation.Multiply);
    expect(convertValueToOperation("/")).toBe(Operation.Divide);
    expect(convertValueToOperation("")).toBe(Operation.None);
});