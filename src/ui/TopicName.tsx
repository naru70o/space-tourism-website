interface Name {
  number: string;
  name: string;
}

type Props = Name;
export default function TopicName({ number, name }: Props) {
  return (
    <div className="flex gap-4 md:self-start md:text-[2rem]">
      <p className="text-[1.6rem]  text-white font-barlowCondensed tracking-widest font-bold md:text-start opacity-15">
        {number}
      </p>
      <h1 className="text-white font-barlowCondensed text-[1.6rem] tracking-widest">
        {name}
      </h1>
    </div>
  );
}
