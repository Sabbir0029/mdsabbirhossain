import { MdOutlineContactPhone } from "react-icons/md";

const ContactMe = () => {
  return (
    <div>
      <section className="ml-10">
        <div className="mt-12 ml-5 flex">
          <div className=" bg-info rounded-full mx-2 p-3">
            <MdOutlineContactPhone />
          </div>
          <h2 className="font-bold text-2xl mt-1  text-black">CONTACT ME</h2>
        </div>
        <div className="ml-8">
          <ul className="steps steps-vertical">
            <li data-content="★" className="step step-info">
              <strong>Contact No : +8801773147066</strong>
            </li>
            <li data-content="★" className="step step-info">
              <strong>E-mail : mdsabbirhossain0029@gmail.com </strong>
            </li>
            <li data-content="★" className="step step-info">
              <strong>
                Github :{" "}
                <a
                  href="https://github.com/sabbir0029"
                  className="text-blue-700"
                >
                  {" "}
                  Click here to view my Github account.
                </a>{" "}
              </strong>
            </li>
            <li data-content="★" className="step step-info">
              <strong>
                Linkedin :{" "}
                <a
                  href="https://www.linkedin.com/in/md-sabbir-hossain-8a8390227/"
                  className="text-blue-700"
                >
                  {" "}
                  Click here to view my Linkedin account.
                </a>
              </strong>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
