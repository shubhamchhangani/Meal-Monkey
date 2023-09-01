import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent Constructor");
  }

  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render");

    return (
      <div>
        <h1>About Class Component</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2>This is Namaste React Web Series Project</h2>
          <h3>Created by Shubham Chhangani</h3>
          <a
            href="https://github.com/shubhamchhangani"
            target="blank"
            className="border rounded-lg p-2 bg-blue-300 text-red-600"
          >
            My GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/shubham-chhangani-890199211"
            target="blank"
            className="border rounded-lg p-2 bg-blue-300"
          >
            My LinkedIn
          </a>
          <a
            className="border rounded-lg p-2 bg-blue-300"
            href="mailto:shubhamchhangani1998@gmail.com"
          >
            Send mail
          </a>
        </div>
      </div>
    );
  }
}

export default About;
