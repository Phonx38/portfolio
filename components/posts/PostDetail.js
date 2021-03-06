import { RichText } from "@graphcms/rich-text-react-renderer";
import moment from "moment";
import React from "react";

const PostDetail = ({ post }) => {
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p key={index} className="mb-8">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <div className="flex flex-col my-8">
      <div className="flex flex-row items-center">
        <img
          src={post.author.photo.url}
          alt={post.author.name}
          className="inline object-cover w-16 h-16 mr-2 rounded-full"
        />
        <div className="ml-5 text-gray-400 font-semibold">
          <h1>{post.author.name}</h1>
          <p>{moment(post.createdAt).format("MMM DD, YYYY")}</p>
        </div>
      </div>
      <div className="">
        <h1 className="text-gray-200 font-extrabold text-3xl py-10 player">
          {post.title}
        </h1>
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full p-5"
        />
        <article className="prose lg:prose-xl prose-invert py-10 text-xl  text-gray-300 ">
          <RichText content={post.content.raw.children} />
          {/* {post.content.raw.children.map((typeObj, index) => {
            const children = typeObj.children.map((item, itemindex) =>
              getContentFragment(itemindex, item.text, item)
            );

            return getContentFragment(index, children, typeObj, typeObj.type);
          })} */}
        </article>
      </div>

      {/* <div className="relative overflow-hidden shadow-md mb-6 ">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className=" px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <div className=""></div>
        </div>
      </div> */}
    </div>
  );
};

export default PostDetail;
