export default function Reveal({ children, className }) {
  return <div className={className ? "reveal " + className : "reveal"}>{children}</div>;
}
