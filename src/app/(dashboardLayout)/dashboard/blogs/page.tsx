import React from "react";

const CreateBlogsPage = () => {
  return (
    <div className="w-4/5">
      <p className="text-2xl font-bold  mx-16 mt-5">Create Blog</p>
      {/*  */}
      <div className="mx-16 mt-5 mb-8">
        <form>
          <div className="mt-2">
            <label className="mb-4 text-start">Image Url</label>
            <br />
            <input
              name="image"
              className="w-full p-2 border border-info rounded-lg"
              placeholder="Please type your image url"
              type="text"
              required
            />
          </div>
          <div className="mt-2">
            <label className="mb-4">Title</label>
            <br />
            <input
              name="title"
              className="w-full p-2 border border-info rounded-lg"
              placeholder="Please type your title"
              type="text"
              required
            />
          </div>
          <div className="mt-2">
            <label className="mb-4">Category</label>
            <br />
            <input
              name="category"
              className="w-full p-2 border border-info rounded-lg"
              placeholder="Please type your category"
              type="text"
              required
            />
          </div>

          <div className="mt-2">
            <label className="mb-4">Shot descriptions</label>
            <br />
            <input
              name="shotdescriptions"
              className="w-full p-2 border border-info rounded-lg"
              placeholder="Please type your Shot descriptions"
              type="text"
              required
            />
          </div>
          <div className="mt-2">
            <label className="mb-4">content</label>
            <br />
            <textarea
              name="content"
              className="w-full p-2 border border-info rounded-lg"
              placeholder="Please type your content"
              required
            />
          </div>
          <button className="w-full bg-info p-2 mt-4 rounded-lg text-white font-bold text-lg">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogsPage;
