export const TestemonialsSelector = ({ isActive }) => {
  if (isActive) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="8" cy="8" r="5" fill="#FAFAFA" />
        <circle cx="8" cy="8" r="7.5" stroke="#FAFAFA" />
      </svg>
    );
  }
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="8" r="5" fill="#FAFAFA" />
    </svg>
  );
};

export const ReviewStar = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.18206 0L11.2436 5.87336L17.9147 5.87336L12.5176 9.50329L14.5791 15.3766L9.18206 11.7467L3.78498 15.3766L5.84648 9.50329L0.449402 5.87336L7.12056 5.87336L9.18206 0Z"
      fill="#FFB905"
    />
  </svg>
);
