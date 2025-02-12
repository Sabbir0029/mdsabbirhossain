import { Metadata } from "next";
import { MdOutlineContactPhone } from "react-icons/md";

export const metadata: Metadata = {
  title: "Md. Sabbir Hossain || CONTACT ME",
  description: "This is contact page",
};

const contact = () => {
  return (
    <div className="container min-h-screen dark:bg-gray-900 text-black dark:text-white transition-colors">
      <div className="flex w-full flex-col lg:flex-row mt-14">
        <div className="card bg-white rounded-box grid flex-grow ">
          {/* CONTACT MEsection start */}
          <section className="ml-10">
            <div className="mt-12 ml-5 flex">
              <div className=" bg-info rounded-full mx-2 p-3">
                <MdOutlineContactPhone />
              </div>
              <h2 className="font-bold text-2xl mt-1  text-black">
                CONTACT ME
              </h2>
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
          {/* CONTACT ME section end */}
        </div>
        <div className="divider lg:divider-horizontal">OR</div>
        <div className="card bg-white rounded-box grid  flex-grow ">
          <div className="m-10">
            <h1 className="text-2xl font-bold text-start">Send Messages</h1>
            <form>
              <div className="mt-5">
                <label className="mb-4">Name</label>
                <br />
                <input
                  name="name"
                  className="w-96 p-2 border border-info rounded-lg"
                  placeholder="Please type your name"
                  type="text"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="mb-4">Email</label>
                <br />
                <input
                  name="email"
                  className="w-96 p-2 border border-info rounded-lg"
                  placeholder="Please type your Email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-2">
                <label className="mb-4">Messages</label>
                <br />
                <textarea
                  name="messages"
                  className="w-96 p-2 border border-info rounded-lg"
                  placeholder="Please type your messages"
                  required
                />
              </div>
              <button className="w-96 bg-info p-2 rounded-lg text-white font-bold text-lg">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
