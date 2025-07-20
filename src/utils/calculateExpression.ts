import { evaluate, format } from "mathjs";

export function calculateExpression(expression: string): string {
  try {
    if (!expression || expression.trim() === "") {
      return "EMPTY EXP";
    }

    expression = expression
      .replace(/x/g, '*')
      .replace(/÷/g, '/')
      .replace(/√/g, 'sqrt')
      .replace(/--/g, '+')
      .replace(/x\^2/g, '**2')
      .replace(/%/g, '/100');

    const result = evaluate(expression);

    if (typeof result !== "number" || !isFinite(result)) {
      return "INVD EXP";
    }

    return format(result, {
      precision: 3,
      notation: 'fixed',
    });
  } catch (err: any) {
    console.error("❌ Evaluation Error:", err.message);
    return "INVALID";
  }
}
