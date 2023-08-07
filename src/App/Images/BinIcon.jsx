import './Icon.css';

export function BinIcon({ isError }) {
  const svgClassName = `icon ${isError ? 'icon--error' : ''}`;

  return (
    <svg
      className={svgClassName}
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.75 6.47831C19.1425 6.12081 15.5133 5.93665 11.895 5.93665C9.75 5.93665 7.605 6.04498 5.46 6.26165L3.25 6.47831"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.20825 5.38413L9.44659 3.96496C9.61992 2.93579 9.74992 2.16663 11.5808 2.16663H14.4191C16.2499 2.16663 16.3908 2.97913 16.5533 3.97579L16.7916 5.38413"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4208 9.90173L19.7166 20.8109C19.5974 22.5117 19.4999 23.8334 16.4774 23.8334H9.52243C6.49993 23.8334 6.40243 22.5117 6.28327 20.8109L5.5791 9.90173"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.1909 17.875H14.7984"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.2917 13.5416H15.7084"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
