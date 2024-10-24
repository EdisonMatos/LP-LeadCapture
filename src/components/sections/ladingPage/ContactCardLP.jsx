export default function ContactCardLP({ icon, label, description }) {
  return (
    <>
      <div className="flex flex-wrap bg-white p-[16px]">
        <div className="flex gap-[20px]">
          <div className="h-[60px] w-[60px] bg-primary flex justify-center items-center">
            {icon}
          </div>
          <div className="flex flex-col justify-center text-darker">
            <h1 className="font-semibold">{label}</h1>
            <p className="opacity-80 text-[8px] phone2:text-[10px] phone3:text-[12px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
