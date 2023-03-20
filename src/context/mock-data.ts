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
  setMainBanner: () => { },
  setBlogData: () => { },
  deleteBlogData: () => { },
  isBlogExist: () => {
    return false;
  },
  createBlogData: () => { },
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
      title: "Sliced Bread with Cinnamon Butter",
      mins: "5:00",
      id: 9,
      recipe: "Bread and Butter",
      desc: `Sliced bread with cinnamon butter is a delicious and easy-to-make snack or breakfast option.Sliced bread with cinnamon butter is a delicious and easy-to-make snack or breakfast option. To make cinnamon butter, you can mix softened butter with ground cinnamon and a little bit of sugar to taste. Spread the cinnamon butter onto slices of your favorite bread, and then toast or bake the bread until it is golden brown and crispy. You can also add some sliced fruit or a drizzle of honey to make it even more flavorful. Enjoy!
             To make cinnamon butter, you can mix softened butter with ground cinnamon and a little bit of sugar to taste. Spread the cinnamon butter onto slices of your favorite bread, and then toast or bake the bread until it is golden brown and crispy. You can also add some sliced fruit or a drizzle of honey to make it even more flavorful. Enjoy! `,
      url: "https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b-20.jpg",
    },
    {
      title: "Strawberry Cake",
      mins: "5:00",
      id: 10,
      recipe: "Strawberry Cake",
      desc: `Strawberry Cake Ingredients
              These are the ingredients you'll need to make this top-rated strawberry cake recipe:
              · Sugar: This strawberry cake starts with two cups of white sugar.
              · Baking powder: Baking powder acts as a leavener, which means it helps the cake rise.
              · Milk: Whole milk lends moisture to the homemade strawberry cake.
              · Strawberries: Use frozen strawberries to make homemade strawberry purée.
              · Vanilla: Vanilla extract enhances the overall flavor of the cake.
              How to Make Strawberry Cake From Scratch
              Here's a very brief overview of what you can expect when you make this homemade strawberry cake:
              1. Beat the butter, sugar, and Jell-O together. Add the eggs.
              2. Combine the dry ingredients.
              3. Gradually the dry mixture into the wet mixture, alternating with the milk.
              4. Add the remaining ingredients and transfer the batter to prepared cake pans.
              5. Bake in the preheated oven until a toothpick comes out clean.`,
      url: "https://th.bing.com/th/id/OIP.qdHqnzuqEI4cZ-VPs260XgHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Banana Cream Cheesecake",
      mins: "5:00",
      id: 11,
      recipe: "Banana Cake",
      desc: `Banana Cream Cheesecake is a delicious dessert that combines the creamy texture of cheesecake with the tropical flavor of bananas.
            Preheat your oven to 325°F (165°C). Grease a 9-inch springform pan with cooking spray.
            In a mixing bowl, combine graham cracker crumbs, 1/4 cup sugar, and melted butter. Mix until well combined.
            Press the mixture into the bottom of the prepared pan and up the sides about 1 inch. Set aside.
            In another mixing bowl, beat the cream cheese until smooth and creamy.
            Add the 1 1/4 cups sugar and continue to beat until well combined.
            Beat in the eggs one at a time, then add the mashed bananas and vanilla extract.
            Mix in the flour, then pour in the heavy cream and beat until the mixture is smooth and creamy.
            Pour the cheesecake filling into the crust-lined pan.
            Bake in the preheated oven for 70-80 minutes or until the center is set and the edges are lightly golden.
            Allow the cheesecake to cool for at least 1 hour at room temperature, then refrigerate for at least 4 hours or overnight.
            To serve, remove the sides of the springform pan and garnish with whipped cream, sliced bananas, and additional graham cracker crumbs if desired.
            Enjoy your delicious Banana Cream Cheesecake! `,
      url: "https://th.bing.com/th/id/OIP.PvEb8JGKc1RpcWIhYT9UawHaHa?pid=ImgDet&rs=1",
    },
    {
      title: "Zesty Lime Shrimp and Avocado Salad",
      mins: "5:00",
      id: 12,
      recipe: "Shrimp and Avocado",
      desc: `Zesty Lime Shrimp and Avocado Salad is a refreshing and delicious dish that combines cooked shrimp, fresh avocado, crunchy vegetables, and a tangy lime dressing. Here's a basic recipe to give you an idea of how to make it:
                •2 avocados, diced
                •1 red onion, thinly sliced
                •1 red bell pepper, diced
                •1/4 cup chopped cilantro
                •1/4 cup olive oil
                •Juice of 2 limes
                •2 garlic cloves, minced
                •Salt and pepper to taste
                Instructions:
                In a large bowl, combine the cooked shrimp, diced avocado, sliced red onion, diced red bell pepper, and chopped cilantro.
                In a small bowl, whisk together the olive oil, lime juice, minced garlic, salt, and pepper.
                Pour the dressing over the shrimp and avocado mixture, and toss to coat everything evenly.
                Serve the salad immediately, garnished with additional cilantro or lime wedges if desired.
                This salad is perfect for a light lunch or dinner, and it's also great for parties or gatherings. It's full of fresh, healthy ingredients and bursting with flavor, thanks to the lime dressing and cilantro. Feel free to adjust the recipe to your liking, adding or subtracting ingredients as you see fit. Enjoy!`,
      url: "https://th.bing.com/th/id/R.f2866dbe0d0ceb205b96869178bd3b41?rik=J9Rt7T865phavQ&pid=ImgRaw&r=0",
    },
  ],
};
