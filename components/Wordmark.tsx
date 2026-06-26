interface Props {
  size?: "lg" | "sm";
  className?: string;
}

/**
 * The Oathbound typographic wordmark. Pure CSS / web-font based so it stays
 * crisp at any size and can be swapped for real logo art later.
 */
export default function Wordmark({ size = "sm", className = "" }: Props) {
  return (
    <span
      className={`wordmark ${size === "lg" ? "wordmark-lg" : "wordmark-sm"} ${className}`}
      aria-label="Oathbound"
    >
      Oathbound
    </span>
  );
}
