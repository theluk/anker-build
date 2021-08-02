type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span
      className={`text-gray-900 inline-flex align-text-bottom items-center ${fontStyle}`}
    >
      ⚓ Anker
      <span className="text-gray-500">.build</span>
    </span>
  );
};

export { Logo };
