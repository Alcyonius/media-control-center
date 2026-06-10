type HeaderProps = {
  title: string;
  subtitle: string;
};

export default function Header({
  title,
  subtitle,
}: HeaderProps) {
  return (
    <div>
      <h1 className="text-5xl font-black tracking-tight">
        {title}
      </h1>

      <p className="text-gray-400 mt-2 text-lg">
        {subtitle}
      </p>
    </div>
  );
}
