import { useState } from "react";

import "../chelsfordCSS.css";
import style from "./getintouchform.module.css";

const APP_BASE_URL = process.env.REACT_APP_BASE_URL;
const bearer = process.env.REACT_APP_BEARER_TOKEN;

const GetInTouchForm = () => {
  const [message, setMessage] = useState("");
  const [customerEmail, setEmail] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [subject, setSubject] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const onNameChange = (e) => setCustomerName(e.target.value);
  const onEmailChange = (e) => setEmail(e.target.value);
  const onNumberChange = (e) => setSubject(e.target.value);
  const onMessageChange = (e) => setMessage(e.target.value);
  const onSbmit = (e) => {
    e.preventDefault();
    setSuccessMsg("Sending...");
    postRequest({
      customerEmail,
      customerName,
      message,
      subject,
      isChelsford: true,
    }).then((res) => {
      setSuccessMsg("Message sent, our specialist will contact you shortly.");
      setCustomerName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(function () {
        setSuccessMsg("");
      }, 2000);
    });
  };

  const postRequest = async (data) => {
    try {
      const response = await fetch(`${APP_BASE_URL}/Users/contactus`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
          Authorization: `bearer ${bearer}`,
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data),
      });
      return response;
    } catch (err) {
      // return handleError(err);
    }
  };

  return (
    // ${style.getintouchcard}
    <div className={style.container}>
      {/* style.form__elements */}
      <form onSubmit={onSbmit} className={""}>
        <div className={style.container_formwithoutbutton}>
            <strong>Get in Touch </strong> 
          <input
            className={"style.form__inputs"}
            type="text"
            placeholder="Name"
            onChange={onNameChange}
            value={customerName}
            required
          />
          <input
            className={"style.form__inputs"}
            type="email"
            placeholder="Email"
            onChange={onEmailChange}
            value={customerEmail}
            required
          />
          <input
            className={"style.form__inputs"}
            type="text"
            placeholder="Contact Number"
            onChange={onNumberChange}
            value={subject}
            required
          />
          <input
            className={"style.form__inputs"}
            type="text"
            name="massage"
            id="massage"
            placeholder="Message"
            value={message}
            required
            onChange={onMessageChange}
          ></input>
        </div>
        <div className={style.buttoncontainer}>
            <span className={"style.msg__text"}>Send Message</span>
            <button className={"style.send__msg__btn"}>
            </button>
        </div>
      </form>
      {successMsg !== "" && (
        <span
          style={{
            padding: "5px",
            margin: "5px",
            color: "green",
            borderRadius: "5px",
            width: "100%",
            textAlignLast: "center",
            background: "#f7f2f2",
          }}
        >
          {successMsg}
        </span>
      )}
    </div>
  );
};

export default GetInTouchForm;
