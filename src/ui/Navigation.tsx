import Logo from "./Logo";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

interface Props {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}

export default function Navigation({ setIsOpen, open }: Props) {
  return (
    <div className="grid row-start-1 row-span-1 grid-controller  grid-cols-subgrid flex-col overflow-hidden mt-0 px-[2.4rem] md:px-[0rem] h-fit text-white lg:pt-8 w-full">
      <div className="flex justify-between h-fit items-center col-start-1 col-span-12 ">
        <div className="py-6 md:px-[4rem] lg:flex justify-center items-center">
          <Logo />
        </div>
        <div className="h-[0.1rem] opacity-25 w-[90%] hidden lg:flex bg-white translate-x-10 z-20"></div>
        <NavLinks open={open} />
        <MobileNav setIsOpen={setIsOpen} open={open} />
      </div>
    </div>
  );
}
