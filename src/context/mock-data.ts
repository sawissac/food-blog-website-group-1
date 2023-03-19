export type BlogData = {
  title: string;
  mins: string;
  desc: string;
  url: string;
  recipe: string;
  id: number;
};

export type MockData = {
  mainBannerId: number;
  blogData: BlogData[];
  uniqueId: number;
  setMainBanner: (props: number) => void;
  setBlogData: (id: number, data: BlogData) => void;
  deleteBlogData: (id: number) => void;
  createBlogData: (data: BlogData) => void;
  isBlogExist: (id: number) => boolean;
};

export const MockData: MockData = {
  mainBannerId: 1,
  uniqueId: 13,
  setMainBanner: () => {},
  setBlogData: () => {},
  deleteBlogData: () => {},
  isBlogExist: () => {
    return false;
  },
  createBlogData: () => {},
  blogData: [
    {
      title: "SUNDAY BRUNCH : HOLIDAY GINGERBREAD CARDAMOM WAFFLES RECIPE",
      mins: "5:00",
      id: 1,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.sMkII4-lmtueW9yzv84sRwHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 2,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.ZVDJnafBNtk6Uk-T-3IsAQHaLG?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 3,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://img.allw.mn/thumbs/lj/w9/tc1jj2dm5b4c91e5b393b977856388_1080x1080.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 4,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://i.pinimg.com/474x/61/33/76/613376b89518cef608f7b8cb97100671--black-bean-burgers-winter-recipes.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 5,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://bing.com/th?id=OSK.83a51cd4ef55b4ddf0fba4cfb7192b34",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 6,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://i5.walmartimages.com/asr/2fce99ed-e2c4-44c1-a40b-f11c61dd0a33_1.8703e4fc97f6c918fb13fe8ff2e44a82.jpeg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 7,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://www.howsweeteats.com/wp-content/uploads/2018/06/veg-burgers-I-howsweeteats.com-15-350x350.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 8,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://i.pinimg.com/736x/6c/c1/02/6cc1020d1ec013bc44fa71137d9c81bf.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 9,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b-20.jpg",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 10,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.qdHqnzuqEI4cZ-VPs260XgHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 11,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://th.bing.com/th/id/OIP.PvEb8JGKc1RpcWIhYT9UawHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Baked sweet potatoes with cheese inside",
      mins: "5:00",
      id: 12,
      recipe: "Baked Sweet",
      desc: `Baked sweet potatoes are a popular and healthy side dish that can be enjoyed year-round. This versatile vegetable is high in fiber, vitamins, and minerals, making it an excellent addition to any diet. But have you ever considered adding cheese to your sweet potatoes? The combination of sweet and savory flavors is sure to tantalize your taste buds and leave you wanting more.
            To prepare this delicious dish, you will need a few ingredients. You will need sweet potatoes, cheese, butter, salt, and pepper. Begin by preheating your oven to 400°F (200°C). While your oven is heating up, wash your sweet potatoes and pierce them several times with a fork. Place them on a baking sheet lined with parchment paper and bake them for 45-60 minutes or until they are tender.
            Once your sweet potatoes are cooked, take them out of the oven and allow them to cool for a few minutes. Cut a slit in the top of each sweet potato, and carefully scoop out the flesh, leaving about 1/4 inch of the potato inside the skin. Mash the sweet potato flesh with butter, salt, and pepper to taste. Then, add your cheese of choice and mix well.
            Spoon the mashed sweet potato and cheese mixture back into the sweet potato skins. You can sprinkle some extra cheese on top if you like. Place the stuffed sweet potatoes back onto the baking sheet and bake for an additional 10-15 minutes or until the cheese is melted and bubbly.
            There are many different types of cheese that you can use for this recipe. Some of the most popular options include cheddar, mozzarella, and feta. Cheddar cheese is a classic choice that pairs well with the sweetness of the potato. Mozzarella cheese is another great option that will add a gooey, melty texture to the dish. Feta cheese is a tangy and salty choice that will provide a unique flavor profile.
            Baked sweet potatoes with cheese inside are a great side dish to serve with a variety of meals. They are perfect for Thanksgiving, Christmas, or any other holiday gathering. They can also be served as a main dish for a quick and easy weeknight meal. To round out the meal, serve the sweet potatoes with a side salad or some roasted vegetables.
            In addition to being delicious, this dish is also very nutritious. Sweet potatoes are high in fiber, vitamin A, and potassium, which are all essential nutrients for a healthy body. Cheese is a good source of protein, calcium, and vitamin D, which are all important for building and maintaining strong bones.`,
      url: "https://1.bp.blogspot.com/-8JEbSC3yGFk/WH9K8d8k1YI/AAAAAAAABuY/W5GefHmAbxAJG5ebtx0yCOdh919NT8kwQCLcB/s400/IMG_7147.jpg",
    },
  ],
};
