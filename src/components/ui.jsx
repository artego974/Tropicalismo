export const cx = (...classes) => classes.filter(Boolean).join(" ");

export function Container({ className, children }) {
  return <div className={cx("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

export function Section({ id, className, wave = false, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-titulo`} className={cx("relative py-16 sm:py-24 lg:py-28", wave && "wave-top", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Kicker({ className, children }) {
  return <p className={cx("text-xs font-bold uppercase tracking-[0.16em]", className)}>{children}</p>;
}

export function SectionHeader({ id, number, kicker, title, light = false, className, children }) {
  return (
    <div className={cx("max-w-3xl", className)}>
      <p className={cx("flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em]", light ? "text-papel/90" : "text-tinta")}>
        <span className="grid h-7 min-w-7 place-items-center rounded-full border-2 border-current px-1.5 tabular-nums">{number}</span>
        {kicker}
      </p>
      <h2 id={`${id}-titulo`} className="mt-5 text-[clamp(2.5rem,9vw,5rem)] leading-none font-extrabold tracking-[-0.01em] uppercase font-stretch-condensed">
        {title}
      </h2>
      {children && <div className={cx("mt-6 space-y-4 text-lg leading-relaxed", light ? "text-papel/90" : "text-tinta")}>{children}</div>}
    </div>
  );
}

// Palavra de destaque nos títulos, na fonte psicodélica.
export function Accent({ className, children }) {
  return <span className={cx("font-display text-[0.86em] font-normal tracking-normal normal-case", className)}>{children}</span>;
}

export function Photo({
  image,
  tone = "bg-sol",
  ratio = "aspect-square",
  position = "50% 50%",
  duotone = true,
  caption,
  label,
  priority = false,
  className,
  frameClassName,
}) {
  return (
    <figure className={className}>
      <div className={cx("relative overflow-hidden border-2 border-tinta", duotone && "duotone", tone, ratio, frameClassName)}>
        <img
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition: position }}
        />
        {label && (
          <span className="absolute left-2 top-2 border-2 border-tinta bg-papel px-2 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.12em] text-tinta">
            {label}
          </span>
        )}
      </div>
      {caption !== false && (
        <figcaption className="mt-2.5 text-sm leading-snug opacity-80">
          {caption ?? image.title}. <span className="whitespace-nowrap">Foto: {image.credit.short}.</span>
        </figcaption>
      )}
    </figure>
  );
}

const buttonStyles = {
  dark: "bg-tinta text-papel hover:bg-mata",
  light: "bg-papel text-tinta hover:bg-sol",
  sol: "bg-sol text-tinta hover:bg-papel",
};

export function ButtonLink({ href, variant = "dark", className, children, ...rest }) {
  return (
    <a
      href={href}
      className={cx(
        "inline-flex min-h-12 items-center gap-2.5 border-2 border-tinta px-5 py-3 font-bold shadow-pop-sm transition-[translate,box-shadow,background-color] hover:-translate-y-0.5 hover:shadow-pop active:translate-y-0 active:shadow-none",
        buttonStyles[variant],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
