export default function TextShadow({ text }) {
  return (
    <span
      className='font-bold'
      style={{
        textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {text}
    </span>
  );
}
