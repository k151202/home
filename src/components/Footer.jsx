import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        Built with <i className="fab fa-react" style={{ color: "blue" }} />{" "}
        edited by Taehyung Kim.
        <br />
        Original Code <i className="fas fa-code" /> by{" "}
        <a
          className="badge"
          rel="noopener"
          target=" _blank"
          href="https://github.com/hashirshoaeb"
          aria-label="My GitHub"
        >
          Hashir Shoaib.
        </a>{" "}
        Thanks
      </Container>
    </footer>
  );
};

export default Footer;
