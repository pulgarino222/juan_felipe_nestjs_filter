import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'lengthNumber', async: false })
export class LengthNumberConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: any) {
    // Asegúrate de que sea un número
    if (typeof value !== 'number') return false;

    // Convierte el número a string y verifica la longitud
    return value.toString().length === args.constraints[0];
  }

  defaultMessage(args: any) {
    return `El número debe tener exactamente ${args.constraints[0]} dígitos.`;
  }
}

export function LengthNumber(length: number, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'lengthNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [length],
      validator: LengthNumberConstraint,
    });
  };
}

