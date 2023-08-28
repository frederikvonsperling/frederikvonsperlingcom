import { PostType } from "../post.entities";
import { faker } from "@faker-js/faker";

export const createPost = (): PostType => {
  return {
    _id: faker.datatype.uuid(),
    title: faker.lorem.words(2),
    excerpt: faker.lorem.words(10),
    content: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: faker.lorem.words(10),
          },
        ],
        style: "normal",
      },
    ],
    featuredImage: {
      asset: {
        _type: "reference",
        _ref: faker.datatype.uuid(),
      },
    },
    credits: faker.lorem.words(2),
    slug: {
      current: faker.lorem.words(2),
    },
    categories: [
      {
        _id: faker.datatype.uuid(),
        _type: "reference",
        title: faker.lorem.words(2),
      },
    ],
  };
};

export const getPostsOperationMock = async () => {
  return new Promise((resolve) => {});
};
