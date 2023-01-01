import UnstyledLink from './UnstyledLink';

export default function CustomLink(props) {
  return (
    <UnstyledLink
      className={`${props.className}  inline-flex items-center font-bold hover:underline`}
      {...props}
    >
      {props.children}
    </UnstyledLink>
  );
}
