export default function IconFeatureCard(props) {
  const { icon, title, paragraph, className, children } = props;

  return (
    <div
      className={`w-full tablet1:h-[340px] p-0 tablet1:w-[290px] tablet2:h-[350px] desktop1:w-[260px] desktop1:h-[280px] desktop2:h-[260px] flex flex-col items-center desktop1:hover:scale-110 transition desktop1:p-0 ${className}`}
    >
      <div className="h-[64px] w-[64px] mb-[24px] bg-primary rounded-md flex justify-center items-center text-secondary">
        {icon}
      </div>
      <h1 className="h-auto font-bold font-mainFont text-title3 text-center mb-[16px] text-secondary">
        {title}
      </h1>
      <p className="text-center text-black opacity-70 font-mainFont w-[90%] pb-4">
        {paragraph}
      </p>
      {children}
    </div>
  );
}
