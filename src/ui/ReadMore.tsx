export default function ReadMore({ more, setIsMore }) {
  return (
    <div
      className="text-red-300 cursor-pointer"
      onClick={() => setIsMore((show: boolean) => !show)}
    >
      {more ? "more..." : "less..."}
    </div>
  );
}
