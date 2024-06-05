import * as React from "react";

export default function DeleteAccount() {
  const [reason, setReason] = React.useState("");
  const [comments, setComments] = React.useState("");

  const handleReasonChange = (event) => {
    setReason(event.target.value);
  };

  const handleCommentsChange = (event) => {
    setComments(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Reason:", reason);
    console.log("Comments:", comments);
  };

  return (
    <div className="bg-white px-10 py-10 rounded-3xl border-2 border-gray-200 shadow-2xl">
      <h1 className="text-center text-xl font-semibold text-blue-500 mt-4 mb-4">
        Delete Your Account
      </h1>
      <p>
        We're sorry to see you go. It would be great if we could know the reason
        behind.
      </p>
      <form onSubmit={handleSubmit}>
        <div>
          <div class="flex">
            <svg
              class="h-15 w-5 mr-2 text-white fill-red-600"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-red-600 mt-4 mb-4">
              Please select one of the below reasons.
            </p>
          </div>

          <div className="radio-list mt-2">
            <div>
              <input
                type="radio"
                className="form-radio border-2 h-6 w-6"
                name="radio"
                value="1"
                onChange={handleReasonChange}
                checked={reason === "1"}
              />
              <span className="ml-2">I have privacy concerns.</span>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                className="form-radio border-2 h-6 w-6"
                name="radio"
                value="2"
                onChange={handleReasonChange}
                checked={reason === "2"}
              />
              <span className="ml-2">I no longer find this useful.</span>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                className="form-radio border-2 h-6 w-6"
                name="radio"
                value="3"
                onChange={handleReasonChange}
                checked={reason === "3"}
              />
              <span className="ml-2">
                I'm receiving irrelevant email contents.
              </span>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                className="form-radio border-2 h-6 w-6"
                name="radio"
                value="4"
                onChange={handleReasonChange}
                checked={reason === "4"}
              />
              <span className="ml-2">I'm getting too many emails.</span>
            </div>
            <div className="mt-2">
              <input
                type="radio"
                className="form-radio border-2 h-6 w-6"
                name="radio"
                value="5"
                onChange={handleReasonChange}
                checked={reason === "5"}
              />
              <span className="ml-2">Others</span>
            </div>
          </div>
        </div>

        <div>
          <p className="mt-4">Let us know if you've other comments.</p>
          <textarea
            className="form-textarea w-full h-20 border rounded font-thin mt-2"
            placeholder="Your comments (Optional)"
            value={comments}
            onChange={handleCommentsChange}
          ></textarea>
          <p className="font-extralight text-right text-gray-400">
            Max. 2000 characters
          </p>
        </div>
        <div className="mt-8">
          <button
            type="submit"
            className="w-full mt-6 font-medium text-white bg-blue-500 hover:bg-sky-700 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 rounded p-1"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
