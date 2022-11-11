import React from "react";

export default function StartPage() {
  return (
    <div className="container">
      <div>
        <h1>THE CHATROOM</h1>
      </div>
      <div className="startpage-wrapper">
        <div className="box-image">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1530811761207-8d9d22f0a141?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="neon sign of speak bubble"
          />
        </div>
        <div>
          <ul>
            <li>
              {" "}
              <h2>
                <a href="/login-user">Login</a>
              </h2>
            </li>
            <li>
              <h2>
                <a href="/create-user">Sign up</a>
              </h2>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}
