const apiKey =
  "Ovwmx-17MFnyzQcfD4fym5T_XDGFZ9MH-XEbnuGFuX5bIBxKNdeDpee-wF257Hh1jCV6omeK_SPoN1OqU7AcZ955x3d_OXjDQY4t951dG16JA_4FDdIpn1-_Uax8Y3Yx";

export const Yelp = {
  searchYelp(term, location, sortBy) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    )
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map((business) => {
            console.log(business);
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories[0].title,
              rating: business.rating,
              reviewCount: business.reiew_count,
            };
          });
        }
      });
  },
};
