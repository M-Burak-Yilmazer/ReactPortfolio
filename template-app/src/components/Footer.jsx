import FooterStyle from "../scss/footer.module.scss";


const Footer = () => {
  return (
    <footer className={FooterStyle["footer"]}>
      <p>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} /> Copyright by
        Mathias {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
