import { client } from "@/../sanity/lib/client";

export namespace Blog {
  export const getAll = async (): Promise<any[]> => {
    const query = `
    *[_type == "post"] | order(_createdAt desc) {
        title,
        slug,
        author->{_id, name, image},
        mainImage,
        body,
        categories[]->{_id,title},
        publishedAt
      }
        `;
    const data = await client.fetch(query);

    return data;
  };
}
