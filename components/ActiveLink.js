import Link from "next/link";
import { useRouter } from "next/router";

const style = {
    color: "#5454D4",
    textDecoration: "underline",
}

export const ActiveLink = ({ text, href }) => {

  const { pathname } = useRouter()
  return (
    <Link href={href}>
      <a style={ pathname === href ? style : null }>{text}</a>
    </Link>
  );
};
