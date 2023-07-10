import Link from "next/link";

export const Links = () => {
  return <ul>
    <li>
      <LinkWithText path="/"/>
    </li>
    <li>
      <LinkWithText path="/nested"/>
    </li>
    <li>
      <LinkWithText path="/nested/route"/>
    </li>
  </ul>;
}

export const LinkWithText = ({path}: {path: string}) => {
  return <Link href={path}>Link to {path}</Link>
}