import React, {useState} from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [buttonText, setButtonText] = useState("Send Message");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showFailureMessage, setShowFailureMessage] = useState(false);

    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;
    
        if (name.length <= 0) {
          tempErrors["name"] = true;
          isValid = false;
        }
        if (email.length <= 0) {
          tempErrors["email"] = true;
          isValid = false;
        }
        if (message.length <= 0) {
          tempErrors["message"] = true;
          isValid = false;
        }
    
        setErrors({ ...tempErrors });
        console.log("errors", errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let isValidForm = handleValidation();
    
        if (isValidForm) {
          setButtonText("Sending Message");
          const res = await fetch("/api/sendgrid", {
            body: JSON.stringify({
              email: email,
              name: name,
              message: message,
            }),
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
          });
    
          const { error } = await res.json();
          if (error) {
            console.log(error);
            setShowSuccessMessage(false);
            setShowFailureMessage(true);
            setButtonText("Send Message");
    
            setName("");
            setEmail("");
            setMessage("");
            return;
          }
          setShowSuccessMessage(true);
          setShowFailureMessage(false);
          setButtonText("Send Message");
          
          setName("");
          setEmail("");
          setMessage("");
        }
        console.log(name, email, message);
    };
    
    return (
        <>
            <div className="max-w-4xl mx-auto h-36 bg-gray-100 dark:bg-gray-700 antialiased">
                <h1 className=" text-6xl lg:text-8xl font-bold font-mono py-16 text-center lg:text-left text-gray-900 dark:text-white">
                    Contact
                </h1>
            </div>
            <div className="relative z-10 rounded-md shadow-md bg-yellow-400 dark:bg-yellow-500 p-4 md:p-10 lg:p-20 max-w-4xl mx-auto mt-1">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="md:ml-4">
                    <header className="">
                    <h1 className="text-[#2F4858] font-semibold text-2xl">
                        Let's get in touch.
                    </h1>
                    <p className="font-light text-base text-gray-700 mt-2">
                        Send a message and I'll get back to you as soon as I can.
                    </p>
                    </header>
                    <div className="icons-container inline-flex flex-col my-20">
                    <div className="flex flex-row items-center space-x-6 rounded-md border border-yellow-400 dark:border-yellow-500 hover:border hover:border-[#006876] dark:hover:border dark:hover:border-[#006876] p-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-telephone-fill h-4 w-4 text-[#006876]"
                        viewBox="0 0 16 16"
                        >
                        <path
                            fillRule="evenodd"
                            d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                        />
                        </svg>
                        <p className="text-[#2F4858] font-light text-sm">
                            +886-921220725
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-6 rounded-md border border-yellow-400 dark:border-yellow-500 hover:border hover:border-[#006876] dark:hover:border dark:hover:border-[#006876] p-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill h-4 w-4 text-[#006876]"
                        viewBox="0 0 16 16"
                        >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                        </svg>
                        <p className="text-[#2F4858] font-light text-sm">
                            amo880725@gmail.com
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-6 rounded-md border border-yellow-400 dark:border-yellow-500 hover:border hover:border-[#006876] dark:hover:border dark:hover:border-[#006876] p-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-pin-fill h-4 w-4 text-[#006876]"
                        viewBox="0 0 16 16"
                        >
                        <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354z" />
                        </svg>
                        <p className="text-[#2F4858] font-light text-sm">
                            Tamsui, New Taipei City, Taiwan
                        </p>
                    </div>
                    </div>
                    <div className="social-icons flex flex-row space-x-8">
                    <a
                        href="https://www.facebook.com/amofeng88/"
                        className="h-10 w-10 rounded-full hover:bg-[#2F4858] flex items-center justify-center cursor-pointer"
                    >
                        <svg
                        width="24"
                        height="24"
                        className="text-[#006876]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                            fill="currentColor"
                        />
                        </svg>
                    </a>
                    <a
                        href="https://www.instagram.com/amo_0725/"
                        className="h-10 w-10 rounded-full hover:bg-[#2F4858] flex items-center justify-center cursor-pointer"
                    >
                        <svg
                        width="24"
                        height="24"
                        className="text-[#006876]"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                            fill="currentColor"
                        />
                        <path
                            d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                            fill="currentColor"
                        />
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                            fill="currentColor"
                        />
                        </svg>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/amo-feng/"
                        className="h-10 w-10 rounded-full hover:bg-[#2F4858] flex items-center justify-center cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="text-[#006876]"
                            viewBox="0 0 16 16"
                        >
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                        </svg>
                    </a>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className="form rounded-lg bg-white dark:bg-white p-4 flex flex-col">
                    <label htmlFor="name" className="text-sm text-[#2F4858] mx-4">
                    {" "}
                    Your Name
                    </label>
                    <input
                    type="text"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    className="font-light dark:bg-white rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#2F4858]"
                    name="name"
                    />
                    {errors?.name && (
                        <p className="text-red-500 pl-4 text-xs tracking-tight">Name cannot be empty.</p>
                    )}

                    <label htmlFor="email" className="text-sm text-[#2F4858] mx-4 mt-4">
                    Email
                    </label>
                    <input
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    className="font-light dark:bg-white rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#2F4858]"
                    name="email"
                    />
                    {errors?.email && (
                        <p className="text-red-500 pl-4 text-xs tracking-tight">Email cannot be empty.</p>
                    )}

                    <label
                    htmlFor="message"
                    className="text-sm text-[#2F4858] mx-4 mt-4"
                    >
                    Message
                    </label>
                    <textarea
                    rows="4"
                    type="text"
                    value={message}
                    onChange={(e) => {
                        setMessage(e.target.value);
                    }}
                    className="font-light dark:bg-white rounded-md border focus:outline-none py-2 mt-2 px-1 mx-4 focus:ring-2 focus:border-none ring-[#2F4858]"
                    name="message"
                    ></textarea>
                    {errors?.message && (
                        <p className="text-red-500 pl-4 text-xs tracking-tight">Message cannot be empty.</p>
                    )}

                    <button
                    type="submit"
                    className="bg-[#2F4858] rounded-md w-1/2 mx-4 mt-8 py-2 text-gray-50 text-xs font-bold flex flex-row justify-center"
                    >
                    {buttonText}
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        className="text-white ml-2"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                        fill="currentColor"
                        />
                    </svg>
                    </button>
                    <div className="text-left">
                        {showSuccessMessage && (
                        <p className="text-green-500 pl-4 text-xs my-2">
                            Your Message has been delivered. <br/> 
                            Thank You !
                        </p>
                        )}
                        {showFailureMessage && (
                        <p className="text-red-500 pl-4 text-xs tracking-tight">
                            Oops! Something went wrong, please try again.
                        </p>
                        )}
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}

export default Contact;