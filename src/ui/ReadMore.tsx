interface Props {
  setIsMore: React.Dispatch<React.SetStateAction<boolean>>;
  more: boolean;
}

export default function ReadMore({ more, setIsMore }: Props) {
  return (
    <div
      className="text-red-300 cursor-pointer"
      onClick={() => setIsMore((show: boolean) => !show)}
    >
      {more ? "more..." : "less..."}
    </div>
  );
}
