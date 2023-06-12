import CategoriesTab from 'components/CategoriesTab/CategoriesTab';
import RecipesGallery from 'components/RecipesGallery/RecipesGallery';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoryName } from '../redux/recipes/slice';

const Categories = () => {
  const dispatch = useDispatch();
  const categoryName = useSelector(state => state.categories.name);

  const onChangeCategory = name => {
    dispatch(setCategoryName(categoryName(name)));
  };
  console.log(categoryName);
  const recipes = [
    {
      _id: '6462a8f74c3d0ddd28897fb8',
      title: 'Mediterranean Pasta Salad',
      category: 'Seafood',
      area: 'Italian',
      instructions:
        'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
      description:
        'A salad made with pasta, vegetables (such as tomatoes, cucumbers, and olives), feta cheese, and a dressing made with olive oil and lemon juice.',
      thumb:
        'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560402/mwtf7uqrnsxvlpjqtslc.jpg',
      time: '27',
      youtube: 'https://www.youtube.com/watch?v=e52IL8zYmaE',
      tags: ['Pasta', 'Baking'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e3724',
          measure: '200 g',
        },
        {
          id: '640c2dd963a319ea671e3663',
          measure: '250 g',
        },
        {
          id: '640c2dd963a319ea671e36dd',
          measure: '1  bunch',
        },
        {
          id: '640c2dd963a319ea671e36cf',
          measure: '350 g',
        },
        {
          id: '640c2dd963a319ea671e36cd',
          measure: '3  tablespoons',
        },
        {
          id: '640c2dd963a319ea671e36f3',
          measure: '40 g',
        },
        {
          id: '640c2dd963a319ea671e3781',
          measure: '200 g',
        },
        {
          id: '640c2dd963a319ea671e375e',
          measure: 'to taste',
        },
        {
          id: '640c2dd963a319ea671e373f',
          measure: 'to taste',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fb9',
      title: 'Lamb tomato and sweet spices',
      category: 'Lamb',
      area: 'Moroccan',
      instructions:
        "Use pickled vine leaves here, preserved in brine. Small delicate leaves are better than the large bristly ones but, if only large leaves are to hand, then trim them to roughly 12 by 12 cms so that you don't get too many layers of leaves around the filling. And remove any stalks. Drain the preserved leaves, immerse them in boiling water for 10 minutes and then leave to dry on a tea towel before use. \r\nBasmati rice with butter and pine nuts is an ideal accompaniment. Couscous is great, too. Serves four.\r\nFirst make the filling. Put all the ingredients, apart from the tomatoes, in a bowl. Cut the tomatoes in half, coarsely grate into the bowl and discard the skins. Add half a teaspoon of salt and some black pepper, and stir. Leave on the side, or in the fridge, for up to a day. Before using, gently squeeze with your hands and drain away any juices that come out.\r\nTo make the sauce, heat the oil in a medium pan. Add the ginger and garlic, cook for a minute or two, taking care not to burn them, then add the tomato, lemon juice and sugar. Season, and simmer for 20 minutes.\r\nWhile the sauce is bubbling away, prepare the vine leaves. Use any torn or broken leaves to line the base of a wide, heavy saucepan. Trim any leaves from the fennel, cut it vertically into 0.5cm-thick slices and spread over the base of the pan to cover completely.\r\nLay a prepared vine leaf (see intro) on a work surface, veiny side up. Put two teaspoons of filling at the base of the leaf in a 2cm-long by 1cm-wide strip. Fold the sides of the leaf over the filling, then roll it tightly from bottom to top, in a cigar shape. Place in the pan, seam down, and repeat with the remaining leaves, placing them tightly next to each other in lines or circles (in two layers if necessary).\r\nPour the sauce over the leaves (and, if needed, add water just to cover). Place a plate on top, to weigh the leaves down, then cover with a lid. Bring to a boil, reduce the heat and cook on a bare simmer for 70 minutes. Most of the liquid should evaporate. Remove from the heat, and leave to cool a little - they are best served warm. When serving, bring to the table in the pan - it looks great. Serve a few vine leaves and fennel slices with warm rice. Spoon the braising juices on top and garnish with coriander.",
      description:
        'A Moroccan-inspired dish made with lamb, tomatoes, onions, and spices (such as cinnamon, ginger, and cumin), typically served with couscous or bread.',
      thumb:
        'https://www.themealdb.com/images/media/meals/qtwtss1468572261.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560405/zlxxkd81sadgwzbugyzl.jpg',
      time: '90',
      youtube: 'https://www.youtube.com/watch?v=vaZb1MnFBgA',
      tags: [''],
      ingredients: [
        {
          id: '640c2dd963a319ea671e372c',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e36e8',
          measure: '4cm piece finely chopped',
        },
        {
          id: '640c2dd963a319ea671e36e3',
          measure: '2 cloves peeled and chopped',
        },
        {
          id: '640c2dd963a319ea671e377f',
          measure: '800g peeled and chopped ',
        },
        {
          id: '640c2dd963a319ea671e3712',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3687',
          measure: '1 tsp',
        },
        {
          id: '640c2dd963a319ea671e378d',
          measure: '50',
        },
        {
          id: '640c2dd963a319ea671e36d0',
          measure: '1 large',
        },
        {
          id: '640c2dd963a319ea671e370d',
          measure: '400g',
        },
        {
          id: '640c2dd963a319ea671e37ae',
          measure: '1 medium',
        },
        {
          id: '640c2dd963a319ea671e3669',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e36a0',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e36af',
          measure: '2 tbsp chopped',
        },
        {
          id: '640c2dd963a319ea671e36a5',
          measure: '½ tsp ground ',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fba',
      title: 'Cream Cheese Tart',
      category: 'Starter',
      area: 'Unknown',
      instructions:
        'Crust: make a dough from 250g flour (I like mixing different flours like plain and wholegrain spelt flour), 125g butter, 1 egg and a pinch of salt, press it into a tart form and place it in the fridge. Filling: stir 300g cream cheese and 100ml milk until smooth, add in 3 eggs, 100g grated parmesan cheese and season with salt, pepper and nutmeg. Take the crust out of the fridge and prick the bottom with a fork. Pour in the filling and bake at 175 degrees C for about 25 minutes. Cover the tart with some aluminium foil after half the time. In the mean time, slice about 350g mini tomatoes. In a small pan heat 3tbsp olive oil, 3tbsp white vinegar, 1 tbsp honey, salt and pepper and combine well. Pour over the tomato slices and mix well. With a spoon, place the tomato slices on the tart, avoiding too much liquid on it. Decorate with basil leaves and enjoy',
      description:
        'A tart made with a sweet shortcrust pastry shell and a filling made with cream cheese, sugar, eggs, and vanilla extract.',
      thumb:
        'https://www.themealdb.com/images/media/meals/wurrux1468416624.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/ldjhhe56jmuhvmsqsvqp.jpg',
      time: '50',
      youtube: 'https://www.youtube.com/watch?v=UhQPwO4uymo',
      tags: ['Tart', 'Savory'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e36d7',
          measure: '250g',
        },
        {
          id: '640c2dd963a319ea671e367e',
          measure: '125g',
        },
        {
          id: '640c2dd963a319ea671e3820',
          measure: '1',
        },
        {
          id: '640c2dd963a319ea671e375e',
          measure: 'Pinch',
        },
        {
          id: '640c2dd963a319ea671e368f',
          measure: '300g',
        },
        {
          id: '640c2dd963a319ea671e371f',
          measure: '100ml milk',
        },
        {
          id: '640c2dd963a319ea671e36ca',
          measure: '3',
        },
        {
          id: '640c2dd963a319ea671e3736',
          measure: '100g',
        },
        {
          id: '640c2dd963a319ea671e3744',
          measure: '350g',
        },
        {
          id: '640c2dd963a319ea671e3793',
          measure: '3tbsp',
        },
        {
          id: '640c2dd963a319ea671e36fd',
          measure: '1 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3667',
          measure: 'Topping',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fbb',
      title: 'Pad See Ew',
      category: 'Chicken',
      area: 'Thai',
      instructions:
        "Mix Sauce in small bowl.\r\nMince garlic into wok with oil. Place over high heat, when hot, add chicken and Chinese broccoli stems, cook until chicken is light golden.\r\nPush to the side of the wok, crack egg in and scramble. Don't worry if it sticks to the bottom of the wok - it will char and which adds authentic flavour.\r\nAdd noodles, Chinese broccoli leaves and sauce. Gently mix together until the noodles are stained dark and leaves are wilted. Serve immediately!",
      description:
        'A Thai stir-fry dish made with wide rice noodles, soy sauce, oyster sauce, Chinese broccoli, and meat (such as chicken or beef).',
      thumb:
        'https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/nl3ks6ugu4uafh8fp4ot.jpg',
      time: '20',
      youtube: 'https://www.youtube.com/watch?v=Ohy1DELF4is',
      tags: ['Pasta'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e3755',
          measure: '6oz/180g',
        },
        {
          id: '640c2dd963a319ea671e36bd',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3732',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e376c',
          measure: '2 tsp',
        },
        {
          id: '640c2dd963a319ea671e3793',
          measure: '2 tsp',
        },
        {
          id: '640c2dd963a319ea671e3774',
          measure: '2 tsp',
        },
        {
          id: '640c2dd963a319ea671e378f',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e373a',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e36e3',
          measure: '2 cloves',
        },
        {
          id: '640c2dd963a319ea671e365b',
          measure: '1 cup',
        },
        {
          id: '640c2dd963a319ea671e3820',
          measure: '1',
        },
        {
          id: '640c2dd963a319ea671e369d',
          measure: '4 cups',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fbc',
      title: 'Irish stew',
      category: 'Beef',
      area: 'Irish',
      instructions:
        "Heat the oven to 180C/350F/gas mark 4. Drain and rinse the soaked wheat, put it in a medium pan with lots of water, bring to a boil and simmer for an hour, until cooked. Drain and set aside.\r\n\r\nSeason the lamb with a teaspoon of salt and some black pepper. Put one tablespoon of oil in a large, deep sauté pan for which you have a lid; place on a medium-high heat. Add some of the lamb – don't overcrowd the pan – and sear for four minutes on all sides. Transfer to a bowl, and repeat with the remaining lamb, adding oil as needed.\r\n\r\nLower the heat to medium and add a tablespoon of oil to the pan. Add the shallots and fry for four minutes, until caramelised. Tip these into the lamb bowl, and repeat with the remaining vegetables until they are all nice and brown, adding more oil as you need it.\r\n\r\nOnce all the vegetables are seared and removed from the pan, add the wine along with the sugar, herbs, a teaspoon of salt and a good grind of black pepper. Boil on a high heat for about three minutes.\r\n\r\nTip the lamb, vegetables and whole wheat back into the pot, and add the stock. Cover and boil for five minutes, then transfer to the oven for an hour and a half.\r\n\r\nRemove the stew from the oven and check the liquid; if there is a lot, remove the lid and boil for a few minutes.",
      description:
        'A traditional Irish dish made with lamb, potatoes, carrots, onions, and herbs, cooked in a broth or gravy.',
      thumb:
        'https://www.themealdb.com/images/media/meals/sxxpst1468569714.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/kknfjaqupiqhufj5kspx.jpg',
      time: '160',
      youtube: 'https://www.youtube.com/watch?v=kYH2qJXnSMo',
      tags: ['Stew', 'Meat'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e3796',
          measure: '300g soaked overnight in water',
        },
        {
          id: '640c2dd963a319ea671e370c',
          measure: '2kg cut into 3cm cubes',
        },
        {
          id: '640c2dd963a319ea671e372c',
          measure: '120ml',
        },
        {
          id: '640c2dd963a319ea671e3765',
          measure: '24 Skinned',
        },
        {
          id: '640c2dd963a319ea671e3684',
          measure: '4 large',
        },
        {
          id: '640c2dd963a319ea671e3784',
          measure: '2',
        },
        {
          id: '640c2dd963a319ea671e3689',
          measure: '1',
        },
        {
          id: '640c2dd963a319ea671e368d',
          measure: '350g',
        },
        {
          id: '640c2dd963a319ea671e3794',
          measure: '150ml',
        },
        {
          id: '640c2dd963a319ea671e3687',
          measure: '1 tsp',
        },
        {
          id: '640c2dd963a319ea671e36de',
          measure: '4 sprigs',
        },
        {
          id: '640c2dd963a319ea671e3731',
          measure: '4 sprigs',
        },
        {
          id: '640c2dd963a319ea671e3696',
          measure: '450ml',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fbd',
      title: 'Bakewell tart',
      category: 'Dessert',
      area: 'British',
      instructions:
        'To make the pastry, measure the flour into a bowl and rub in the butter with your fingertips until the mixture resembles fine breadcrumbs. Add the water, mixing to form a soft dough.\r\nRoll out the dough on a lightly floured work surface and use to line a 20cm/8in flan tin. Leave in the fridge to chill for 30 minutes.\r\nPreheat the oven to 200C/400F/Gas 6 (180C fan).\r\nLine the pastry case with foil and fill with baking beans. Bake blind for about 15 minutes, then remove the beans and foil and cook for a further five minutes to dry out the base.\r\nFor the filing, spread the base of the flan generously with raspberry jam.\r\nMelt the butter in a pan, take off the heat and then stir in the sugar. Add ground almonds, egg and almond extract. Pour into the flan tin and sprinkle over the flaked almonds.\r\nBake for about 35 minutes. If the almonds seem to be browning too quickly, cover the tart loosely with foil to prevent them burning.',
      description:
        'A British dessert consisting of a shortcrust pastry shell filled with raspberry jam, frangipane, and topped with almonds.',
      thumb:
        'https://www.themealdb.com/images/media/meals/wyrqqq1468233628.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560408/lygbfa7j94dgegmvnpas.jpg',
      time: '85',
      youtube: 'https://www.youtube.com/watch?v=1ahpSTf_Pvk',
      tags: ['Tart', 'Baking', 'Alcoholic'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e3743',
          measure: '175g/6oz',
        },
        {
          id: '640c2dd963a319ea671e369a',
          measure: '75g/2½oz',
        },
        {
          id: '640c2dd963a319ea671e36ad',
          measure: '2-3 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3749',
          measure: '1 tbsp',
        },
        {
          id: '640c2dd963a319ea671e367e',
          measure: '125g/4½oz',
        },
        {
          id: '640c2dd963a319ea671e3687',
          measure: '125g/4½oz',
        },
        {
          id: '640c2dd963a319ea671e36f6',
          measure: '125g/4½oz',
        },
        {
          id: '640c2dd963a319ea671e36da',
          measure: '1',
        },
        {
          id: '640c2dd963a319ea671e3861',
          measure: '½ tsp',
        },
        {
          id: '640c2dd963a319ea671e36d5',
          measure: '50g/1¾oz',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fbe',
      title: 'Spaghetti Bolognese',
      category: 'Beef',
      area: 'Italian',
      instructions:
        'Put the onion and oil in a large pan and fry over a fairly high heat for 3-4 mins. Add the garlic and mince and fry until they both brown. Add the mushrooms and herbs, and cook for another couple of mins.\r\n\r\nStir in the tomatoes, beef stock, tomato ketchup or purée, Worcestershire sauce and seasoning. Bring to the boil, then reduce the heat, cover and simmer, stirring occasionally, for 30 mins.\r\n\r\nMeanwhile, cook the spaghetti in a large pan of boiling, salted water, according to packet instructions. Drain well, run hot water through it, put it back in the pan and add a dash of olive oil, if you like, then stir in the meat sauce. Serve in hot bowls and hand round Parmesan cheese, for sprinkling on top.',
      description:
        'An Italian pasta dish made with spaghetti and a meat-based sauce, typically containing beef, tomatoes, onions, garlic, and herbs.',
      thumb:
        'https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/huqdxgwkvbhsfjqtexsm.jpg',
      time: '45',
      youtube: 'https://www.youtube.com/watch?v=-gF8d-fitkU',
      tags: ['Pasta', 'Meat'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e372e',
          measure: '2',
        },
        {
          id: '640c2dd963a319ea671e372c',
          measure: '1tbsp',
        },
        {
          id: '640c2dd963a319ea671e36e3',
          measure: '1 clove',
        },
        {
          id: '640c2dd963a319ea671e370f',
          measure: '500g',
        },
        {
          id: '640c2dd963a319ea671e3726',
          measure: '90g',
        },
        {
          id: '640c2dd963a319ea671e36c4',
          measure: '1tsp',
        },
        {
          id: '640c2dd963a319ea671e377f',
          measure: '400g can',
        },
        {
          id: '640c2dd963a319ea671e36ff',
          measure: '300ml',
        },
        {
          id: '640c2dd963a319ea671e377e',
          measure: '1tbsp',
        },
        {
          id: '640c2dd963a319ea671e3798',
          measure: '1tbsp',
        },
        {
          id: '640c2dd963a319ea671e376e',
          measure: '350g',
        },
        {
          id: '640c2dd963a319ea671e3735',
          measure: 'Topping',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fbf',
      title: 'Teriyaki Chicken Casserole',
      category: 'Chicken',
      area: 'Japanese',
      instructions:
        'Preheat oven to 350° F. Spray a 9x13-inch baking pan with non-stick spray.\r\nCombine soy sauce, ½ cup water, brown sugar, ginger and garlic in a small saucepan and cover. Bring to a boil over medium heat. Remove lid and cook for one minute once boiling.\r\nMeanwhile, stir together the corn starch and 2 tablespoons of water in a separate dish until smooth. Once sauce is boiling, add mixture to the saucepan and stir to combine. Cook until the sauce starts to thicken then remove from heat.\r\nPlace the chicken breasts in the prepared pan. Pour one cup of the sauce over top of chicken. Place chicken in oven and bake 35 minutes or until cooked through. Remove from oven and shred chicken in the dish using two forks.\r\n*Meanwhile, steam or cook the vegetables according to package directions.\r\nAdd the cooked vegetables and rice to the casserole dish with the chicken. Add most of the remaining sauce, reserving a bit to drizzle over the top when serving. Gently toss everything together in the casserole dish until combined. Return to oven and cook 15 minutes. Remove from oven and let stand 5 minutes before serving. Drizzle each serving with remaining sauce. Enjoy!',
      description:
        'A Japanese-inspired casserole made with chicken, teriyaki sauce, rice, and vegetables.',
      thumb:
        'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/g7gww5fdeu7kjti0fk7s.jpg',
      time: '75',
      youtube: 'https://www.youtube.com/watch?v=4aZr5hZXP_s',
      tags: ['Meat', 'Casserole'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e376c',
          measure: '3/4 cup',
        },
        {
          id: '640c2dd963a319ea671e378f',
          measure: '1/2 cup',
        },
        {
          id: '640c2dd963a319ea671e367d',
          measure: '1/4 cup',
        },
        {
          id: '640c2dd963a319ea671e36f8',
          measure: '1/2 teaspoon',
        },
        {
          id: '640c2dd963a319ea671e3720',
          measure: '1/2 teaspoon',
        },
        {
          id: '640c2dd963a319ea671e36b3',
          measure: '4 Tablespoons',
        },
        {
          id: '640c2dd963a319ea671e3694',
          measure: '2',
        },
        {
          id: '640c2dd963a319ea671e3772',
          measure: '1 (12 oz.)',
        },
        {
          id: '640c2dd963a319ea671e367c',
          measure: '3 cups',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fc0',
      title: 'Vegan Lasagna',
      category: 'Vegan',
      area: 'Italian',
      instructions:
        '1) Preheat oven to 180 degrees celcius. \r\n2) Boil vegetables for 5-7 minutes, until soft. Add lentils and bring to a gentle simmer, adding a stock cube if desired. Continue cooking and stirring until the lentils are soft, which should take about 20 minutes. \r\n3) Blanch spinach leaves for a few minutes in a pan, before removing and setting aside. \r\n4) Top up the pan with water and cook the lasagne sheets. When cooked, drain and set aside.\r\n5) To make the sauce, melt the butter and add the flour, then gradually add the soya milk along with the mustard and the vinegar. Cook and stir until smooth and then assemble the lasagne as desired in a baking dish. \r\n6) Bake in the preheated oven for about 25 minutes.',
      description:
        'A plant-based version of the classic Italian dish, made with layers of pasta, tomato sauce, vegan cheese, and vegetables (such as spinach, zucchini, and mushrooms).',
      thumb:
        'https://www.themealdb.com/images/media/meals/rvxxuy1468312893.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560404/vnwp682msfb6blsmqqav.jpg',
      time: '50',
      youtube: 'https://www.youtube.com/watch?v=VU8cXvlGbvc',
      tags: ['Vegan', 'Pasta'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e36f4',
          measure: '1 cups',
        },
        {
          id: '640c2dd963a319ea671e37ae',
          measure: '1',
        },
        {
          id: '640c2dd963a319ea671e379a',
          measure: '1 small',
        },
        {
          id: '640c2dd963a319ea671e36af',
          measure: 'sprinking',
        },
        {
          id: '640c2dd963a319ea671e376f',
          measure: '150g',
        },
        {
          id: '640c2dd963a319ea671e370e',
          measure: '10',
        },
        {
          id: '640c2dd963a319ea671e3788',
          measure: '35g',
        },
        {
          id: '640c2dd963a319ea671e36d7',
          measure: '4 tablespoons',
        },
        {
          id: '640c2dd963a319ea671e376d',
          measure: '300ml',
        },
        {
          id: '640c2dd963a319ea671e3727',
          measure: '1.5 teaspoons',
        },
        {
          id: '640c2dd963a319ea671e378e',
          measure: '1 teaspoon',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fc1',
      title: 'Chocolate Gateau',
      category: 'Dessert',
      area: 'French',
      instructions:
        'Preheat the oven to 180°C/350°F/Gas Mark 4. Grease and line the base of an 8 in round spring form cake tin with baking parchment\r\nBreak the chocolate into a heatproof bowl and place over a saucepan of gently simmering water and stir until it melts. (or melt in the microwave for 2-3 mins stirring occasionally)\r\nPlace the butter and sugar in a mixing bowl and cream together with a wooden spoon until light and fluffy. Gradually beat in the eggs, adding a little flour if the mixture begins to curdle. Fold in the remaining flour with the cooled, melted chocolate and milk. Mix until smooth.\r\nSpread the mixture into the cake tin and bake for 50-55 mins or until firm in the centre and a skewer comes out cleanly. Cool for 10 minutes, then turn out and cool completely.',
      description:
        'A French dessert consisting of layers of chocolate sponge cake and chocolate ganache, typically topped with chocolate glaze and chocolate decorations.',
      thumb:
        'https://www.themealdb.com/images/media/meals/tqtywx1468317395.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560403/zyahxajhkglf8sisiqlh.jpg',
      time: '75',
      youtube: 'https://www.youtube.com/watch?v=dsJtgmAhFF4',
      tags: ['Cake', 'Chocolate', 'Desert', 'Pudding'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e3742',
          measure: '250g',
        },
        {
          id: '640c2dd963a319ea671e367e',
          measure: '175g',
        },
        {
          id: '640c2dd963a319ea671e371f',
          measure: '2 tablespoons',
        },
        {
          id: '640c2dd963a319ea671e36ca',
          measure: '5',
        },
        {
          id: '640c2dd963a319ea671e36ee',
          measure: '175g',
        },
        {
          id: '640c2dd963a319ea671e36d7',
          measure: '125g',
        },
      ],
    },
    {
      _id: '6462a8f74c3d0ddd28897fc2',
      title: 'Fish pie',
      category: 'Seafood',
      area: 'British',
      instructions:
        '01.Put the potatoes in a large pan of cold salted water and bring to the boil. Lower the heat, cover, then simmer gently for 15 minutes until tender. Drain, then return to the pan over a low heat for 30 seconds to drive off any excess water. Mash with 1 tbsp olive oil, then season.\r\n02.Meanwhile put the milk in a large sauté pan, add the fish and bring to the boil. Remove from the heat, cover and stand for 3 minutes. Remove the fish (reserving the milk) and pat dry with kitchen paper, then gently flake into an ovenproof dish, discarding the skin and any bones.\r\n03.Heat the remaining oil in a pan, stir in the flour and cook for 30 seconds. Gradually stir in 200-250ml of the reserved milk (discard the rest). Grate in nutmeg, season, then bubble until thick. Stir in the cream.\r\n04.Preheat the oven to 190°C/fan170°C/gas 5. Grate the artichokes and add to the dish with the leek, prawns and herbs. Stir the lemon zest and juice into the sauce, then pour over. Mix gently with a wooden spoon.\r\n05.Spoon the mash onto the fish mixture, then use a fork to make peaks, which will crisp and brown as it cooks. Sprinkle over the cheese, then bake for 35-40 minutes until golden and bubbling. Serve with wilted greens.',
      description:
        'A traditional British dish made with flaky fish, creamy sauce, and mashed potatoes.',
      thumb:
        'https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg',
      preview:
        'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678560401/pakeiyrkttm00eb2lmia.jpg',
      time: '75',
      youtube: 'https://www.youtube.com/watch?v=2sX4fCgg-UI',
      tags: ['Fish', 'Pie', 'Breakfast', 'Baking'],
      ingredients: [
        {
          id: '640c2dd963a319ea671e36d9',
          measure: '900g',
        },
        {
          id: '640c2dd963a319ea671e372c',
          measure: '2 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3763',
          measure: '600ml',
        },
        {
          id: '640c2dd963a319ea671e3792',
          measure: '800g',
        },
        {
          id: '640c2dd963a319ea671e3743',
          measure: '1 tbsp',
        },
        {
          id: '640c2dd963a319ea671e372a',
          measure: 'Grating',
        },
        {
          id: '640c2dd963a319ea671e36c3',
          measure: '3 tbsp',
        },
        {
          id: '640c2dd963a319ea671e3706',
          measure: '200g',
        },
        {
          id: '640c2dd963a319ea671e3710',
          measure: '1 finely sliced',
        },
        {
          id: '640c2dd963a319ea671e3747',
          measure: '200g peeled raw',
        },
        {
          id: '640c2dd963a319ea671e3738',
          measure: 'Large handful',
        },
        {
          id: '640c2dd963a319ea671e36c1',
          measure: 'Handful',
        },
        {
          id: '640c2dd963a319ea671e3711',
          measure: 'Grated zest of 1',
        },
        {
          id: '640c2dd963a319ea671e36f9',
          measure: '25g grated',
        },
      ],
    },
  ];

  return (
    <>
      <h1 className="title">Categories</h1>
      <CategoriesTab
        categoryName={categoryName}
        onChangeCategory={onChangeCategory}
      />
      <RecipesGallery recipes={recipes} />
    </>
  );
};

export default Categories;
