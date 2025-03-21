import { HTMLAttributes } from 'react';

const Dot = ({
  r = 1,
  className,
}: {
  r?: number;
  className?: HTMLAttributes<HTMLOrSVGElement>['className'];
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12.1" cy="12.1" r={r}></circle>
  </svg>
);

export default Dot;
