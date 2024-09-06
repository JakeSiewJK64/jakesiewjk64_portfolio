"use client";

const CopyToClipboard = ({
  label,
  value,
}: {
  value: string;
  label: string;
}) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value);
      }}
    >
      {label}
    </button>
  );
};

export default CopyToClipboard;
