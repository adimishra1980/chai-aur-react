import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username cannot be empty!";
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // let [formData, setFormData] = useState({
  //   username: "",
  //   remarks: "",
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return {
  //       ...currData,
  //       [event.target.name]: [event.target.value],
  //     };
  //   });
  // };
  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });
  // };


  return (
    <>
      <h4>Give a Comment</h4>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label> &nbsp;
        <input
          id="username"
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        {formik.errors.username ? <p style={{color: "red"}}>{formik.errors.username}</p> : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label> &nbsp;
        <textarea
          id="remarks"
          value={formik.values.remarks}
          placeholder="add remark"
          onChange={formik.handleChange}
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label> &nbsp;
        <input
          id="rating"
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add button</button>
      </form>
    </>
  );
}
