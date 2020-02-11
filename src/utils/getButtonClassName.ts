export type ButtonTypes = "default"
| "secondary"
| "accent"
| "base"
| "outline"
| "outline-inverse"
| "big";

export const getButtonClassName = (variant: ButtonTypes): string => {
  let classNameUsa = "usa-button";

  switch (variant) {
    case "default":
      break;
    case "secondary":
      classNameUsa += " usa-button--secondary";
      break;
    case "accent":
      classNameUsa += " usa-button--accent-cool";
      break;
    case "base":
      classNameUsa += " usa-button--base";
      break;
    case "outline":
      classNameUsa += " usa-button--outline";
      break;
    case "outline-inverse":
      classNameUsa += " usa-button--outline usa-button--inverse";
      break;
    case "big":
      classNameUsa += " usa-button--big";
      break;
    default:
      break;
  }

  return classNameUsa;
}
