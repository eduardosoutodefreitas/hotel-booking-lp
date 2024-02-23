import { InstagramIcon, TwitterIcon, FacebookIcon } from "lucide-react";
import Link from "next/link";
interface SocialsProps {
  containerStyles?: string;
}
const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href={"/"}>
          <InstagramIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <TwitterIcon />
        </Link>
      </li>
      <li>
        <Link href={"/"}>
          <FacebookIcon />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;
